<script setup lang="ts">
import { useData } from 'vitepress'
import NavBarTitle from './NavBarTitle.vue'
import SearchBox from '../../plugin/plugin-search/SearchBox.vue'
// import SearchBox from '@SearchBox'
import NavLinks from './NavLinks.vue'
import ToggleSideBarButton from './ToggleSideBarButton.vue'
import DarkModeSwitch from './DarkModeSwitch.vue'

defineEmits(['toggle'])

const { site, frontmatter } = useData()
const { themeConfig } = site.value
</script>

<template>
  <header class="nav-bar">
    <ToggleSideBarButton @toggle="$emit('toggle')" />

    <NavBarTitle />

    <div class="flex-grow" />

    <div class="nav">
      <SearchBox v-if="themeConfig.search !== false && frontmatter.search !== false" />
      <!-- <SearchBox /> -->
      <NavLinks />
    </div>

    <div class="nav-icons">
      <!-- <div v-if="repo" class="item">
        <a class="icon-button" :href="repo.link" target="_blank" aria-label="View GitHub Repo">
          <ri-github-line />
        </a>
      </div>-->

      <div class="item">
        <dark-mode-switch />
      </div>
    </div>

    <slot name="search" />
  </header>
</template>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--z-index-navbar);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--c-divider);
  padding: 0.7rem 1.5rem 0.7rem 4rem;
  height: var(--header-height);
  background-color: var(--c-bg);
}

.nav-icons {
  display: flex;
  align-items: center;
  border-bottom: 0;
  margin-left: 12px;
  padding: 0.7rem 0;
  background-color: var(--c-bg);
}

.nav-icons .item {
  padding-left: 12px;
}

@media (min-width: 720px) {
  .nav-bar {
    padding: 0.7rem 1.5rem;
  }
}

.flex-grow {
  flex-grow: 1;
}

.nav {
  display: none;
}

@media (min-width: 720px) {
  .nav {
    display: flex;
    align-items: center;
  }
}
</style>
