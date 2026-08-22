
# 项目概况

- VitePress 文档站点，源码位于 `pages/`，主题组件位于 `pages/.vitepress/theme/`。
- 使用 `pnpm dev` 启动，使用 `pnpm build` 构建；本次验证使用 VitePress 入口直接构建成功。

# ArcPass 下载页

- 页面：`pages/docs/arcpass/download.md`，英文页为 `pages/en/docs/arcpass/download.md`。
- GitHub release 下载组件：`pages/.vitepress/theme/components/download/DownloadPage.vue`。
- 版本展示规则：最新稳定版在顶部；仅当 GitHub 最新 release 是 prerelease 时，在历史版本前显示预览版本；历史版本排除当前最新稳定版和预览版。

# VerifyMC 文档

- 中文页面位于 `pages/docs/verifymc/`，英文页面位于 `pages/en/docs/verifymc/`。
- VerifyMC 1.8.0 文档已更新为中文默认、English 可切换，并补充管理员注册账号 + 服务器 OP 登录流程。
- 旧版 VerifyMC GlassX 截图已从 `pages/public/images/verifymc/` 删除；Logo 和 ArcPass 图片保留。
- VerifyMC 首页、指南、下载、配置和 FAQ 已同步 1.8.0 信息；Release 中文和英文内容统一由 GitHub Release 页面展示。
- 2026-08-22 验证：`vitepress build pages` 成功。`pnpm lint` 受本机 pnpm `Ignored build scripts` 安全策略阻断，且项目未安装 `prettier` 可执行文件。
