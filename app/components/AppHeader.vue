<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="py-9 px-10 h-[96px]">
    <div class=" mx-auto flex items-center justify-between h-full">
      <!-- Logo Section -->
      <div class="flex items-center">
        <NuxtLink to="https://cryptocity.network">
          <NuxtImg src="/logo.svg" alt="Cryptocity Logo" width="150" height="50" />
        </NuxtLink>
      </div>

      <!-- Right Section -->
      <nav class="flex items-center h-full">
        <NuxtLink to="https://cryptocity.network" class="font-bold pr-8 hidden md:block">
          {{ t('LearnMore') }}
        </NuxtLink>
        <SelectLanguage :show-flag="false" />
      </nav>
    </div>
  </header>
</template>
