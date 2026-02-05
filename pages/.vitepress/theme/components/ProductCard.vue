<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{
  title: string;
  description: string;
  image?: string;
  icon?: string;
  href: string;
  linkText?: string;
  external?: boolean;
}>();
</script>

<template>
  <a 
    :href="href" 
    class="product-card"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <div class="card-content">
      <div class="card-header">
        <div class="card-logo" v-if="image">
          <img :src="image" :alt="title" />
        </div>
        <div class="card-icon" v-else-if="icon">
          <Icon :name="icon" :size="28" />
        </div>
        <h3 class="card-title">{{ title }}</h3>
      </div>
      <p class="card-description">{{ description }}</p>
      <div class="card-action">
        <span class="link-text">{{ linkText || 'Learn More' }}</span>
        <Icon :name="external ? 'external-link' : 'chevron-right'" :size="14" />
      </div>
    </div>
  </a>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  border-color: var(--vp-c-brand-2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.card-logo {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  border-radius: 10px;
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  transition: color 0.2s ease;
}

.product-card:hover .card-title {
  color: var(--vp-c-brand-1);
}

.card-description {
  flex: 1;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1rem;
}

.card-action {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.card-action svg {
  opacity: 0.7;
}

@media (max-width: 640px) {
  .product-card {
    padding: 1.25rem;
  }
}
</style>
