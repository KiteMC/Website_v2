// https://vitepress.dev/guide/custom-theme
import { h, ref, defineComponent } from "vue";
import type { Theme } from "vitepress";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.scss";
import "./custom-blocks.scss";
import { watch, nextTick } from "vue";

// Import custom components
import DownloadPage from "./components/download/DownloadPage.vue";

// Page transition component - handles blur fade effect on route change
const PageTransition = defineComponent({
  name: 'PageTransition',
  setup() {
    const route = useRoute();
    const isTransitioning = ref(false);
    
    // Watch route changes for transition
    watch(
      () => route.path,
      async (newPath, oldPath) => {
        if (newPath !== oldPath) {
          // Add transition class for blur effect
          document.documentElement.classList.add('page-transitioning');
          isTransitioning.value = true;
          
          // Wait for transition out
          await new Promise(resolve => setTimeout(resolve, 150));
          
          // Wait for next tick to ensure content is updated
          await nextTick();
          
          // Remove transition class
          await new Promise(resolve => setTimeout(resolve, 50));
          document.documentElement.classList.remove('page-transitioning');
          isTransitioning.value = false;
        }
      }
    );
    
    return {};
  },
  render() {
    return null;
  }
});

export default {
  extends: DefaultTheme,
  Layout() {
    // Inject custom components into the layout
    return h(DefaultTheme.Layout, null, {
      // Add page transition to activate setup function
      "nav-bar-content-before": () => h(PageTransition),
    });
  },
  enhanceApp({ app }) {
    // Register custom components
    app.component("PageTransition", PageTransition);
    app.component("DownloadPage", DownloadPage);
  },
} satisfies Theme;
