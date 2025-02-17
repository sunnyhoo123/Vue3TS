<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <RouterLink to="/vuePlay">vueplay</RouterLink>
  <RouterLink to="/childAndSon">childAndSon</RouterLink>
  <RouterLink to="/dynamicComponent">dynamicComponent</RouterLink>
  <RouterView></RouterView>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
