<script setup lang="ts">
import { ref } from 'vue';
import Child from './child.vue';
import ChildSec from './childSec.vue';

const money = ref(0);
</script>

<template>
  <div class="wrapper">
    the top {{ money }}
    <!-- 父子组件公用一个值 -->
    <Child v-model:mon="money">方式一</Child>
    <ChildSec :mon="money" @update:mon="money = $event">方式二</ChildSec>
  </div>
</template>

<style scoped></style>
