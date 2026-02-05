<script setup lang="ts">
defineProps<{
  cols?: 1 | 2 | 3;
}>();
</script>

<template>
  <div class="link-grid" :class="[`cols-${cols || 2}`]">
    <slot />
  </div>
</template>

<style scoped>
.link-grid {
  display: grid;
  gap: 0.75rem;
  margin: 1rem 0;
}

.link-grid.cols-1 {
  grid-template-columns: 1fr;
}

.link-grid.cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.link-grid.cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .link-grid.cols-2,
  .link-grid.cols-3 {
    grid-template-columns: 1fr;
  }
}
</style>
