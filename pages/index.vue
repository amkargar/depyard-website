<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Boxes, Check, Code2, GitBranch, Globe2, LockKeyhole, Package, Rocket, Settings2, ShieldCheck, Sparkles, Terminal, Zap } from '@lucide/vue'

const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl || '').replace(/\/$/, '')
useSeoMeta({
  title: 'Your package infrastructure, under your control',
  description: 'Depyard is a self-hosted, extensible package and artifact registry for Pub, Flutter, Go, Python, npm, and more. Deploy in minutes with Docker.',
  ogTitle: 'Depyard — your package infrastructure, under your control',
  ogDescription: 'A self-hosted home for the packages, builds, and artifacts your teams depend on.',
  ogType: 'website',
  ogSiteName: 'Depyard',
  ogImage: siteUrl ? `${siteUrl}/depyard-logo.png` : undefined,
  twitterCard: siteUrl ? 'summary_large_image' : 'summary',
  twitterTitle: 'Depyard — package infrastructure, under your control',
  twitterDescription: 'Self-hosted package and artifact registries for modern teams.',
  robots: 'index,follow',
  googlebot: 'index,follow,max-image-preview:large',
  themeColor: '#f7faff',
})
useHead({
  link: siteUrl ? [{ rel: 'canonical', href: `${siteUrl}/` }] : [],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Depyard',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Linux, macOS, Windows via Docker',
      description: 'A self-hosted, extensible package and artifact registry platform.',
      codeRepository: 'https://github.com/amkargar/depyard',
      license: 'https://github.com/amkargar/depyard/blob/main/LICENSE',
    }),
  }],
})

