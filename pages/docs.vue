<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Check, CircleAlert, ExternalLink, ShieldCheck, Terminal } from '@lucide/vue'

const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl || '').replace(/\/$/, '')
useSeoMeta({
  title: 'Getting started & documentation',
  description: 'Deploy Depyard with Docker, sign in securely, and connect Pub, Flutter Storage, Go, Python, or npm clients to your own package registry.',
  ogTitle: 'Getting started with Depyard',
  ogDescription: 'Install Depyard, configure your first registry, and connect your package manager.',
  ogType: 'article',
  ogSiteName: 'Depyard',
  ogUrl: siteUrl ? `${siteUrl}/docs` : undefined,
  ogImage: siteUrl ? `${siteUrl}/depyard-social.png` : undefined,
  ogImageType: 'image/png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'Depyard — self-hosted package registries for Pub, Flutter, Go, Python, and npm',
  twitterCard: 'summary_large_image',
  twitterImage: siteUrl ? `${siteUrl}/depyard-social.png` : undefined,
  twitterImageAlt: 'Depyard package registry dashboard preview',
  robots: 'index,follow',
  googlebot: 'index,follow,max-image-preview:large',
})
useHead({ link: siteUrl ? [{ rel: 'canonical', href: `${siteUrl}/docs` }] : [] })

const installer = 'curl -fsSL https://github.com/amkargar/depyard/releases/latest/download/install.sh -o install.sh && bash install.sh'
const cloneCompose = 'git clone https://github.com/amkargar/depyard.git && cd depyard && docker compose up --build -d'
const docsLinks = {
  pub: 'https://github.com/amkargar/depyard#key-features',
  flutter: 'https://github.com/amkargar/depyard/blob/main/docs/flutter-base-settings.md',
  go: 'https://github.com/amkargar/depyard/blob/main/docs/go-module-proxy.md',
  python: 'https://github.com/amkargar/depyard/blob/main/docs/pypi-registry.md',
  npm: 'https://github.com/amkargar/depyard/blob/main/docs/npm-registry.md',
  accounts: 'https://github.com/amkargar/depyard/blob/main/docs/user-management.md',
}
</script>

