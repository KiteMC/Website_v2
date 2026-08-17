---
title: KiteMC - Minecraft 服务器工具与插件
description: KiteMC 团队官方文档站，提供 VerifyMC 白名单插件、ArcPass 通行证系统的完整文档。
head:
  - - meta
    - name: keywords
      content: KiteMC, Minecraft, 服务器, 插件, VerifyMC, ArcPass, 文档, 我的世界
  - - meta
    - property: og:title
      content: KiteMC - Minecraft 服务器工具与插件
  - - meta
    - property: og:description
      content: KiteMC 团队官方文档站，提供 VerifyMC、ArcPass 的完整文档。
layout: home

hero:
  name: 'KiteMC'
  text: '文档'
  tagline: 'KiteMC 团队的所有项目文档'
  image:
    src: /images/logo/kitemc.svg
    alt: KiteMC
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/KiteMC/
---

## 我们的项目

<ProductGrid :cols="2">
  <ProductCard
    title="ArcPass"
    description="功能强大的战斗通行证系统，多等级奖励与赛季管理"
    image="/images/logo/arcpass.svg"
    href="./docs/arcpass/"
    link-text="开始阅读"
  />
  <ProductCard
    title="VerifyMC"
    description="支持 Web 管理的实名邮箱验证插件，安全便捷"
    image="/images/logo/verifymc.svg"
    href="./docs/verifymc/"
    link-text="开始阅读"
  />
</ProductGrid>

## 友情链接

<FriendLinks :links="[
  {
    name: 'KiteMC 许可证中心',
    description: '许可证管理平台',
    image: '/images/logo/kitemc.svg',
    href: 'https://license.kitemc.com/'
  },
  {
    name: 'Rainyun',
    description: '云服务提供商',
    image: '/images/logo/rainyun.png',
    href: 'https://cloud.kitemc.com/'
  }
]" />
