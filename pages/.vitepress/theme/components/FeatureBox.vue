<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{
  icon?: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="feature-box">
    <div class="feature-icon" v-if="icon">
      <Icon :name="icon" :size="24" />
    </div>
    <div class="feature-content">
      <div class="feature-title">{{ title }}</div>
      <div class="feature-description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.feature-box {
  display: flex;
  gap: 0.875rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  transition: border-color 0.2s ease;
}

.feature-box:hover {
  border-color: var(--vp-c-brand-soft);
}

.feature-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  border-radius: 8px;
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
}

.feature-content {
  flex: 1;
  min-width: 0;
}

.feature-title {
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.feature-description {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>