<template>
  <div>
    <section class="docs-hero">
      <div class="docs-hero-inner">
        <div class="breadcrumb"><NuxtLink to="/">Home</NuxtLink><span>/</span><span>Documentation</span></div>
        <p class="section-kicker">Docs & quick start</p>
        <h1>Get your own registry running.</h1>
        <p>Choose the quick installer or start from source with Docker Compose. Then enable the registries your team needs and connect your package tools.</p>
      </div>
    </section>

    <div class="docs-layout">
      <aside class="docs-sidebar" aria-label="On this page">
        <strong>On this page</strong>
        <a href="#quick-install">Quick install</a>
        <a href="#first-login">First sign-in</a>
        <a href="#registries">Registry types</a>
        <a href="#security">Security & users</a>
        <a href="#faq">FAQ</a>
      </aside>
      <article class="docs-content">
        <section id="quick-install" class="doc-block">
          <h2>Quick install</h2>
          <p>Depyard's one-command installer is the fastest path for Linux, macOS, or Windows WSL. You'll need Docker Engine and the Docker Compose plugin installed and running.</p>
          <div class="doc-note"><ShieldCheck :size="15" /><span>The installer downloads a self-contained script from the latest GitHub release, creates a managed Compose setup, and preserves your data and configuration when you upgrade.</span></div>
          <div class="doc-code">
            <div class="doc-code-top"><span><Terminal :size="12" /> Latest release installer</span><span>bash</span></div>
            <CopyCommand :command="installer" />
          </div>
          <p>The installer creates <code>~/.depyard/</code>, stores generated credentials in a private <code>.env</code> file, starts the stack, and prints the initial admin password once. Open the address shown by the installer when it finishes (the default HTTP port is <code>80</code>).</p>
          <h3>Prefer Docker Compose?</h3>
          <p>Clone the source repository and run the development Compose stack. The web UI is available at <code>http://localhost</code>. To use another port, prefix the command with <code>HTTP_PORT=8080</code> and open <code>http://localhost:8080</code>.</p>
          <div class="doc-code">
            <div class="doc-code-top"><span><Terminal :size="12" /> Build from source</span><span>bash</span></div>
            <CopyCommand :command="cloneCompose" />
          </div>
          <p>For version pinning, offline installation, or upgrade flags, see the <a href="https://github.com/amkargar/depyard#one-command-installation-docker-only" target="_blank" rel="noreferrer">full installer reference <ArrowUpRight :size="11" /></a>.</p>
        </section>

        <section id="first-login" class="doc-block">
          <h2>First sign-in</h2>
          <ol>
            <li>Open your Depyard URL and sign in with username <code>admin</code> and the initial password shown by the installer.</li>
            <li>Change that password from <strong>My Account → Profile</strong> as soon as you're signed in.</li>
            <li>Visit <strong>Admin → Registries</strong> and enable only the registry types you want to serve. The seeded examples are disabled by default.</li>
            <li>Set a public URL or TLS reverse proxy before sharing registry endpoints with your team.</li>
          </ol>
          <div class="doc-note"><CircleAlert :size="15" /><span>There is no default password. If you deploy directly with Docker Compose, the backend generates a random first-admin password and writes it once to the backend startup log. Treat that log line as a secret until the password is changed.</span></div>
        </section>

        <section id="registries" class="doc-block">
          <h2>Registry types</h2>
          <p>Depyard keeps registry engines independent from registry instances. Add multiple instances, configure their upstreams, and manage them without restarting the platform.</p>
          <div class="registry-doc-grid">
            <div class="registry-doc"><strong>Pub · Dart & Flutter packages</strong><span>Pub v2-compatible proxy, hosted, and hybrid registries. <a :href="docsLinks.pub" target="_blank" rel="noreferrer">Pub details <ExternalLink :size="10" /></a></span></div>
            <div class="registry-doc"><strong>Flutter Storage</strong><span>Mirror Flutter SDK releases, engine artifacts, Dart archives, and Gradle storage. <a :href="docsLinks.flutter" target="_blank" rel="noreferrer">Storage settings <ExternalLink :size="10" /></a></span></div>
            <div class="registry-doc"><strong>Go modules</strong><span>Go module proxy protocol, cached module files, and copyable client snippets. <a :href="docsLinks.go" target="_blank" rel="noreferrer">Go guide <ExternalLink :size="10" /></a></span></div>
            <div class="registry-doc"><strong>PyPI · Python</strong><span>Simple Repository API for pip, uv, and Poetry, plus package publishing. <a :href="docsLinks.python" target="_blank" rel="noreferrer">Python guide <ExternalLink :size="10" /></a></span></div>
            <div class="registry-doc"><strong>npm</strong><span>Scoped packages, metadata, tarballs, and publish support. <a :href="docsLinks.npm" target="_blank" rel="noreferrer">npm guide <ExternalLink :size="10" /></a></span></div>
          </div>
          <p style="margin-top: 15px">Each registry has its own explorer and endpoint under <code>/r/&lt;slug&gt;</code>. The public explorers include the setup snippets and package discovery tools for the relevant ecosystem.</p>
        </section>

        <section id="security" class="doc-block">
          <h2>Security & user management</h2>
          <p>Depyard supports administrator and regular user accounts, scoped personal access tokens, secure sessions, and registry-aware permissions. Admins can manage users and roles from <strong>Admin Console → Users</strong>.</p>
          <ul>
            <li>Use a strong bootstrap password or keep the generated password private.</li>
            <li>Put the service behind HTTPS before exposing it to the public internet.</li>
            <li>Give tokens only the registry and permission scopes they need; revoke them when they are no longer in use.</li>
            <li>Back up MongoDB and the configured storage volume before upgrades.</li>
          </ul>
          <p>For account lifecycle, password rules, and administrator lockout protections, read the <a :href="docsLinks.accounts" target="_blank" rel="noreferrer">user management reference <ArrowUpRight :size="11" /></a>.</p>
        </section>

        <section id="faq" class="doc-block">
          <h2>Frequently asked questions</h2>
          <details class="faq-item"><summary>Does Depyard require Kubernetes?</summary><p>No. The supported quick deployment uses Docker Compose. You can adapt the containers to your own orchestrator, but the fastest supported path is the installer or Compose file.</p></details>
          <details class="faq-item"><summary>Are the built-in registries active automatically?</summary><p>No. Example registries are seeded disabled on first startup. Enable only the registry instances you intend to use from the Admin console.</p></details>
          <details class="faq-item"><summary>Can I upgrade without losing my data?</summary><p>The installer supports <code>bash install.sh --upgrade</code> and preserves its managed environment file and Docker volumes. Back up your database and storage before upgrades as a general precaution.</p></details>
          <details class="faq-item"><summary>Where can I find the complete technical docs?</summary><p>The project repository contains registry-specific references, architecture notes, and deployment details. <a href="https://github.com/amkargar/depyard/tree/main/docs" target="_blank" rel="noreferrer">Browse the docs directory <ArrowUpRight :size="11" /></a>.</p></details>
        </section>

        <div class="docs-bottom-cta">
          <div><strong>Ready to make it yours?</strong><p>Start with the installer and build from there.</p></div>
          <NuxtLink class="button button-primary" to="#quick-install">Go to quick install <ArrowRight :size="13" /></NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>
