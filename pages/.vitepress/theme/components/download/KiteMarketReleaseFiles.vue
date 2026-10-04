<script setup lang="ts">
import { computed } from 'vue';
import { useTranslation } from './useTranslation';
import { formatFileSize, type ApiBuild } from './downloadApi';
import { selectKiteMarketAssets } from './kiteMarketAssets.mjs';

const props = defineProps<{
  release: ApiBuild;
}>();
const { language } = useTranslation();
const files = computed(() => selectKiteMarketAssets(props.release));
const labels = computed(() => language.value === 'zh' ? {
  runtime: '服务器运行包：只安装一份',
  sdk: '开发者 SDK：请勿放入 plugins',
  unavailable: '该版本未提供此文件',
  extras: '配置、示例与校验',
  examples: '可运行开发示例',
  zh: '中文配置包',
  en: '英文配置包',
  checksums: 'SHA-256 校验文件',
  download: '下载',
} : {
  runtime: 'Server plugin: install exactly one',
  sdk: 'Developer SDKs: do not install in plugins',
  unavailable: 'Not included in this release',
  extras: 'Configuration, examples and checksums',
  examples: 'Runnable developer examples',
  zh: 'Chinese configuration',
  en: 'English configuration',
  checksums: 'SHA-256 checksums',
  download: 'Download',
});
const runtimeDetails: Record<string, { name: string; range: string; java: string }> = {
  legacy: { name: 'Legacy', range: 'Minecraft 1.16.5–1.20.4', java: 'Java 11' },
  modern: { name: 'Modern', range: 'Minecraft 1.20.5–1.21.11', java: 'Java 21' },
  current: { name: 'Current', range: 'Minecraft 26.2', java: 'Java 25' },
};
</script>

<template>
  <div class="km-release-files">
    <h3>{{ labels.runtime }}</h3>
    <div class="runtime-grid">
      <article v-for="file in files.runtime" :key="file.id" class="runtime-card">
        <strong>{{ runtimeDetails[file.id].name }}</strong>
        <span>{{ runtimeDetails[file.id].range }}</span>
        <span class="runtime-java">{{ runtimeDetails[file.id].java }} {{ language === 'zh' ? '字节码' : 'bytecode' }}</span>
        <a v-if="file.asset" :href="file.asset.browser_download_url" class="file-link">
          <span>{{ labels.download }} · {{ formatFileSize(file.asset.size) }}</span>
          <code>{{ file.asset.name }}</code>
        </a>
        <span v-else class="file-missing">{{ labels.unavailable }}</span>
      </article>
    </div>
    <h3>{{ labels.sdk }}</h3>
    <div class="sdk-grid">
      <div v-for="sdk in files.sdks" :key="sdk.id" class="sdk-card">
        <strong>{{ sdk.id === 'API' ? 'Market API' : 'UI API' }}</strong>
        <div class="sdk-links">
          <a v-if="sdk.jar" :href="sdk.jar.browser_download_url" :title="sdk.jar.name">JAR</a>
          <a v-if="sdk.sources" :href="sdk.sources.browser_download_url" :title="sdk.sources.name">{{ language === 'zh' ? '源码' : 'Sources' }}</a>
          <a v-if="sdk.javadoc" :href="sdk.javadoc.browser_download_url" :title="sdk.javadoc.name">Javadoc</a>
          <span v-if="!sdk.jar && !sdk.sources && !sdk.javadoc" class="file-missing">{{ labels.unavailable }}</span>
        </div>
      </div>
    </div>
    <h3>{{ labels.extras }}</h3>
    <div class="extra-links">
      <template v-for="file in files.extras" :key="file.id">
        <a v-if="file.asset" :href="file.asset.browser_download_url" :title="file.asset.name">
          {{ labels[file.id as 'examples' | 'zh' | 'en' | 'checksums'] }}
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.km-release-files { margin: 1.5rem 0; }
.km-release-files h3 { margin: 1.25rem 0 .75rem; font-size: 1rem; color: var(--vp-c-text-1); }
.runtime-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .75rem; }
.runtime-card { display: flex; flex-direction: column; gap: .4rem; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg); font-size: .8rem; }
.runtime-card strong { font-size: 1rem; }
.runtime-java, .file-missing { color: var(--vp-c-text-2); font-size: .75rem; }
.file-link { display: flex; flex-direction: column; gap: .35rem; margin-top: .4rem; color: var(--vp-c-brand-1); font-weight: 600; }
.file-link code { font-size: .7rem; overflow-wrap: anywhere; font-weight: 400; }
.sdk-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .75rem; }
.sdk-card { padding: .85rem 1rem; border: 1px solid var(--vp-c-divider); border-radius: 10px; font-size: .85rem; }
.sdk-links, .extra-links { display: flex; gap: .75rem; flex-wrap: wrap; margin-top: .4rem; }
.sdk-links a, .extra-links a { color: var(--vp-c-brand-1); font-size: .85rem; text-decoration: underline; }
@media (max-width: 760px) { .runtime-grid { grid-template-columns: 1fr; } }
@media (max-width: 440px) { .sdk-grid { grid-template-columns: 1fr; } }
</style>
