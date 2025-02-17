<script setup lang="ts">
import { ref } from 'vue';
import FirstChild from './FirstChild.vue';
import SecondChild from './SecondChild.vue';

const FirstChildRef = ref();
const SecondChildRef = ref();

const comps = [
  {
    comp: FirstChild,
    ref: FirstChildRef,
  },
  {
    comp: SecondChild,
    ref: SecondChildRef,
  },
];
</script>

<template>
  <div class="wrapper">
    <!-- 父子组件公用一个值 -->
    <div v-for="(item, index) in comps" :key="index">
      <component :is="item.comp"></component>
    </div>
  </div>
</template>

<style scoped></style>
