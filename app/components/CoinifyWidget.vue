<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const frameKey = ref(0)

// Ensure this component only runs on client-side
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
  frameKey.value = Date.now()
})

// Handle component reactivation (when navigating back to this page)
onActivated(() => {
  frameKey.value = Date.now()
})
</script>

<template>
  <div class="min-w-screen-sm w-[398px] min-h-[659px]">
    <ClientOnly>
      <iframe 
        v-if="mounted" 
        :key="frameKey" 
        :src="runtimeConfig.public.coinifyUrl" 
        width="100%" 
        height="100%" 
        allow="camera;fullscreen;accelerometer;gyroscope;magnetometer;payment" 
      />
      <template #fallback>
        <div class="flex items-center justify-center w-full h-[659px] bg-gray-100 rounded-xl">
          <div class="text-center">
            <div class="animate-pulse mb-2 font-semibold">Loading payment widget...</div>
          </div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
