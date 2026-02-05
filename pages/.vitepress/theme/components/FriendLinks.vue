<script setup lang="ts">
import Icon from './Icon.vue';

interface FriendLink {
  name: string;
  description: string;
  image?: string;
  href: string;
}

defineProps<{
  links: FriendLink[];
}>();
</script>

<template>
  <div class="friend-links">
    <a 
      v-for="link in links" 
      :key="link.name"
      :href="link.href" 
      class="friend-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="link-logo" v-if="link.image">
        <img :src="link.image" :alt="link.name" />
      </div>
      <div class="link-info">
        <span class="link-name">{{ link.name }}</span>
        <span class="link-desc">{{ link.description }}</span>
      </div>
      <Icon name="external-link" :size="14" class="link-icon" />
    </a>
  </div>
</template>

<style scoped>
.friend-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0;
}

.friend-link {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.friend-link:hover {
  border-color: var(--vp-c-brand-soft);
  background: var(--vp-c-bg-elv);
}

.link-logo {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.link-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.link-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.link-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.link-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.link-icon {
  color: var(--vp-c-text-3);
  margin-left: auto;
}

@media (max-width: 640px) {
  .friend-link {
    width: 100%;
  }
}
</style>
