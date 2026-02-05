<script setup lang="ts">
defineProps<{
  cols?: 1 | 2 | 3 | 4;
}>();
</script>

<template>
  <div class="feature-grid" :class="[`cols-${cols || 2}`]">
    <slot />
  </div>
</template>

<style scoped>
.feature-grid {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}

.feature-grid.cols-1 {
  grid-template-columns: 1fr;
}

.feature-grid.cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.feature-grid.cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.feature-grid.cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 960px) {
  .feature-grid.cols-3,
  .feature-grid.cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .feature-grid.cols-2,
  .feature-grid.cols-3,
  .feature-grid.cols-4 {
    grid-template-columns: 1fr;
  }
}
</style>
