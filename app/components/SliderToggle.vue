<script setup lang="ts">
const swap = defineModel<boolean>()
</script>

<template>
  <div
    class="inline-flex bg-neutral-500 rounded-full p-2 gap-1"
  >
    <button
      type="button"
      class="nq-pill m-0"
      :class="[
        !swap
          ? 'nq-pill-blue'
          : 'nq-pill-secondary',
      ]"
      @click="swap = false"
    >
      Buy / Sell
    </button>
    <button
      type="button"
      class="nq-pill m-0"
      :class="[
        swap
          ? 'nq-pill-blue'
          : 'nq-pill-secondary',
      ]"
      @click="swap = true"
    >
      Swap
    </button>
  </div>
</template>
