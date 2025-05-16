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
  <div id="lets_widget_Jqu53Q2FL2yQ81cj" class="lets-widget min-w-screen-sm max-w-[400px] min-h-[480px]">
    <ClientOnly>
      <iframe
        v-if="mounted"
        :key="frameKey"
        :src="runtimeConfig.public.letsexchangeUrl"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="clipboard-read; clipboard-write"
      />
      <template #fallback>
        <div class="flex items-center justify-center w-full h-[480px] bg-gray-100 rounded-xl">
          <div class="text-center">
            <div class="animate-pulse mb-2 font-semibold">
              Loading exchange widget...
            </div>
          </div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
