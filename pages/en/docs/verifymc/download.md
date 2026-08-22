---
aside: false
title: VerifyMC Downloads
description: Download VerifyMC v1.8.0 and matching proxy builds from GitHub Releases.
---

<script setup>
import DownloadPage from '@theme/components/download/DownloadPage.vue';
</script>

<p>VerifyMC <strong>v1.8.0</strong> is the current release. Release notes include Chinese and English in the same release body, so you can read the updates here without opening a separate translation page.</p>

<p>Install the main JAR on your backend server. If your network uses BungeeCord, Waterfall, or Velocity, download the matching proxy JAR from the same release.</p>

<ClientOnly>
  <DownloadPage owner="KiteMC" repo="VerifyMC" :show-proxy="true" />
</ClientOnly>
