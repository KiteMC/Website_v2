<script setup lang="ts">
defineProps<{
  href: string;
  external?: boolean;
}>();
</script>

<template>
  <a
    :href="href"
    class="inline-link"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <svg v-if="external" class="external-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  </a>
</template>

<style scoped>
.inline-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.inline-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.external-icon {
  opacity: 0.6;
  flex-shrink: 0;
}
</style>
