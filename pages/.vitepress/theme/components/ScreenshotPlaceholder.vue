<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { withBase } from 'vitepress';

const props = defineProps<{
  src?: string;
  caption: string;
  description: string;
  alt?: string;
}>();

const ready = ref(false);
let generation = 0;
const source = computed(() => props.src ? withBase(props.src) : '');

function loadImage() {
  const current = ++generation;
  ready.value = false;
  if (!source.value) return;
  const image = new Image();
  image.onload = () => {
    if (generation === current) ready.value = true;
  };
  image.onerror = () => {
    if (generation === current) ready.value = false;
  };
  image.src = source.value;
}

onMounted(() => {
  loadImage();
  watch(source, loadImage);
});
onBeforeUnmount(() => { generation++; });
</script>

<template>
  <figure class="screenshot-slot">
    <img v-if="ready" :src="source" :alt="alt || caption" loading="lazy" />
    <div v-else class="screenshot-empty" role="img" :aria-label="description">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8" cy="9" r="1.5" />
        <path d="m3 17 5-5 4 4 3-3 6 6" />
      </svg>
      <strong>{{ caption }}</strong>
      <span>{{ description }}</span>
    </div>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.screenshot-slot { margin: 1.5rem 0; }
.screenshot-slot img { display: block; width: 100%; height: auto; border: 1px solid var(--vp-c-divider); border-radius: 12px; }
.screenshot-empty { display: flex; min-height: 200px; flex-direction: column; align-items: center; justify-content: center; gap: .75rem; padding: 2rem; border: 1px dashed var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-2); text-align: center; }
.screenshot-empty svg { width: 36px; height: 36px; opacity: .6; }
.screenshot-empty span { font-size: .875rem; max-width: 30rem; }
figcaption { padding-top: .5rem; color: var(--vp-c-text-2); font-size: .8125rem; text-align: center; }
</style>
