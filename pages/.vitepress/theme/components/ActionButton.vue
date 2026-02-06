<script setup lang="ts">
defineProps<{
  href: string;
  text: string;
  theme?: 'brand' | 'alt' | 'accent';
  external?: boolean;
  icon?: 'download' | 'arrow' | 'external' | 'cart' | 'login' | 'register';
}>();
</script>

<template>
  <a
    :href="href"
    class="action-button"
    :class="[theme || 'brand']"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <!-- Download Icon -->
    <svg v-if="icon === 'download'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    <!-- Cart Icon -->
    <svg v-else-if="icon === 'cart'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
    <!-- Login Icon -->
    <svg v-else-if="icon === 'login'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
      <polyline points="10 17 15 12 10 7"/>
      <line x1="15" y1="12" x2="3" y2="12"/>
    </svg>
    <!-- Register Icon -->
    <svg v-else-if="icon === 'register'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="8.5" cy="7" r="4"/>
      <line x1="20" y1="8" x2="20" y2="14"/>
      <line x1="23" y1="11" x2="17" y2="11"/>
    </svg>
    <!-- External Icon -->
    <svg v-else-if="icon === 'external' || external" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
    <!-- Arrow Icon -->
    <svg v-else-if="icon === 'arrow'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
    <span>{{ text }}</span>
  </a>
</template>

<style scoped>
.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.action-button.brand {
  background: var(--vp-c-brand-2);
  color: #ffffff !important;
  border: none;
}

.action-button.brand:hover {
  background: var(--vp-c-brand-1);
  color: #ffffff !important;
}

.action-button.alt {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.action-button.alt:hover {
  border-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.action-button.accent {
  background: var(--vp-c-accent-1);
  color: white;
  border: none;
}

.action-button.accent:hover {
  background: var(--vp-c-accent-2, #4299E1);
}

.action-button svg {
  flex-shrink: 0;
  opacity: 0.8;
}

/* Ensure brand buttons always keep white foreground (text + icon), even if global a:hover overrides */
.action-button.brand span,
.action-button.brand svg {
  color: #ffffff !important;
  stroke: #ffffff !important;
}
.action-button.brand:hover span,
.action-button.brand:hover svg {
  color: #ffffff !important;
  stroke: #ffffff !important;
}

@media (max-width: 640px) {
  .action-button {
    padding: 0.5rem 0.875rem;
    font-size: 0.8125rem;
  }
}
</style>
