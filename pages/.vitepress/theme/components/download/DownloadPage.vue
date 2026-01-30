<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { 
  getBuilds, 
  getLatestRelease,
  formatFileSize,
  formatDate,
  type ApiBuild,
  type ReleaseAsset
} from './downloadApi';
import { useTranslation } from './useTranslation';
import Pagination from './Pagination.vue';

const props = withDefaults(defineProps<{
  owner?: string;
  repo?: string;
  showProxy?: boolean;
}>(), {
  owner: 'KiteMC',
  repo: 'VerifyMC',
  showProxy: false,
});

const { t } = useTranslation();

// State
const isLoading = ref(true);
const error = ref<string | null>(null);
const latestRelease = ref<ApiBuild | null>(null);
const allReleases = ref<ApiBuild[]>([]);
const currentPage = ref(1);
const itemsPerPage = 5;
const expandedReleases = ref<Set<string>>(new Set());

// Computed
const totalPages = computed(() => {
  return Math.ceil(allReleases.value.length / itemsPerPage);
});

const paginatedReleases = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return allReleases.value.slice(start, end);
});

// Get main downloadable asset (.jar or .zip)
function getMainAsset(release: ApiBuild): ReleaseAsset | undefined {
  // Try .jar first (for plugins)
  const jar = release.assets.find(a => 
    a.name.endsWith('.jar') && !a.name.toLowerCase().includes('proxy')
  );
  if (jar) return jar;
  
  // Try .zip (for modpacks like SurviveX)
  const zip = release.assets.find(a => a.name.endsWith('.zip'));
  if (zip) return zip;
  
  // Fallback to any .jar
  return release.assets.find(a => a.name.endsWith('.jar'));
}

// Get proxy asset for VerifyMC
function getProxyAsset(release: ApiBuild): ReleaseAsset | undefined {
  return release.assets.find(a => 
    a.name.toLowerCase().includes('proxy') && a.name.endsWith('.jar')
  );
}

const latestMainAsset = computed(() => {
  if (!latestRelease.value) return null;
  return getMainAsset(latestRelease.value);
});

const latestProxyAsset = computed(() => {
  if (!latestRelease.value || !props.showProxy) return null;
  return getProxyAsset(latestRelease.value);
});

// Check if body is long enough to need collapsing
function isLongBody(body: string): boolean {
  return body.length > 200 || body.split('\n').length > 5;
}

// Toggle expand/collapse for release body
function toggleExpand(tag: string) {
  if (expandedReleases.value.has(tag)) {
    expandedReleases.value.delete(tag);
  } else {
    expandedReleases.value.add(tag);
  }
}

