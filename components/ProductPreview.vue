<script setup lang="ts">
import { Activity, Boxes, ChevronDown, CircleHelp, CloudDownload, Gauge, LayoutDashboard, LockKeyhole, Package, Search, Settings2, Users } from '@lucide/vue'

const registries = [
  { title: 'pub-public', kind: 'Pub registry', mode: 'Proxy', icon: Package, status: 'Enabled', tint: 'purple', packages: '1,284', cache: '92.8%' },
  { title: 'flutter-storage', kind: 'Flutter artifacts', mode: 'Mirror', icon: CloudDownload, status: 'Enabled', tint: 'blue', packages: '8,642', cache: '98.1%' },
  { title: 'npm-packages', kind: 'npm registry', mode: 'Hybrid', icon: Boxes, status: 'Enabled', tint: 'orange', packages: '3,109', cache: '87.4%' },
]
</script>

<template>
  <div class="product-window" aria-label="Illustrative preview of the Depyard admin console">
    <div class="window-topbar">
      <div class="window-controls"><i></i><i></i><i></i></div>
      <div class="window-url"><span class="url-lock"><LockKeyhole :size="10" /></span> registry.acme.dev <ChevronDown :size="11" /></div>
      <div class="window-avatar">A</div>
    </div>
    <div class="dashboard-frame">
      <aside class="dashboard-sidebar">
        <div class="dash-brand"><span class="dash-brand-mark"><Boxes :size="15" /></span><span>depyard<span class="dash-dot">.</span></span></div>
        <div class="dash-workspace"><span class="workspace-icon">A</span><span><strong>Acme workspace</strong><small>Self-hosted</small></span><ChevronDown :size="12" /></div>
        <div class="sidebar-label">WORKSPACE</div>
        <div class="dash-nav active"><LayoutDashboard :size="15" /> Overview</div>
        <div class="dash-nav"><Package :size="15" /> Registries <span class="nav-count">5</span></div>
        <div class="dash-nav"><Activity :size="15" /> Activity</div>
        <div class="sidebar-label sidebar-label-spaced">MANAGE</div>
        <div class="dash-nav"><Users :size="15" /> Team</div>
        <div class="dash-nav"><Settings2 :size="15" /> Settings</div>
        <div class="sidebar-bottom"><CircleHelp :size="14" /> Help center</div>
      </aside>
      <section class="dashboard-main">
        <div class="dash-topline"><span>Workspace <span class="slash">/</span> Overview</span><div class="dash-date">Last 30 days <ChevronDown :size="11" /></div></div>
        <div class="dash-title-row"><div><h3>Good morning, Alex <span>✦</span></h3><p>Here's what’s happening across your package infrastructure.</p></div><button class="dash-add"><span>+</span> New registry</button></div>
        <div class="stat-grid">
          <div class="stat-card"><div class="stat-heading">Total requests <span><Activity :size="13" /></span></div><strong>248.6k</strong><small class="stat-up">↗ 12.8% <em>vs last month</em></small><div class="sparkline spark-one"><svg viewBox="0 0 100 28" preserveAspectRatio="none"><path d="M0 23 C12 20 14 22 23 15 S35 17 43 12 57 16 63 9 72 12 80 6 91 10 100 2" /></svg></div></div>
          <div class="stat-card"><div class="stat-heading">Cache hit rate <span><Gauge :size="13" /></span></div><strong>94.2<span class="stat-unit">%</span></strong><small class="stat-up">↗ 3.4% <em>vs last month</em></small><div class="sparkline spark-two"><svg viewBox="0 0 100 28" preserveAspectRatio="none"><path d="M0 24 C12 18 15 20 25 16 S36 19 46 12 58 15 66 10 75 13 83 6 94 7 100 3" /></svg></div></div>
          <div class="stat-card"><div class="stat-heading">Active registries <span><Package :size="13" /></span></div><strong>5</strong><small class="stat-neutral">Across 4 ecosystems</small><div class="stat-pills"><i class="pill-pub">P</i><i class="pill-flutter">F</i><i class="pill-go">Go</i><i class="pill-python">Py</i><i class="pill-npm">N</i></div></div>
        </div>
        <div class="registry-panel">
          <div class="panel-heading"><div><h4>Your registries</h4><p>Package sources, managed in one place.</p></div><button class="panel-view">View all <span>→</span></button></div>
          <div class="registry-table-head"><span>REGISTRY</span><span>MODE</span><span>PACKAGES</span><span>CACHE HIT</span><span>STATUS</span></div>
          <div v-for="registry in registries" :key="registry.title" class="registry-row">
            <div class="registry-name"><span class="registry-icon" :class="`tint-${registry.tint}`"><component :is="registry.icon" :size="14" /></span><span><strong>{{ registry.title }}</strong><small>{{ registry.kind }}</small></span></div>
            <span class="registry-mode">{{ registry.mode }}</span>
            <span class="registry-value">{{ registry.packages }}</span>
            <span class="registry-value">{{ registry.cache }}</span>
            <span class="registry-status"><i></i>{{ registry.status }}</span>
          </div>
        </div>
        <div class="dashboard-footnote"><span><i></i> All systems operational</span><span>Updated just now</span></div>
      </section>
    </div>
  </div>
</template>
