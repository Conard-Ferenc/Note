<template>
  <button @click="toggleDark()">
    <!-- <carbon-moon v-show="isDark" class="align-middle" />
    <carbon-sun v-show="!isDark" class="align-middle" />-->
    <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
  </button>
  <button @click="next()">Mode {{ mode }}</button>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { useColorMode, useCycleList } from '@vueuse/core'

const mode = useColorMode({
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
})
const { next } = useCycleList(['dark', 'light', 'cafe', 'contrast'], { initialValue: mode })

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