// Simple markdown to HTML conversion - compact style
function renderMarkdown(text: string): string {
  if (!text) return '';
  
  // Helper function to process inline formatting
  function processInline(str: string): string {
    return str
      // Escape HTML
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Code inline
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  
  // Split into lines for processing
  const lines = text.split('\n');
  const result: string[] = [];
  let inList = false;
  
  // Emoji pattern for detecting emoji-prefixed headers
  const emojiPattern = /^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}])\s*(.+)$/u;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip horizontal rules (---, ***, ___)
    if (/^[-*_]{3,}$/.test(trimmedLine)) {
      if (inList) { result.push('</ul>'); inList = false; }
      continue;
    }
    
    // Headers with # syntax (check raw line first)
    if (/^###\s+(.+)$/.test(trimmedLine)) {
      if (inList) { result.push('</ul>'); inList = false; }
      const content = trimmedLine.replace(/^###\s+(.+)$/, '$1');
      result.push('<h4>' + processInline(content) + '</h4>');
    } else if (/^##\s+(.+)$/.test(trimmedLine)) {
      if (inList) { result.push('</ul>'); inList = false; }
      const content = trimmedLine.replace(/^##\s+(.+)$/, '$1');
      result.push('<h3>' + processInline(content) + '</h3>');
    } else if (/^#\s+(.+)$/.test(trimmedLine)) {
      if (inList) { result.push('</ul>'); inList = false; }
      const content = trimmedLine.replace(/^#\s+(.+)$/, '$1');
      result.push('<h2>' + processInline(content) + '</h2>');
    }
    // List items (check raw line - must be "- " or "* " at start)
    else if (/^[-*]\s+(.+)$/.test(trimmedLine)) {
      if (!inList) { result.push('<ul>'); inList = true; }
      const content = trimmedLine.replace(/^[-*]\s+(.+)$/, '$1');
      result.push('<li>' + processInline(content) + '</li>');
    }
    // Emoji-prefixed lines as section headers
    else if (emojiPattern.test(trimmedLine)) {
      if (inList) { result.push('</ul>'); inList = false; }
      result.push('<h4 class="emoji-header">' + processInline(trimmedLine) + '</h4>');
    }
    // Empty line - close list if open
    else if (trimmedLine === '') {
      if (inList) { result.push('</ul>'); inList = false; }
    }
    // Regular text
    else if (trimmedLine) {
      if (inList) { result.push('</ul>'); inList = false; }
      result.push('<div class="text-line">' + processInline(trimmedLine) + '</div>');
    }
  }
  
  if (inList) result.push('</ul>');
  
  return result.join('');
}

// Methods
async function loadReleases() {
  isLoading.value = true;
  error.value = null;
  
  try {
    const [latest, all] = await Promise.all([
      getLatestRelease(props.owner, props.repo),
      getBuilds(props.owner, props.repo),
    ]);
    
    latestRelease.value = latest;
    allReleases.value = all;
  } catch (e) {
    error.value = t.value.error;
    console.error('Failed to load releases:', e);
  } finally {
    isLoading.value = false;
  }
}

// Load on mount
onMounted(() => {
  loadReleases();
});
</script>

<template>
  <div class="download-page">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-state">
      <div class="spinner"></div>
      <p>{{ t.loading }}</p>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <div class="error-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      <p>{{ error }}</p>
      <button class="retry-btn" @click="loadReleases">Retry</button>
    </div>
    
    <!-- Content -->
    <template v-else>
      <!-- Hero Download Section - Latest Release -->
      <section v-if="latestRelease" class="hero-download">
        <div class="hero-content">
          <div class="version-badge">
            <span class="badge-label">{{ t.latestRelease }}</span>
            <span v-if="latestRelease.prerelease" class="prerelease-tag">{{ t.prerelease }}</span>
          </div>
          
          <h1 class="version-name">{{ latestRelease.name || latestRelease.tag }}</h1>
          
          <div class="version-meta">
            <span class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {{ formatDate(latestRelease.publishedAt) }}
            </span>
            <span v-if="latestMainAsset" class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                <polyline points="13 2 13 9 20 9"/>
              </svg>
              {{ formatFileSize(latestMainAsset.size) }}
            </span>
          </div>
          
          <div class="download-actions">
            <!-- Main Download Button -->
            <a 
              v-if="latestMainAsset" 
              :href="latestMainAsset.browser_download_url"
              class="download-btn primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {{ t.downloadButton }}
            </a>
            
            <!-- Proxy Download Button (for VerifyMC) -->
            <a 
              v-if="latestProxyAsset" 
              :href="latestProxyAsset.browser_download_url"
              class="download-btn proxy"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {{ t.proxyPlugin }}
            </a>
            
            <!-- GitHub Link -->
            <a 
              :href="latestRelease.url" 
              target="_blank" 
              rel="noopener"
              class="download-btn secondary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              {{ t.viewOnGitHub }}
            </a>
          </div>
          
          <!-- Changelog for latest release -->
          <div v-if="latestRelease.body" class="changelog-section">
            <div class="changelog-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              {{ t.changelog }}
            </div>
            <div 
              class="changelog-content"
              :class="{ collapsed: isLongBody(latestRelease.body) && !expandedReleases.has(latestRelease.tag) }"
              v-html="renderMarkdown(latestRelease.body)"
            ></div>
            <button 
              v-if="isLongBody(latestRelease.body)"
              class="expand-btn"
              @click="toggleExpand(latestRelease.tag)"
            >
              {{ expandedReleases.has(latestRelease.tag) ? t.showLess : t.showMore }}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                :class="{ rotated: expandedReleases.has(latestRelease.tag) }"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="hero-decoration">
          <div class="glow-orb"></div>
        </div>
      </section>
      
      <!-- All Releases Section -->
      <section class="releases-section">
        <h2 class="section-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          {{ t.allReleases }}
        </h2>
        
        <div v-if="paginatedReleases.length === 0" class="empty-state">
          <p>{{ t.noReleases }}</p>
        </div>
        
        <div v-else class="releases-list">
          <div 
            v-for="(release, index) in paginatedReleases" 
            :key="release.tag"
            class="release-card"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <div class="release-header-row">
              <div class="release-info">
                <div class="release-title-row">
                  <a :href="release.url" target="_blank" rel="noopener" class="release-name">
                    {{ release.name || release.tag }}
                  </a>
                  <span v-if="release.prerelease" class="tag prerelease">{{ t.prerelease }}</span>
                  <span v-else class="tag stable">{{ t.stable }}</span>
                </div>
                <div class="release-meta">
                  <span>{{ formatDate(release.publishedAt) }}</span>
                  <span v-if="release.assets.length > 0">{{ release.assets.length }} {{ t.assets }}</span>
                </div>
              </div>
              
              <div class="release-actions">
                <!-- Main Download -->
                <a 
                  v-if="getMainAsset(release)" 
                  :href="getMainAsset(release)?.browser_download_url"
                  class="action-btn download"
                  :title="t.downloadButton"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </a>
                
                <!-- Proxy Download -->
                <a 
                  v-if="showProxy && getProxyAsset(release)" 
                  :href="getProxyAsset(release)?.browser_download_url"
                  class="action-btn proxy"
                  :title="t.proxyPlugin"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                    <line x1="6" y1="6" x2="6.01" y2="6"/>
                    <line x1="6" y1="18" x2="6.01" y2="18"/>
                  </svg>
                </a>
                
                <!-- GitHub -->
                <a 
                  :href="release.url" 
                  target="_blank" 
                  rel="noopener"
                  class="action-btn github"
                  :title="t.viewOnGitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Changelog -->
            <div v-if="release.body" class="release-changelog">
              <div 
                class="changelog-content small"
                :class="{ collapsed: isLongBody(release.body) && !expandedReleases.has(release.tag) }"
                v-html="renderMarkdown(release.body)"
              ></div>
              <button 
                v-if="isLongBody(release.body)"
                class="expand-btn small"
                @click="toggleExpand(release.tag)"
              >
                {{ expandedReleases.has(release.tag) ? t.showLess : t.showMore }}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  :class="{ rotated: expandedReleases.has(release.tag) }"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <Pagination 
          v-model:current-page="currentPage"
          :total-pages="totalPages"
        />
      </section>
    </template>
  </div>
</template>

<style scoped>
.download-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 1.5rem 3rem;
  animation: pageIn 0.5s ease-out;
}

