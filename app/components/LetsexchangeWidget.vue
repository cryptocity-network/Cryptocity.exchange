<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div id="lets_widget_sqXeBOH8iQ3yPAUK" class="lets-widget min-w-screen-sm max-w-[400px] min-h-[480px]">
    <iframe :src="runtimeConfig.public.letsexchangeUrl" width="100%" height="100%" frameBorder="0" allow="clipboard-read; clipboard-write" />
  </div>
</template>
