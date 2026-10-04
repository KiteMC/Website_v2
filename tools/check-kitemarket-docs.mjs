/** Run after pnpm build. Independent checks matter because ignoreDeadLinks is enabled. */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '..');
const pages = join(root, 'pages');
const expectedScreenshots = [
  'home', 'market', 'rule-editor', 'supply-preview', 'auction-confirm', 'wallet',
].map(name => `/images/kitemarket/screenshot-${name}.png`);
let checkedLinks = 0;
let checkedAnchors = 0;

for (const locale of ['', 'en/']) {
  const folder = join(pages, locale, 'docs/kitemarket');
  const screenshots = [];
  for (const filename of readdirSync(folder).filter(name => name.endsWith('.md'))) {
    const source = join(folder, filename);
    const text = readFileSync(source, 'utf8');
    assert.ok(!text.includes('1.0.0-dev'), `Outdated release status: ${source}`);
    assert.ok(!/market-(?:legacy|modern|current)\/build\/libs|tools\/examples\/|gradlew\.bat build/.test(text),
      `Private-source installation instructions: ${source}`);
    const builtPage = join(root, 'dist', locale, 'docs/kitemarket', filename.replace(/\.md$/, '.html'));
    assert.ok(existsSync(builtPage), `Missing built page: ${builtPage}`);
    const html = readFileSync(builtPage, 'utf8');
    assert.ok(html.includes('<html'), `Invalid built page: ${builtPage}`);

    for (const match of text.matchAll(/<ScreenshotPlaceholder\s+src="([^"]+)"/g)) {
      assert.ok(expectedScreenshots.includes(match[1]), `Unexpected screenshot slot: ${match[1]}`);
      screenshots.push(match[1]);
    }
    const links = [
      ...Array.from(text.matchAll(/(?<!!)\[[^\]]+\]\(([^)]+)\)/g), match => match[1]),
      ...Array.from(text.matchAll(/\bhref="([^"]+)"/g), match => match[1]),
    ];
    for (const link of links) {
      if (/^(?:https?:|mailto:)/.test(link)) continue;
      const [target, rawAnchor] = link.split('#', 2);
      const withoutQuery = target.split('?', 1)[0];
      const candidate = target
        ? withoutQuery.startsWith('/') ? join(pages, withoutQuery) : resolve(dirname(source), withoutQuery)
        : source;
      const resolved = [
        candidate,
        `${candidate}.md`,
        join(candidate, 'index.md'),
      ].find(value => existsSync(value) && value.endsWith('.md'));
      assert.ok(resolved, `Missing link in ${source}: ${link}`);
      checkedLinks++;
      if (rawAnchor) {
        const builtTarget = join(root, 'dist', resolved.slice(pages.length + 1).replace(/\.md$/, '.html'));
        const targetHtml = readFileSync(builtTarget, 'utf8');
        assert.ok(targetHtml.includes(`id="${decodeURIComponent(rawAnchor)}"`),
          `Missing anchor in ${source}: ${link}`);
        checkedAnchors++;
      }
    }
  }
  assert.deepEqual(screenshots.sort(), [...expectedScreenshots].sort(),
    `Exactly six shared screenshot slots are required for ${locale || 'zh'}`);
  const guide = readFileSync(join(folder, 'guide.md'), 'utf8');
  assert.ok(guide.includes('57ef7c59-7c76-4192-abeb-4c4d7ac0a00f'));
  assert.ok(!guide.includes('REPLACE_WITH_ACTUAL_PRODUCT_ID') && !guide.includes('REPLACE_WITH_TRUSTED_PUBLIC_KEY'));
}
console.log(`KiteMarket docs: 24 built pages, ${checkedLinks} local links, ${checkedAnchors} anchors, 6 shared screenshot slots per language.`);
