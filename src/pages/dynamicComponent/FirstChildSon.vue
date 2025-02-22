<template>
  <div>
    <CustomCascader v-model:modelValue="selectedValue" :options="options" />
    <p>外部绑定的值: {{ selectedValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomCascader from '@/components/CusCascader.vue';

interface CascaderOption {
  value: string;
  label: string;
  children?: CascaderOption[];
}

const selectedValue = ref(''); // 绑定的最后一级的值
const options: CascaderOption[] = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          {
            value: 'yizhi',
            label: '一致',
          },
          {
            value: 'fankui',
            label: '反馈',
          },
        ],
      },
    ],
  },
];
</script>
