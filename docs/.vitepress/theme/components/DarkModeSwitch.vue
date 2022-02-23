<template>
  <button
    aria-label="Toggle Theme"
    :class="['icon-button', isDark ? 'Dark' : 'unDark']"
    @click="toggle"
  >
    <moon v-show="isDark" />
    <sun v-show="!isDark" />
  </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import Moon from "./icons/Moon.vue";
import Sun from "./icons/Sun.vue";

const isDark = useDark();
const toggle = useToggle(isDark)
</script>
<style scoped>
button {
  border: 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  font-size: 1.25rem;
  cursor: pointer;
}
button.Dark {
  filter: invert(2);
}
button > * {
  vertical-align: bottom;
}
</style>
