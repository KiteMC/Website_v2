import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KiteMC",
  description: "Documentation for all KiteMC team projects",
  head: [
    ["link", { rel: "icon", href: "https://kite.cn-nb1.rains3.com/logo.svg" }],
    ["meta", { name: "keywords", content: "KiteMC, SurviveX, VerifyMC, Minecraft, Server, Documentation" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "KiteMC Documentation" }],
    ["meta", { property: "og:description", content: "Documentation for all KiteMC team projects" }],
    ["meta", { property: "og:image", content: "https://kite.cn-nb1.rains3.com/logo.svg" }],
    ["meta", { name: "twitter:card", content: "summary" }],
  ],

  outDir: '../dist',
  ignoreDeadLinks: true,
  
  // SEO optimization
  sitemap: {
    hostname: 'https://kitemc.com'
  },
  
  // Performance optimization
  markdown: {
    lineNumbers: true,
  },

  appearance: true,
  cleanUrls: true,

  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "SurviveX", link: "/docs/survivex/", activeMatch: "/docs/survivex/" },
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
          { text: "SurviveX", link: "/zh/docs/survivex/", activeMatch: "/zh/docs/survivex/" },
          { text: "VerifyMC", link: "/zh/docs/verifymc/", activeMatch: "/zh/docs/verifymc/" },
        ],
      },
    },
  },

  themeConfig: {
    logo: "https://kite.cn-nb1.rains3.com/logo.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "SurviveX", link: "/docs/survivex/", activeMatch: "/docs/survivex/" },
      { text: "VerifyMC", link: "/docs/verifymc/", activeMatch: "/docs/verifymc/" },
    ],

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/KiteMC/" },
      { icon: "discord", link: "https://discord.gg/TCn9v88V" },
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
