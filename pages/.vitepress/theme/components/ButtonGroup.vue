<script setup lang="ts">
defineProps<{
  center?: boolean;
}>();
</script>

<template>
  <div class="button-group" :class="{ centered: center }">
    <slot />
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0;
}

.button-group.centered {
  justify-content: center;
}

@media (max-width: 640px) {
  .button-group {
    flex-direction: column;
  }
  
  .button-group :deep(.action-button) {
    width: 100%;
    justify-content: center;
  }
}
</style>
