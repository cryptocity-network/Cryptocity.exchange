<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="py-4 px-6 h-[96px]">
    <div class="container mx-auto flex items-center justify-between h-full">
      <!-- Logo Section -->
      <div class="flex items-center">
        <NuxtLink to="/">
          <NuxtImg src="/logo.svg" alt="Cryptocity Logo" class="w-auto" />
        </NuxtLink>
      </div>

      <!-- Right Section -->
      <nav class="flex items-center h-full">
        <NuxtLink to="#" class="font-bold pr-32">
          {{ t('LearnMore') }}
        </NuxtLink>
        <SelectLanguage />
      </nav>
    </div>
  </header>
</template>
