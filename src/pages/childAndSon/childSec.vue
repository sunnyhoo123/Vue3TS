<script setup>
import Son from './son.vue';
const props = defineProps({
  money: {
    type: Number,
    required: false,
  },
});
const emit = defineEmits(['update:mon']);
const handleClick = () => {
  emit('update:mon', 2);
};
</script>

<template>
  <div class="wrapper">
    the child b
    <a-button @click="handleClick">click</a-button>
    <Son></Son>
  </div>
</template>

<style scoped></style>
