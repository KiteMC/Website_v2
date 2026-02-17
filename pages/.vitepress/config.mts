import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mts";

const SITE_URL = 'https://kitemc.com';

// JSON-LD Structured Data
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KiteMC",
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/logo/kitemc.svg`,
  "sameAs": [
    "https://github.com/KiteMC/",
    "https://discord.gg/dcsBw5Z5ZT"
  ]
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "KiteMC Documentation",
  "url": SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KiteMC",
  description: "Documentation for all KiteMC team projects",
  head: [
    // Favicon
    ["link", { rel: "icon", href: "/images/logo/kitemc.svg" }],
    ["link", { rel: "apple-touch-icon", href: "/images/logo/kitemc.svg" }],

    // Basic SEO Meta
    ["meta", { name: "keywords", content: "KiteMC, VerifyMC, ArcPass, Minecraft, Server, Plugin, Documentation" }],
    ["meta", { name: "author", content: "KiteMC Team" }],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { name: "theme-color", content: "#5672cd" }],

    // Open Graph
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "KiteMC" }],
    ["meta", { property: "og:title", content: "KiteMC Documentation" }],
    ["meta", { property: "og:description", content: "Documentation for all KiteMC team projects" }],
    ["meta", { property: "og:image", content: `${SITE_URL}/images/logo/kitemc.svg` }],
    ["meta", { property: "og:url", content: SITE_URL }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:locale:alternate", content: "zh_CN" }],

    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: "KiteMC Documentation" }],
    ["meta", { name: "twitter:description", content: "Documentation for all KiteMC team projects" }],
    ["meta", { name: "twitter:image", content: `${SITE_URL}/images/logo/kitemc.svg` }],

    // JSON-LD Structured Data
    ["script", { type: "application/ld+json" }, JSON.stringify(jsonLdOrganization)],
    ["script", { type: "application/ld+json" }, JSON.stringify(jsonLdWebSite)],
  ],

  outDir: '../dist',
  ignoreDeadLinks: true,

  // SEO optimization
  sitemap: {
    hostname: SITE_URL
  },

  // Performance optimization
  markdown: {
    lineNumbers: true,
  },

  appearance: true,
  cleanUrls: true,

  // SEO: Add canonical URL and hreflang for each page
  transformPageData(pageData) {
    const relativePath = pageData.relativePath.replace(/\.md$/, '').replace(/index$/, '');
    const isZhPage = relativePath.startsWith('zh/');

    // Generate canonical URL
    const canonicalPath = relativePath.endsWith('/') || relativePath === ''
      ? relativePath
      : relativePath + '/';
    const canonicalUrl = `${SITE_URL}/${canonicalPath}`.replace(/\/+$/, '/').replace(/\/$/, '') || SITE_URL;

    // Generate alternate language URLs
    const enPath = isZhPage ? relativePath.replace(/^zh\//, '') : relativePath;
    const zhPath = isZhPage ? relativePath : `zh/${relativePath}`;

    const enUrl = `${SITE_URL}/${enPath}`.replace(/\/+$/, '/').replace(/\/$/, '') || SITE_URL;
    const zhUrl = `${SITE_URL}/${zhPath}`.replace(/\/+$/, '/').replace(/\/$/, '');

    pageData.frontmatter.head ??= [];

    // Add canonical link
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }]
    );

    // Add hreflang links
    pageData.frontmatter.head.push(
      ['link', { rel: 'alternate', hreflang: 'en', href: enUrl }],
      ['link', { rel: 'alternate', hreflang: 'zh', href: zhUrl }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: enUrl }]
    );
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "ArcPass", link: "/docs/arcpass/", activeMatch: "/docs/arcpass/" },
          { text: "VerifyMC", link: "/docs/verifymc/", activeMatch: "/docs/verifymc/" },
        ],
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "ArcPass", link: "/zh/docs/arcpass/", activeMatch: "/zh/docs/arcpass/" },
          { text: "VerifyMC", link: "/zh/docs/verifymc/", activeMatch: "/zh/docs/verifymc/" },
        ],
      },
    },
  },

  themeConfig: {
    logo: "/images/logo/kitemc.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "ArcPass", link: "/docs/arcpass/", activeMatch: "/docs/arcpass/" },
      { text: "VerifyMC", link: "/docs/verifymc/", activeMatch: "/docs/verifymc/" },
    ],

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/KiteMC/" },
      { icon: "discord", link: "https://discord.gg/dcsBw5Z5ZT" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" fill="currentColor"/></svg>'
        },
        link: 'https://qm.qq.com/q/R83fq82HWm',
        ariaLabel: 'QQ Group'
      },
    ],
  },
});
