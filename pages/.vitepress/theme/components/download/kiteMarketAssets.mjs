/**
 * Exact release-asset selection. An API or source JAR must never become the
 * default runtime download, even when GitHub returns it before the plugin.
 */
export function selectKiteMarketAssets(release) {
  const version = release.tag.replace(/^v/, '');
  if (!/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/.test(version)) {
    return { runtime: [], sdks: [], extras: [] };
  }
  const find = name => release.assets.find(asset => asset.name === name);
  return {
    runtime: ['legacy', 'modern', 'current'].map(id => ({
      id,
      asset: find(`KiteMarket-${id}-${version}.jar`),
    })),
    sdks: ['API', 'UI-API'].map(id => ({
      id,
      jar: find(`KiteMarket-${id}-${version}.jar`),
      sources: find(`KiteMarket-${id}-${version}-sources.jar`),
      javadoc: find(`KiteMarket-${id}-${version}-javadoc.jar`),
    })),
    extras: [
      { id: 'examples', asset: find(`KiteMarket-Examples-${version}.zip`) },
      { id: 'zh', asset: find(`KiteMarket-config-zh_CN-${version}.zip`) },
      { id: 'en', asset: find(`KiteMarket-config-en_US-${version}.zip`) },
      { id: 'checksums', asset: find('SHA256SUMS.txt') },
    ],
  };
}
