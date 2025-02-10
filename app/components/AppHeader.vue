<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="py-4 px-6 h-[96px]">
    <div class="container mx-auto flex items-center justify-between h-full">
      <!-- Logo Section -->
      <div class="flex items-center">
        <NuxtLink to="/">
          <img src="/logo.svg" alt="Cryptocity Logo" class="cursor-pointer">
        </NuxtLink>
      </div>

      <!-- Right Section -->
      <div class="flex items-center h-full">
        <a href="#" class="font-bold pr-32">
          {{ t('LearnMore') }}
        </a>
        <nav>
          <SelectLanguage />
        </nav>
      </div>
    </div>
  </header>
</template>
