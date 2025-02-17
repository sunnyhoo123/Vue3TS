<script setup lang="ts">
import FirstChildSon from './FirstChildSon.vue';
const props = defineProps({
  money: {
    type: Number,
    required: false,
  },
});
const emit = defineEmits(['update:mon']);
const handleClick = () => {
  emit('update:mon', 1);
};
</script>

<template>
  <div class="wrapper">
    the child
    <a-button @click="handleClick">click</a-button>

    <FirstChildSon></FirstChildSon>
  </div>
</template>

<style scoped></style>