const ecosystem = [
  { name: 'Pub', mark: 'P', class: 'eco-pub' },
  { name: 'Flutter', mark: 'F', class: 'eco-flutter' },
  { name: 'Go', mark: 'Go', class: 'eco-go' },
  { name: 'Python', mark: 'Py', class: 'eco-python' },
  { name: 'npm', mark: 'N', class: 'eco-npm' },
]
const features = [
  { icon: Boxes, title: 'One home for every ecosystem', text: 'Run Pub, Flutter Storage, Go modules, PyPI, and npm registries from one clean control plane.' },
  { icon: GitBranch, title: 'Proxy, host, or hybrid', text: 'Choose how each registry behaves. Cache upstream packages, publish your own, or combine both.' },
  { icon: ShieldCheck, title: 'Your data stays yours', text: 'Self-hosted by design, with scoped tokens, registry-level permissions, and audit-friendly controls.' },
  { icon: Zap, title: 'Fast by default', text: 'Content-addressed storage, deduplication, streaming, and cache-aware package delivery.' },
  { icon: Settings2, title: 'Change config, not code', text: 'Add and configure registry instances in the admin console without restarting the platform.' },
  { icon: LockKeyhole, title: 'Production-minded security', text: 'Generated first-run credentials, secure sessions, token ownership, and admin lockout protection.' },
]
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow"><Sparkles :size="13" /> Open-source package infrastructure</div>
        <h1>Your packages.<br><span class="accent">Your infrastructure.</span></h1>
        <p class="hero-lede">A self-hosted home for the packages, builds, and artifacts your teams depend on. One control plane, every registry, no black box.</p>
        <div class="hero-ctas">
          <NuxtLink class="button button-primary" to="/docs#quick-install"><Rocket :size="15" /> Get started <ArrowRight :size="14" /></NuxtLink>
          <a class="button button-outline" href="https://github.com/amkargar/depyard" target="_blank" rel="noreferrer"><Code2 :size="15" /> Explore on GitHub <ArrowUpRight :size="13" /></a>
        </div>
        <div class="hero-note"><Check :size="13" /> Docker-powered setup <span>·</span> Self-hosted <span>·</span> Open source</div>
      </div>
      <div id="product" class="product-wrap">
        <div class="product-glow"></div>
        <ProductPreview />
      </div>
    </section>

    <section class="trust-bar" aria-label="Supported package ecosystems">
      <div class="trust-label">One platform. Your favorite ecosystems.</div>
      <div class="ecosystem-list">
        <div v-for="item in ecosystem" :key="item.name" class="ecosystem" :class="item.class"><span>{{ item.mark }}</span>{{ item.name }}</div>
      </div>
    </section>

    <section id="features" class="section section-muted">
      <div class="section-inner">
        <div class="feature-heading">
          <div><p class="section-kicker">Built for your stack</p><h2 class="section-title">Infrastructure that stays out of your way.</h2></div>
          <p class="section-desc">From a fast local mirror to a private package platform, Depyard gives your team a practical foundation to build on.</p>
        </div>
        <div class="feature-grid">
          <article v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon"><component :is="feature.icon" :size="18" /></div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="deploy-section">
      <div class="deploy-grid">
        <div>
          <p class="section-kicker">Up and running in minutes</p>
          <h2 class="section-title">From zero to your own registry.</h2>
          <p class="section-desc">The one-command installer takes care of the boring parts. Docker runs the stack; Depyard keeps your package infrastructure close.</p>
          <ul class="deploy-points">
            <li><Check :size="15" /> Installs the app, backend, and database with Docker</li>
            <li><Check :size="15" /> Generates a secure first admin password for you</li>
            <li><Check :size="15" /> Keeps credentials and data safe across upgrades</li>
          </ul>
        </div>
        <div class="deploy-card">
          <div class="deploy-card-top"><strong>Quick installation</strong><span class="deploy-badge"><i></i> Docker</span></div>
          <div class="code-card">
            <div class="code-card-head"><span><Terminal :size="13" /> Terminal</span><span>bash</span></div>
            <CopyCommand command="curl -fsSL https://github.com/amkargar/depyard/releases/latest/download/install.sh -o install.sh && bash install.sh" />
          </div>
          <div class="deploy-card-foot"><ShieldCheck :size="14" /> Installer details, upgrades, and options in the <NuxtLink to="/docs#quick-install">deployment guide <ArrowUpRight :size="11" /></NuxtLink></div>
        </div>
      </div>
    </section>

    <section class="docs-cta">
      <div class="section-inner">
        <div class="feature-heading">
          <div><p class="section-kicker">Find your way around</p><h2 class="section-title">Everything you need to get going.</h2></div>
          <p class="section-desc">Follow the quick start, pick the registry that fits, and make your setup your own.</p>
        </div>
        <div class="docs-grid">
          <NuxtLink class="docs-card" to="/docs#quick-install"><span class="docs-card-icon"><Rocket :size="19" /></span><span><h3>Quick deployment</h3><p>Installer, Docker Compose, and first sign-in.</p></span><ArrowRight :size="16" /></NuxtLink>
          <NuxtLink class="docs-card" to="/docs#registries"><span class="docs-card-icon"><Package :size="19" /></span><span><h3>Registry guides</h3><p>Pub, Flutter, Go, Python, and npm at a glance.</p></span><ArrowRight :size="16" /></NuxtLink>
          <NuxtLink class="docs-card" to="/docs#security"><span class="docs-card-icon"><ShieldCheck :size="19" /></span><span><h3>Security & access</h3><p>Admin setup, accounts, and scoped access tokens.</p></span><ArrowRight :size="16" /></NuxtLink>
          <a class="docs-card" href="https://github.com/amkargar/depyard/tree/main/docs" target="_blank" rel="noreferrer"><span class="docs-card-icon"><Globe2 :size="19" /></span><span><h3>Full project docs</h3><p>Explore the complete technical reference.</p></span><ArrowUpRight :size="16" /></a>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <h2>Make the registry yours.</h2>
      <p>Open source, self-hosted, and ready for your stack.</p>
      <NuxtLink class="button button-primary" to="/docs#quick-install">Get started with Depyard <ArrowRight :size="15" /></NuxtLink>
    </section>
  </div>
</template>
