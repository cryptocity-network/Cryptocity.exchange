<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div class="min-w-screen-sm max-w-[400px] min-h-[610px]">
    <iframe :src="runtimeConfig.public.coinifyUrl" width="100%" height="100%" allow="camera;fullscreen;accelerometer;gyroscope;magnetometer;payment" />
  </div>
</template>
