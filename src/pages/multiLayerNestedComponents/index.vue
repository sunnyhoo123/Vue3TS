<script setup lang="ts">
import { ref } from 'vue';
import FirstChild from './FirstChild.vue';
import SecondChild from './SecondChild.vue';

const money = ref(0);
</script>

<template>
  <div class="wrapper">
    the top {{ money }}
    <!-- 父子组件公用一个值 -->
    <FirstChild v-model:mon="money">方式一</FirstChild>
    <SecondChild :mon="money" @update:mon="money = $event">方式二</SecondChild>
  </div>
</template>

<style scoped></style>
