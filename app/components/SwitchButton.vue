<template>
    <div class="inline-flex rounded-full">
      <button
        class="rounded-full nq-button light-blue transition-all duration-200 px-4 py-2"
        :class="[
          modelValue === 'buy/sell' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-500 hover:text-gray-700'
        ]"
        @click="$emit('update:modelValue', 'buy/sell')"
      >
        Buy / Sell
      </button>
      <button
        class="rounded-full nq-button transition-all duration-200 px-4 py-2"
        :class="[
          modelValue === 'swap' 
            ? 'bg-blue-500 text-white shadow-sm' 
            : 'text-gray-500 hover:text-gray-700'
        ]"
        @click="$emit('update:modelValue', 'swap')"
      >
        Swap
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    modelValue: 'buy/sell' | 'swap'
  }
  
  defineProps<Props>()
  defineEmits<{
    'update:modelValue': ['buy/sell' | 'swap']
  }>()
  </script>
  