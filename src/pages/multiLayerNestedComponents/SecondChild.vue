<script setup>
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
  </div>
</template>

<style scoped></style>
