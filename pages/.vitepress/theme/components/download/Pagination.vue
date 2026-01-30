<script setup lang="ts">
import { computed } from 'vue';
import { useTranslation } from './useTranslation';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void;
}>();

const { t } = useTranslation();

const canGoPrevious = computed(() => props.currentPage > 1);
const canGoNext = computed(() => props.currentPage < props.totalPages);

const visiblePages = computed(() => {
  const pages: (number | string)[] = [];
  const total = props.totalPages;
  const current = props.currentPage;
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    
    if (current > 3) {
      pages.push('...');
    }
    
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (current < total - 2) {
      pages.push('...');
    }
    
    pages.push(total);
  }
  
  return pages;
});

function goToPage(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:currentPage', page);
  }
}
</script>

<template>
  <div class="pagination" v-if="totalPages > 1">
    <button 
      class="page-btn nav-btn" 
      :disabled="!canGoPrevious"
      @click="goToPage(currentPage - 1)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
      {{ t.previous }}
    </button>
    
    <div class="page-numbers">
      <template v-for="(page, index) in visiblePages" :key="index">
        <span v-if="page === '...'" class="ellipsis">...</span>
        <button 
          v-else
          class="page-btn" 
          :class="{ active: page === currentPage }"
          @click="goToPage(page as number)"
        >
          {{ page }}
        </button>
      </template>
    </div>
    
    <button 
      class="page-btn nav-btn" 
      :disabled="!canGoNext"
      @click="goToPage(currentPage + 1)"
    >
      {{ t.next }}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
  box-shadow: 0 0 10px var(--glow-color);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-btn.active {
  background: linear-gradient(135deg, var(--vp-c-brand-2), var(--vp-c-brand-3));
  border-color: transparent;
  color: white;
  box-shadow: 0 0 15px var(--glow-color);
}

.nav-btn {
  gap: 0.4rem;
}

.ellipsis {
  padding: 0 0.5rem;
  color: var(--vp-c-text-3);
}

@media (max-width: 480px) {
  .nav-btn span {
    display: none;
  }
  
  .nav-btn {
    padding: 0 0.5rem;
  }
}
</style>
