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
    <p class="dl-hero-label">ArcPass</p>
    <h1 class="dl-hero-title">下载</h1>
    <p class="dl-hero-desc">获取最新版本，开始构建你的战令系统。</p>
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
      <div class="dl-req-value">1.18 – 1.21+</div>
    </div>
    <div class="dl-req-card">
      <div class="dl-req-label">Java</div>
      <div class="dl-req-value">17+</div>
    </div>
    <div class="dl-req-card">
      <div class="dl-req-label">Paper / Spigot</div>
      <div class="dl-req-value">1.18+</div>
    </div>
    <div class="dl-req-card">
      <div class="dl-req-label">Folia</div>
      <div class="dl-req-value">1.19+</div>
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

  <ClientOnly>
    <DownloadPage owner="KiteMC" repo="ArcPass" :show-proxy="false" />
  </ClientOnly>
</div>

<!-- Language Packs -->
<div class="dl-section">
  <div class="dl-section-head">
    <span class="dl-section-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
    </span>
    <h2>语言包</h2>
  </div>
  <p class="dl-text">插件默认配置文件为<strong>英文</strong>。您可以下载英文与简体中文配置包，用于快速恢复示例配置或完成多语言本地化。</p>

  <div class="dl-lang-grid">
    <a class="dl-lang-card" href="https://github.com/KiteMC/ArcPass/releases" target="_blank" rel="noopener noreferrer">
      <div class="dl-lang-flag">EN</div>
      <div class="dl-lang-info">
        <div class="dl-lang-name">English 英文示例</div>
        <div class="dl-lang-status">
          <span class="dl-badge default">默认内置</span>
          <span class="dl-badge download">下载配置包</span>
        </div>
      </div>
      <svg class="dl-lang-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </a>
    <a class="dl-lang-card" href="https://github.com/KiteMC/ArcPass/releases" target="_blank" rel="noopener noreferrer">
      <div class="dl-lang-flag">中</div>
      <div class="dl-lang-info">
        <div class="dl-lang-name">简体中文</div>
        <div class="dl-lang-status">
          <span class="dl-badge download">下载配置包</span>
        </div>
      </div>
      <svg class="dl-lang-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </a>
  </div>

  <div class="dl-steps">
    <div class="dl-step"><span class="dl-step-num">1</span><span>从 <a href="https://github.com/KiteMC/ArcPass/releases" target="_blank" rel="noopener">Releases</a> 下载 <code>ArcPass-lang-&lt;语言代码&gt;.zip</code></span></div>
    <div class="dl-step"><span class="dl-step-num">2</span><span>解压并覆盖到服务器的 <code>plugins/ArcPass/</code> 目录</span></div>
    <div class="dl-step"><span class="dl-step-num">3</span><span>编辑 <code>config.yml</code> 中的 <code>locale.default</code> 为对应语言代码</span></div>
    <div class="dl-step"><span class="dl-step-num">4</span><span>重启服务器或执行 <code>/arcpass reload</code></span></div>
  </div>
</div>

<!-- License -->
<div class="dl-section">
  <div class="dl-section-head">
    <span class="dl-section-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
    </span>
    <h2>购买许可证</h2>
  </div>
  <p class="dl-text">ArcPass 是付费插件，需要有效许可证才能在服务器上激活使用。</p>

  <div class="dl-price-grid">
    <div class="dl-price-card">
      <div class="dl-price-name">标准版</div>
      <div class="dl-price-amount">¥68</div>
      <div class="dl-price-features">
        <div class="dl-price-feat"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 5 台设备</div>
        <div class="dl-price-feat"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 单机 3 端口</div>
        <div class="dl-price-feat"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 终身更新</div>
      </div>
    </div>
    <div class="dl-price-card featured">
      <div class="dl-price-badge">推荐</div>
      <div class="dl-price-name">专业版</div>
      <div class="dl-price-amount">¥198</div>
      <div class="dl-price-features">
        <div class="dl-price-feat"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 25 台设备</div>
        <div class="dl-price-feat"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 单机 15 端口</div>
        <div class="dl-price-feat"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 终身更新</div>
        <div class="dl-price-feat"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 优先技术支持</div>
      </div>
    </div>
  </div>

  <ButtonGroup>
    <ActionButton href="https://license.kitemc.com/products/arcpass" text="立即购买" theme="brand" icon="cart" :external="true" />
    <ActionButton href="https://license.kitemc.com/dashboard/licenses" text="查看许可证" theme="alt" icon="login" :external="true" />
  </ButtonGroup>
