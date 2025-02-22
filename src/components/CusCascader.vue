<template>
  <div>
    <a-cascader
      :value="internalPath"
      :options="options"
      change-on-select
      :display-render="displayRender"
      @change="handleChange"
    ></a-cascader>
    <p>绑定的值: {{ selectedValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface CascaderOption {
  value: string;
  label: string;
  children?: CascaderOption[];
}

// 定义 props
const props = defineProps<{
  modelValue: string; // 绑定的最后一级的值
  options: CascaderOption[]; // Cascader 的选项
}>();

// 定义 emits
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

// 内部状态
const internalPath = ref<string[]>([]); // 存储完整路径
const selectedValue = ref<string>(props.modelValue); // 存储最后一级的值

// 处理 Cascader 的 change 事件
const handleChange = (value: string[]) => {
  internalPath.value = value; // 更新完整路径
  selectedValue.value = value[value.length - 1]; // 提取最后一级的值
  emit('update:modelValue', selectedValue.value); // 更新 v-model
};

// 自定义显示内容
const displayRender = ({ labels }: { labels: string[] }) => {
  return labels.join(' / '); // 显示完整路径
};

// 根据最后一级的值反推出完整路径
const findPathByValue = (
  options: CascaderOption[],
  targetValue: string,
  path: string[] = []
): string[] | null => {
  for (const option of options) {
    if (option.value === targetValue) {
      return path.concat(option.value);
    }
    if (option.children) {
      const result = findPathByValue(option.children, targetValue, path.concat(option.value));
      if (result) return result;
    }
  }
  return null;
};

// 监听外部传入的值变化
watch(
  () => props.modelValue,
  newVal => {
    if (newVal !== selectedValue.value) {
      selectedValue.value = newVal;
      // 根据最后一级的值反推出完整路径
      internalPath.value = findPathByValue(props.options, newVal) || [];
    }
  },
  { immediate: true }
);
</script>
