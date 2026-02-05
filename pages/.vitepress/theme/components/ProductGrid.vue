<script setup lang="ts">
defineProps<{
  cols?: 2 | 3 | 4;
}>();
</script>

<template>
  <div class="product-grid" :class="[`cols-${cols || 2}`]">
    <slot />
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  gap: 1.5rem;
  margin: 2rem 0;
}

.product-grid.cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.product-grid.cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.product-grid.cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 960px) {
  .product-grid.cols-3,
  .product-grid.cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .product-grid.cols-2,
  .product-grid.cols-3,
  .product-grid.cols-4 {
    grid-template-columns: 1fr;
  }
}
</style>
