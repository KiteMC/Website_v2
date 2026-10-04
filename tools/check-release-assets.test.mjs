import test from 'node:test';
import assert from 'node:assert/strict';
import { selectKiteMarketAssets } from '../pages/.vitepress/theme/components/download/kiteMarketAssets.mjs';

const asset = name => ({
  name,
  browser_download_url: `https://github.com/KiteMC/KiteMarket/releases/download/v1.0.0/${name}`,
  size: 1234,
});

test('shuffled SDKs and sources cannot be mistaken for any of the three runtime JARs', () => {
  const names = [
    'KiteMarket-API-1.0.0-sources.jar',
    'KiteMarket-UI-API-1.0.0.jar',
    'KiteMarket-current-1.0.0.jar',
    'KiteMarket-API-1.0.0.jar',
    'KiteMarket-modern-1.0.0-sources.jar',
    'KiteMarket-modern-1.0.0.jar',
    'KiteMarket-legacy-1.0.0.jar',
    'KiteMarket-API-1.0.0-javadoc.jar',
    'KiteMarket-Examples-1.0.0.zip',
    'KiteMarket-config-zh_CN-1.0.0.zip',
    'KiteMarket-config-en_US-1.0.0.zip',
    'SHA256SUMS.txt',
  ];
  const selected = selectKiteMarketAssets({ tag: 'v1.0.0', assets: names.map(asset) });
  assert.deepEqual(selected.runtime.map(file => file.asset.name), [
    'KiteMarket-legacy-1.0.0.jar',
    'KiteMarket-modern-1.0.0.jar',
    'KiteMarket-current-1.0.0.jar',
  ]);
  assert.equal(selected.sdks[0].sources.name, 'KiteMarket-API-1.0.0-sources.jar');
  assert.equal(selected.sdks[0].javadoc.name, 'KiteMarket-API-1.0.0-javadoc.jar');
  assert.equal(selected.sdks[1].jar.name, 'KiteMarket-UI-API-1.0.0.jar');
  assert.equal(selected.extras[0].asset.name, 'KiteMarket-Examples-1.0.0.zip');
});

test('SDK-only releases and mismatched versions have no guessed runtime download', () => {
  const sdkOnly = selectKiteMarketAssets({
    tag: 'v1.0.0',
    assets: [asset('KiteMarket-API-1.0.0.jar'), asset('KiteMarket-modern-0.9.0.jar')],
  });
  assert.ok(sdkOnly.runtime.every(file => file.asset === undefined));
  assert.equal(sdkOnly.sdks[0].jar.name, 'KiteMarket-API-1.0.0.jar');
  assert.deepEqual(selectKiteMarketAssets({ tag: 'latest', assets: [] }).runtime, []);
});