</div>

<!-- API Dependency -->
<div class="dl-section">
  <div class="dl-section-head">
    <span class="dl-section-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
    </span>
    <h2>API 依赖</h2>
  </div>
  <p class="dl-text">如果您是开发者，需要集成 ArcPass API：</p>

::: code-group

```xml [Maven]
<dependency>
    <groupId>com.kitemc</groupId>
    <artifactId>arcpass-api</artifactId>
    <version>1.2.2</version>
    <scope>provided</scope>
</dependency>
```

```kotlin [Gradle (Kotlin DSL)]
compileOnly("com.kitemc:arcpass-api:1.2.2")
```

```groovy [Gradle (Groovy)]
compileOnly 'com.kitemc:arcpass-api:1.2.2'
```

:::

  <p class="dl-text">详细信息请参阅 <InlineLink href="./developer/">开发者文档</InlineLink>。</p>
</div>

<!-- Support -->
<div class="dl-section">
  <div class="dl-section-head">
    <span class="dl-section-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    </span>
    <h2>反馈与支持</h2>
  </div>

  <LinkGrid :cols="2">
    <LinkCard icon="bug" title="Bug 反馈" description="在 GitHub 提交问题" href="https://github.com/KiteMC/ArcPass/issues" :external="true" />
    <LinkCard icon="light-bulb" title="功能建议" description="在 GitHub 讨论区提出" href="https://github.com/KiteMC/ArcPass/discussions" :external="true" />
    <LinkCard icon="chat" title="Discord 社区" description="获取技术支持" href="https://discord.com/invite/TCn9v88V" :external="true" />
    <LinkCard icon="mail" title="邮件支持" description="starry_cbz@outlook.com" href="mailto:starry_cbz@outlook.com" :external="true" />
  </LinkGrid>
</div>

</div>

<style>
/* ===== Page wrapper ===== */
.dl-page { max-width: 800px; margin: 0 auto; }
.dl-page h1, .dl-page h2, .dl-page h3 { border: none; margin: 0; padding: 0; letter-spacing: -0.02em; }

/* ===== Hero ===== */
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
.dl-hero-desc { font-size: 0.95rem; color: var(--vp-c-text-2); line-height: 1.6; max-width: 480px; margin: 0; }
.dl-hero-glow {
  position: absolute; top: -40%; right: -15%; width: 320px; height: 320px;
  background: radial-gradient(circle, var(--vp-c-brand-soft) 0%, transparent 70%);
  opacity: 0.6; pointer-events: none;
}

/* ===== Section ===== */
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

/* ===== Requirements grid ===== */
.dl-req-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
.dl-req-card {
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  border-radius: 10px; padding: 1rem; text-align: center;
  transition: border-color 0.2s;
}
.dl-req-card:hover { border-color: var(--vp-c-brand-soft); }
.dl-req-label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--vp-c-text-3); margin-bottom: 0.35rem; }
.dl-req-value { font-size: 1rem; font-weight: 600; color: var(--vp-c-text-1); }

