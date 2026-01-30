/**
 * Translation hook for download page
 */
import { computed } from 'vue';
import { useData } from 'vitepress';

// Translation strings
const translations = {
  en: {
    download: {
      title: 'Download',
      latestRelease: 'Latest Release',
      allReleases: 'All Releases',
      version: 'Version',
      releaseDate: 'Release Date',
      downloadButton: 'Download',
      viewOnGitHub: 'View on GitHub',
      assets: 'Assets',
      fileSize: 'Size',
      downloads: 'Downloads',
      prerelease: 'Pre-release',
      stable: 'Stable',
      noReleases: 'No releases found',
      loading: 'Loading...',
      error: 'Failed to load releases',
      changelog: 'Changelog',
      showMore: 'Show more',
      showLess: 'Show less',
      proxyPlugin: 'Proxy Plugin',
      mainPlugin: 'Main Plugin',
      page: 'Page',
      of: 'of',
      previous: 'Previous',
      next: 'Next',
    },
  },
  zh: {
    download: {
      title: '下载',
      latestRelease: '最新版本',
      allReleases: '所有版本',
      version: '版本',
      releaseDate: '发布日期',
      downloadButton: '下载',
      viewOnGitHub: '在 GitHub 查看',
      assets: '资源文件',
      fileSize: '大小',
      downloads: '下载次数',
      prerelease: '预发布版',
      stable: '稳定版',
      noReleases: '未找到任何版本',
      loading: '加载中...',
      error: '加载失败',
      changelog: '更新日志',
      showMore: '展开',
      showLess: '收起',
      proxyPlugin: '代理插件',
      mainPlugin: '主插件',
      page: '第',
      of: '/',
      previous: '上一页',
      next: '下一页',
    },
  },
};

export function useTranslation() {
  const { lang } = useData();
  
  const t = computed(() => {
    const currentLang = lang.value === 'zh' ? 'zh' : 'en';
    return translations[currentLang].download;
  });
  
  return { t };
}
