<script setup lang="ts">
import { Code2, ArrowUpRight } from '@lucide/vue'

const route = useRoute()
const menuOpen = ref(false)
const appBaseURL = String(useRuntimeConfig().app.baseURL || '/')
const assetUrl = (path: string) => `${appBaseURL.endsWith('/') ? appBaseURL : `${appBaseURL}/`}${path}`
const links = [
  { label: 'Product', href: '/#product' },
  { label: 'Features', href: '/#features' },
  { label: 'Documentation', href: '/docs' },
]
</script>

<template>
  <div class="site-shell">
    <div class="announcement">
      <span class="announcement-dot"></span>
      <span>Open source package infrastructure, on your terms.</span>
      <a href="https://github.com/amkargar/depyard" target="_blank" rel="noreferrer">Explore the project <ArrowUpRight :size="13" /></a>
    </div>
    <header class="site-header">
      <NuxtLink class="brand" to="/" aria-label="Depyard home">
        <img :src="assetUrl('depyard-logo.png')" alt="" width="34" height="34">
        <span>depyard<span class="brand-period">.</span></span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Main navigation">
        <NuxtLink v-for="link in links" :key="link.label" :to="link.href" :class="{ active: link.href === '/docs' && route.path === '/docs' }">{{ link.label }}</NuxtLink>
      </nav>
      <div class="header-actions">
        <a class="github-link" href="https://github.com/amkargar/depyard" target="_blank" rel="noreferrer" aria-label="Depyard on GitHub"><Code2 :size="18" /></a>
        <BaseButton class="button button-small header-cta" size="sm" to="/docs#quick-install">Get started <ArrowUpRight :size="14" /></BaseButton>
        <button class="mobile-menu-button" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
          <span></span><span></span>
        </button>
      </div>
      <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
        <NuxtLink v-for="link in links" :key="link.label" :to="link.href" @click="menuOpen = false">{{ link.label }}</NuxtLink>
        <NuxtLink to="/docs#quick-install" @click="menuOpen = false">Get started <ArrowUpRight :size="14" /></NuxtLink>
      </nav>
    </header>
    <main><slot /></main>
    <footer class="site-footer">
      <NuxtLink class="brand footer-brand" to="/">
        <img :src="assetUrl('depyard-logo.png')" alt="" width="27" height="27">
        <span>depyard<span class="brand-period">.</span></span>
      </NuxtLink>
      <p>Build your own package infrastructure.</p>
      <div class="footer-links">
        <NuxtLink to="/docs">Documentation</NuxtLink>
        <a href="https://github.com/amkargar/depyard" target="_blank" rel="noreferrer">GitHub <ArrowUpRight :size="13" /></a>
        <a href="https://github.com/amkargar/depyard/blob/main/LICENSE" target="_blank" rel="noreferrer">License</a>
      </div>
      <span class="copyright">© {{ new Date().getFullYear() }} Depyard</span>
    </footer>
  </div>
</template>
