<script setup lang="ts">
const model = defineModel<boolean>()
</script>

<template>
  <div class="inline-flex rounded-full">
    <button
      type="button"
      class="rounded-full nq-button light-blue transition-all duration-200 px-4 py-2"
      :class="[
        !model
          ? 'bg-blue-500 text-white'
          : 'text-gray-500 hover:text-gray-700',
      ]"
      @click="model = false"
    >
      Buy / Sell
    </button>
    <button
      type="button"
      class="rounded-full nq-button transition-all duration-200 px-4 py-2"
      :class="[
        model
          ? 'bg-blue-500 text-white shadow-sm'
          : 'text-gray-500 hover:text-gray-700',
      ]"
      @click="model = true"
    >
      Swap
    </button>
  </div>
</template>
