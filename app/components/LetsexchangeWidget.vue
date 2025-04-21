<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div id="lets_widget_Jqu53Q2FL2yQ81cj" class="lets-widget min-w-screen-sm max-w-[400px] min-h-[480px]">
    <iframe :src="runtimeConfig.public.letsexchangeUrl" width="100%" height="100%" frameBorder="0" allow="clipboard-read; clipboard-write" />
  </div>
</template>
