---
aside: false
---

<script setup>
import DownloadPage from '@theme/components/download/DownloadPage.vue';
</script>

<div class="dl-page">

<!-- Hero -->
<div class="dl-hero">
  <div class="dl-hero-content">
    <p class="dl-hero-label">VerifyMC</p>
    <h1 class="dl-hero-title">下载</h1>
    <p class="dl-hero-desc">从 GitHub Releases 获取最新稳定版本，并按要求部署到您的服务器与代理端。</p>
  </div>
  <div class="dl-hero-glow"></div>
</div>

<!-- Requirements -->
<div class="dl-section">
  <div class="dl-section-head">
    <span class="dl-section-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    </span>
    <h2>版本要求</h2>
  </div>

  <div class="dl-req-grid">
    <div class="dl-req-card">
      <div class="dl-req-label">Minecraft</div>
      <div class="dl-req-value">1.13 – 1.21+</div>
    </div>
    <div class="dl-req-card">
      <div class="dl-req-label">Java</div>
      <div class="dl-req-value">17+</div>
    </div>
    <div class="dl-req-card">
      <div class="dl-req-label">服务端</div>
      <div class="dl-req-value">Paper / Spigot / Folia</div>
    </div>
    <div class="dl-req-card">
      <div class="dl-req-label">代理（可选）</div>
      <div class="dl-req-value">BungeeCord / Velocity</div>
    </div>
  </div>
</div>

<!-- Download -->
<div class="dl-section">
  <div class="dl-section-head">
    <span class="dl-section-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
    </span>
    <h2>版本列表</h2>
  </div>

  <p class="dl-text">
    VerifyMC 主插件与代理端扩展（如 <code>verifymc-proxy</code>）均通过 GitHub Releases 发布。
    推荐始终使用最新稳定版，并避免跨大版本跳级更新。
  </p>

  <ClientOnly>
    <DownloadPage owner="KiteMC" repo="VerifyMC" :show-proxy="true" />
  </ClientOnly>
</div>

<!-- Quick start -->
<div class="dl-section">
  <div class="dl-section-head">
    <span class="dl-section-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l4 4-4 4-4-4 4-4zm0 8l4 4-4 4-4-4 4-4z"/></svg>
    </span>
    <h2>快速部署步骤</h2>
  </div>

  <div class="dl-steps">
    <div class="dl-step"><span class="dl-step-num">1</span><span>从 <a href="https://github.com/KiteMC/VerifyMC/releases" target="_blank" rel="noopener">GitHub Releases</a> 下载最新版本的 <code>VerifyMC-*.jar</code>。</span></div>
    <div class="dl-step"><span class="dl-step-num">2</span><span>将插件放入后端服务器 <code>plugins/</code> 目录并重启服务器。</span></div>
    <div class="dl-step"><span class="dl-step-num">3</span><span>按需下载并部署 <code>verifymc-proxy-*.jar</code> 到 BungeeCord / Velocity 代理端。</span></div>
    <div class="dl-step"><span class="dl-step-num">4</span><span>参考 <InlineLink href="../guide/" /> 完成数据库、邮件与问卷等配置。</span></div>
  </div>
</div>

<!-- Support -->
<div class="dl-section">
  <div class="dl-section-head">
    <span class="dl-section-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    </span>
    <h2>反馈与支持</h2>
  </div>

  <p class="dl-text">遇到安装或使用问题时，可以通过以下渠道获取帮助：</p>

  <LinkGrid :cols="2">
    <LinkCard icon="github" title="GitHub 仓库" description="查看源码与更新记录" href="https://github.com/KiteMC/VerifyMC" :external="true" />
    <LinkCard icon="bug" title="Bug 反馈" description="在 GitHub 提交 Issue" href="https://github.com/KiteMC/VerifyMC/issues" :external="true" />
    <LinkCard icon="chat" title="Discord 社区" description="加入社区获取实时帮助" href="https://discord.com/invite/TCn9v88V" :external="true" />
    <LinkCard icon="mail" title="邮件支持" description="starry_cbz@outlook.com" href="mailto:starry_cbz@outlook.com" :external="true" />
  </LinkGrid>
</div>

</div>

<style>
.dl-page { max-width: 800px; margin: 0 auto; }
.dl-page h1, .dl-page h2 { border: none; margin: 0; padding: 0; letter-spacing: -0.02em; }

.dl-hero {
  position: relative;
  padding: 2.5rem 2rem 2rem;
  margin: -1rem -1.5rem 0;
  border-radius: 16px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.dl-hero-content { position: relative; z-index: 1; }
.dl-hero-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.35rem;
}
.dl-hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  background: linear-gradient(120deg, var(--vp-c-brand-1) 0%, var(--vp-c-accent-1, #63B3ED) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.15;
  margin-bottom: 0.5rem;
}
.dl-hero-desc { font-size: 0.95rem; color: var(--vp-c-text-2); line-height: 1.6; max-width: 520px; margin: 0; }
.dl-hero-glow {
  position: absolute; top: -40%; right: -15%; width: 320px; height: 320px;
  background: radial-gradient(circle, var(--vp-c-brand-soft) 0%, transparent 70%);
  opacity: 0.6; pointer-events: none;
}

.dl-section { margin-top: 2.5rem; }
.dl-section-head {
  display: flex; align-items: center; gap: 0.6rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.dl-section-head h2 { font-size: 1.15rem; font-weight: 600; color: var(--vp-c-text-1); }
.dl-section-icon {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px;
  background: var(--vp-c-brand-soft);
  border-radius: 8px; color: var(--vp-c-brand-1); flex-shrink: 0;
}
.dl-text { font-size: 0.875rem; color: var(--vp-c-text-2); line-height: 1.7; margin: 0 0 1rem; }

.dl-req-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
.dl-req-card {
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  border-radius: 10px; padding: 1rem; text-align: center;
  transition: border-color 0.2s;
}
.dl-req-card:hover { border-color: var(--vp-c-brand-soft); }
.dl-req-label {
  font-size: 0.7rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.04em; color: var(--vp-c-text-3); margin-bottom: 0.35rem;
}
.dl-req-value { font-size: 0.95rem; font-weight: 600; color: var(--vp-c-text-1); }

.dl-steps { display: flex; flex-direction: column; gap: 0.5rem; }
.dl-step {
  display: flex; align-items: flex-start; gap: 0.5rem;
  font-size: 0.875rem; color: var(--vp-c-text-2);
}
.dl-step-num {
  width: 20px; height: 20px; border-radius: 999px;
  background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1);
  font-size: 0.75rem; display: inline-flex; align-items: center; justify-content: center;
  margin-top: 2px; flex-shrink: 0;
}

@media (max-width: 720px) {
  .dl-hero { padding: 2rem 1.5rem 1.75rem; margin: -1rem -1rem 0; }
  .dl-hero-title { font-size: 2rem; }
  .dl-req-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
</style>