/* ===== Language pack cards ===== */
.dl-lang-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1.25rem; }
.dl-lang-card {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.875rem 1rem;
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  border-radius: 10px; text-decoration: none; color: inherit;
  transition: border-color 0.2s, background 0.2s;
}
a.dl-lang-card,
a.dl-lang-card * {
  text-decoration: none !important;
  border-bottom: none !important;
}
a.dl-lang-card:hover { border-color: var(--vp-c-brand-soft); background: var(--vp-c-bg-elv); }
.dl-lang-card.active { border-color: var(--vp-c-brand-soft); }
.dl-lang-flag {
  width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
  background: var(--vp-c-brand-soft); border-radius: 8px;
  font-size: 0.8rem; font-weight: 700; color: var(--vp-c-brand-1); flex-shrink: 0;
}
.dl-lang-info { flex: 1; min-width: 0; }
.dl-lang-name { font-size: 0.875rem; font-weight: 500; color: var(--vp-c-text-1); }
.dl-lang-status { margin-top: 0.15rem; }
.dl-badge {
  font-size: 0.65rem; font-weight: 600; padding: 0.1rem 0.45rem;
  border-radius: 4px; letter-spacing: 0.02em;
  text-decoration: none;
}
.dl-badge.default { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.dl-badge.download { background: var(--vp-c-accent-soft, rgba(99,179,237,0.16)); color: var(--vp-c-accent-1, #63B3ED); }
.dl-lang-arrow { color: var(--vp-c-text-3); flex-shrink: 0; opacity: 0.5; transition: opacity 0.2s; }
a.dl-lang-card:hover .dl-lang-arrow { opacity: 1; color: var(--vp-c-brand-1); }

/* ===== Steps ===== */
.dl-steps {
  display: flex; flex-direction: column; gap: 0.5rem;
  padding: 1rem 1.25rem; background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider); border-radius: 10px;
}
.dl-step {
  display: flex; align-items: center; gap: 0.75rem;
  font-size: 0.8rem; color: var(--vp-c-text-2); line-height: 1.5;
}
.dl-step a { color: var(--vp-c-brand-1); text-decoration: none; font-weight: 500; }
.dl-step a:hover { text-decoration: underline; }
.dl-step code { background: var(--vp-c-bg-mute); padding: 0.1rem 0.35rem; border-radius: 4px; font-size: 0.8em; color: var(--vp-c-brand-1); border: 1px solid var(--vp-c-divider); }
.dl-step-num {
  width: 22px; height: 22px; display: flex; align-items: center; justify-content: center;
  background: var(--vp-c-brand-soft); border-radius: 50%;
  font-size: 0.7rem; font-weight: 700; color: var(--vp-c-brand-1); flex-shrink: 0;
}

/* ===== Pricing ===== */
.dl-price-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1rem; }
.dl-price-card {
  position: relative;
  padding: 1.5rem; background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider); border-radius: 12px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.dl-price-card:hover { border-color: var(--vp-c-brand-soft); }
.dl-price-card.featured {
  border-color: var(--vp-c-brand-2);
  box-shadow: 0 0 0 1px var(--vp-c-brand-soft), 0 4px 16px rgba(159, 122, 234, 0.1);
}
.dl-price-badge {
  position: absolute; top: -0.5rem; right: 1rem;
  padding: 0.15rem 0.6rem; background: var(--vp-c-brand-2);
  color: white; font-size: 0.65rem; font-weight: 600;
  border-radius: 4px; letter-spacing: 0.03em;
}
.dl-price-name { font-size: 0.8rem; font-weight: 600; color: var(--vp-c-text-2); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.35rem; }
.dl-price-amount { font-size: 1.75rem; font-weight: 700; color: var(--vp-c-text-1); margin-bottom: 1rem; }
.dl-price-features { display: flex; flex-direction: column; gap: 0.45rem; }
.dl-price-feat {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.8rem; color: var(--vp-c-text-2);
}
.dl-price-feat svg { color: var(--vp-c-brand-1); flex-shrink: 0; }

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .dl-hero { padding: 2rem 1.5rem 1.5rem; margin: -1rem -1rem 0; }
  .dl-hero-title { font-size: 1.75rem; }
  .dl-req-grid { grid-template-columns: repeat(2, 1fr); }
  .dl-lang-grid { grid-template-columns: 1fr; }
  .dl-price-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .dl-hero { padding: 1.5rem 1rem 1.25rem; }
  .dl-hero-title { font-size: 1.5rem; }
  .dl-req-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