@keyframes pageIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Loading & Error States */
.loading-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  color: var(--vp-c-text-2);
}

.spinner {
  width: 48px;
  height: 48px;
  border: 3px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-state { color: var(--vp-c-danger-1); }
.error-icon { opacity: 0.7; margin-bottom: 1rem; }

.retry-btn {
  margin-top: 1.5rem;
  padding: 0.6rem 2rem;
  background: transparent;
  border: 1px solid var(--vp-c-brand-2);
  border-radius: 8px;
  color: var(--vp-c-brand-1);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  background: var(--vp-c-brand-2);
  color: white;
}

/* Hero Download Section */
.hero-download {
  position: relative;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-decoration {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 350px;
  height: 350px;
  pointer-events: none;
}

.glow-orb {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--vp-c-brand-soft) 0%, transparent 70%);
  opacity: 0.5;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.3; }
}

.version-badge {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.badge-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.prerelease-tag {
  font-size: 0.65rem;
  padding: 0.12rem 0.4rem;
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
  border-radius: 4px;
  font-weight: 500;
}

.version-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem;
  line-height: 1.2;
}

.version-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
}

.meta-item svg { opacity: 0.7; }

/* Download Buttons */
.download-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
  position: relative;
  overflow: hidden;
}

.download-btn.primary {
  background: linear-gradient(90deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 50%, var(--vp-c-brand-3) 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  color: white;
}

.download-btn.primary:hover {
  transform: translateY(-2px);
  background-position: 100% 0%;
  box-shadow: 0 6px 16px rgba(159, 122, 234, 0.4);
}

.download-btn.primary svg,
.download-btn.primary span {
  color: white;
  fill: white;
}

.download-btn.proxy {
  background: linear-gradient(90deg, var(--vp-c-accent-1, #63B3ED) 0%, var(--vp-c-accent-2, #4299E1) 50%, #3182CE 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  color: white;
}

.download-btn.proxy:hover {
  transform: translateY(-2px);
  background-position: 100% 0%;
  box-shadow: 0 6px 16px rgba(99, 179, 237, 0.4);
}

.download-btn.proxy svg,
.download-btn.proxy span {
  color: white;
  fill: white;
}

.download-btn.secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.download-btn.secondary:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  box-shadow: 0 4px 12px rgba(159, 122, 234, 0.15);
}

/* Changelog Section */
.changelog-section {
  margin-top: 0.6rem;
  padding-top: 0.6rem;
  border-top: 1px solid var(--vp-c-divider);
}

.changelog-header {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 0.35rem;
}

.changelog-content {
  font-size: 0.78rem;
  line-height: 1.4;
  color: var(--vp-c-text-2);
  overflow: hidden;
  max-height: 800px;
  transition: max-height 0.4s ease, mask-image 0.3s ease;
}

.changelog-content.collapsed {
  max-height: 75px;
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

.changelog-content.small {
  font-size: 0.72rem;
  line-height: 1.35;
}

.changelog-content.small.collapsed {
  max-height: 55px;
}

.changelog-content :deep(.text-line) {
  margin: 0.1rem 0;
}

.changelog-content :deep(h2),
.changelog-content :deep(h3),
.changelog-content :deep(h4) {
  font-size: 0.88em;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0.3rem 0 0.1rem;
  line-height: 1.3;
}

.changelog-content :deep(h4.emoji-header) {
  font-size: 0.85em;
  margin: 0.25rem 0 0.08rem;
}

.changelog-content :deep(ul) {
  margin: 0.1rem 0;
  padding-left: 1rem;
}

.changelog-content :deep(li) {
  margin: 0.05rem 0;
  line-height: 1.35;
}

.changelog-content :deep(code) {
  background: var(--vp-c-bg-mute);
  padding: 0.05rem 0.2rem;
  border-radius: 3px;
  font-size: 0.85em;
}

.changelog-content :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.changelog-content :deep(a:hover) {
  text-decoration: underline;
}

.expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.4rem;
  padding: 0.25rem 0.6rem;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.expand-btn:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
}

.expand-btn.small {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
}

.expand-btn svg {
  transition: transform 0.2s ease;
}

.expand-btn svg.rotated {
  transform: rotate(180deg);
}

/* Releases Section */
.releases-section {
  margin-top: 1.5rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 1.25rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.section-title svg {
  color: var(--vp-c-brand-1);
}

.empty-state {
  text-align: center;
  padding: 2.5rem 2rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px dashed var(--vp-c-divider);
}

.releases-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.release-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  transition: all 0.2s ease;
  animation: itemIn 0.3s ease-out forwards;
  opacity: 0;
}

@keyframes itemIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.release-card:hover {
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.release-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.release-info {
  flex: 1;
  min-width: 0;
}

.release-title-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 0.3rem;
}

.release-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.release-name:hover {
  color: var(--vp-c-brand-1);
}

.tag {
  font-size: 0.65rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-weight: 500;
}

.tag.stable {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.tag.prerelease {
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
}

.release-meta {
  display: flex;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.release-actions {
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: var(--vp-c-text-2);
  transition: all 0.2s ease;
  text-decoration: none;
}

.action-btn.download {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.action-btn.download:hover {
  background: var(--vp-c-brand-2);
  color: white;
}

.action-btn.proxy {
  background: var(--vp-c-accent-soft, rgba(99, 179, 237, 0.16));
  color: var(--vp-c-accent-1, #63B3ED);
}

.action-btn.proxy:hover {
  background: var(--vp-c-accent-1, #63B3ED);
  color: white;
}

.action-btn.github {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.action-btn.github:hover {
  border-color: var(--vp-c-text-3);
  color: var(--vp-c-text-1);
}

/* Release Changelog */
.release-changelog {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
}

/* Responsive */
@media (max-width: 640px) {
  .download-page { padding: 1rem; }
  .hero-download { padding: 1.5rem; }
  .version-name { font-size: 1.4rem; }
  
  .download-actions { flex-direction: column; }
  .download-btn { width: 100%; justify-content: center; }
  
  .release-header-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .release-actions { width: 100%; }
  .action-btn { flex: 1; }
}
</style>
