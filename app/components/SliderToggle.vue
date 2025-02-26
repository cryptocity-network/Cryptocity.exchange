<script setup lang="ts">
const swap = defineModel<boolean>()
</script>

<template>
  <div
    class="inline-flex  bg-[rgba(31,35,72,0.05)] rounded-full p-1 gap-1"
  >
    <button
      type="button"
      class="nq-pill m-0 px-9 py-2 text-lg "
      :class="[
        !swap
          ? 'nq-pill-blue'
          : 'bg-transparent text-[#1F2348]',
      ]"
      @click="swap = false"
    >
      Buy / Sell
    </button>
    <button
      type="button"
      class="nq-pill m-0 px-12 py-2 text-lg"
      :class="[
        swap
          ? 'nq-pill-blue'
          : 'bg-transparent text-[#1F2348]',
      ]"
      @click="swap = true"
    >
      Swap
    </button>
  </div>
</template>
