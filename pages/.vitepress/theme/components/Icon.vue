<script setup lang="ts">
import {
  Cloud, Ticket, ClipboardList, Gift, Trophy, PaintBucket,
  BarChart3, Puzzle, Zap, Globe, Code2, Rocket, Settings,
  FileText, Terminal, CircleHelp, Download, MessageCircle, Mail,
  Key, UserPlus, LogIn, ShoppingCart, ExternalLink, ArrowRight,
  ChevronRight, Bug, Lightbulb, Box, Database,
  Gamepad, Shield, Link,
  type FunctionalComponent,
} from '@lucide/vue';

const props = defineProps<{
  name: string;
  size?: number | string;
}>();

// Map icon names to Lucide functional components
const iconMap: Record<string, FunctionalComponent> = {
  // Generic icons
  'cloud':                 Cloud,
  'ticket':                Ticket,
  'clipboard-list':        ClipboardList,
  'gift':                  Gift,
  'trophy':                Trophy,
  'color-swatch':          PaintBucket,
  'chart-bar':             BarChart3,
  'puzzle':                Puzzle,
  'lightning-bolt':        Zap,
  'globe':                 Globe,
  'code':                  Code2,
  'rocket':                Rocket,
  'cog':                   Settings,
  'document-text':         FileText,
  'terminal':              Terminal,
  'question-mark-circle':  CircleHelp,
  'download':              Download,
  'chat':                  MessageCircle,
  'mail':                  Mail,
  'key':                   Key,
  'user-add':              UserPlus,
  'login':                 LogIn,
  'cart':                  ShoppingCart,
  'shopping-cart':         ShoppingCart,
  'register':              UserPlus,
  'external-link':         ExternalLink,
  'external':              ExternalLink,
  'arrow-right':           ArrowRight,
  'arrow':                 ArrowRight,
  'chevron-right':         ChevronRight,
  'bug':                   Bug,
  'light-bulb':            Lightbulb,
  'cube':                  Box,
  'database':              Database,
  'palette':               PaintBucket,
  'plugin':                Puzzle,
  'chart':                 BarChart3,
  'bolt':                  Zap,
  'clipboard':             ClipboardList,
  'gamepad':               Gamepad,
  'shield':                Shield,
  'link':                  Link,
};

// Product-specific icons keep custom inline SVGs (not in Lucide)
const customIcons: Record<string, string> = {
  'survivex':  '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  'verifymc':  '<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  'arcpass':   '<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/>',
  'github':    '<path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>',
};

const lucideIcon = iconMap[props.name];
const customIcon = customIcons[props.name];
</script>

<template>
  <!-- Lucide icon — currentColor inherits from parent, automatic dark/light -->
  <component
    v-if="lucideIcon"
    :is="lucideIcon"
    :size="(size as number) || 24"
    class="icon"
    :stroke-width="2"
  />
  <!-- Custom SVG fallback for product logos -->
  <svg
    v-else-if="customIcon"
    class="icon"
    :width="size || 24"
    :height="size || 24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-html="customIcon"
  />
  <!-- Ultimate fallback -->
  <Box v-else :size="(size as number) || 24" class="icon" :stroke-width="2" />
</template>

<style scoped>
.icon {
  flex-shrink: 0;
}
</style>
