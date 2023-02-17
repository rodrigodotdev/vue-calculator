<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #807ece 0%, #8e7ece 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
