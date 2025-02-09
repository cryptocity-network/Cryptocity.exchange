<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <iframe :src="runtimeConfig.public.coinifyUrl" width="575px" height="675px" allow="camera;fullscreen;accelerometer;gyroscope;magnetometer;payment" allowfullscreen />
</template>
