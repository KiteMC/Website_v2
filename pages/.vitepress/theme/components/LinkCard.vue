<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{
  title: string;
  description?: string;
  icon?: string;
  href: string;
  external?: boolean;
}>();
</script>

<template>
  <a 
    :href="href" 
    class="link-card"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <div class="card-icon" v-if="icon">
      <Icon :name="icon" :size="20" />
    </div>
    <div class="card-content">
      <div class="card-title">
        {{ title }}
        <svg v-if="external" class="external-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        <svg v-else class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </div>
      <div class="card-description" v-if="description">{{ description }}</div>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.link-card:hover {
  border-color: var(--vp-c-brand-soft);
  background: var(--vp-c-bg-elv);
}

.card-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  border-radius: 8px;
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  transition: color 0.2s ease;
}

.link-card:hover .card-title {
  color: var(--vp-c-brand-1);
}

.arrow-icon,
.external-icon {
  opacity: 0.5;
  flex-shrink: 0;
}

.card-description {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin-top: 0.125rem;
  line-height: 1.4;
}

@media (max-width: 640px) {
  .link-card {
    padding: 0.625rem 0.875rem;
  }
  
  .card-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
