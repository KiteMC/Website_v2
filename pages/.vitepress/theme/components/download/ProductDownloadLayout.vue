<script setup lang="ts">
defineProps<{
  product: string;
  title: string;
  description: string;
  image: string;
}>();
</script>

<template>
  <div class="product-download-page">
    <header class="dl-hero">
      <div>
        <p class="dl-hero-label">{{ product }}</p>
        <h1>{{ title }}</h1>
        <p class="dl-hero-description">{{ description }}</p>
      </div>
      <img :src="image" :alt="product" width="88" height="88" />
    </header>
    <slot />
  </div>
</template>

<style scoped>
.dl-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: radial-gradient(ellipse at top right, var(--vp-c-brand-soft), transparent 75%), var(--vp-c-bg-soft);
}
.dl-hero-label {
  margin: 0 0 .5rem;
  color: var(--vp-c-brand-1);
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .08em;
}
.dl-hero h1 { margin: 0; font-size: 2rem; line-height: 1.3; }
.dl-hero-description { margin: .75rem 0 0; color: var(--vp-c-text-2); line-height: 1.7; }
.dl-hero img { flex-shrink: 0; }
@media (max-width: 640px) {
  .dl-hero { padding: 1.5rem; gap: 1rem; }
  .dl-hero h1 { font-size: 1.7rem; }
  .dl-hero img { width: 64px; height: 64px; }
}
@media (max-width: 420px) {
  .dl-hero { align-items: flex-start; }
  .dl-hero img { width: 48px; height: 48px; }
}
</style>
