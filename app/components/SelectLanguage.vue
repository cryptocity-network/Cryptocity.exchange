<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="flex items-center gap-2 px-3 py-2 rounded-md bg-transparent pl-0">

      <!-- Conditionally show the flag icon based on the `showFlag` prop -->
      <div :class="getCurrentFlagIcon()" class="w-6 h-4"></div>
      <span v-if="showFlag" class="text-sm font-medium">{{ getCurrentLanguageName() }}</span>
      <div class="i-lucide-chevron-down w-4 h-4"></div>
    </button>

    <div v-if="isOpen"
      class="absolute right-0 mt-1 w-20 bg-white dark:bg-gray-900 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
      <!-- <SwitchLocalePathLink 
        v-for="lang in languages" 
        :key="lang.code" 
        :locale="lang.code"
        class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full text-left"
        @click="selectLanguage(lang.code)"
      >
        
      </SwitchLocalePathLink> -->


      <NuxtLink
        class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full text-left"
        v-for="lang in languages" :key="lang.code" :to="switchLocalePath(lang.code)" @click="selectLanguage(lang.code)">
        <div :class="lang.icon" class="w-6 h-4"></div>
        <span class="text-sm">{{ lang.code.toUpperCase() }}</span>
      </NuxtLink>
    </div>

    <!-- Backdrop to close dropdown when clicking outside -->
    <div v-if="isOpen" class="fixed inset-0 z-40" @click="isOpen = false"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

// Props
defineProps({
  showFlag: {
    type: Boolean,
    default: true // Default to showing the flag
  }
})

const { locale, t } = useI18n() as { locale: Ref<'en' | 'de' | 'es'>, t: Function };
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)

const languages: { code: 'en' | 'de' | 'es'; name: string; icon: string }[] = [
  { code: 'en', name: 'English', icon: 'i-flag:sh-4x3' },
  { code: 'de', name: 'Deutsch', icon: 'i-flag:de-4x3' },
  { code: 'es', name: 'Español', icon: 'i-flag:es-4x3' }
]

// Set default language to English
onMounted(() => {
  if (!languages.some(lang => lang.code === locale.value)) {
    locale.value = 'en'
  }
})

watch(locale, (newLocale) => {
  console.log(`Language switched to: ${newLocale}`);
});

const selectLanguage = (code: 'en' | 'de' | 'es') => {

  isOpen.value = false
}

const getCurrentFlagIcon = () => {
  const currentLang = languages.find(lang => lang.code === locale.value)
  return currentLang ? currentLang.icon : 'i-flag:sh-4x3' // Default to English flag
}

const getCurrentLanguageName = () => {
  const currentLang = languages.find(lang => lang.code === locale.value)
  return currentLang ? currentLang.code.toUpperCase() : 'EN' // Default to English name
}

// Close dropdown when pressing escape
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>