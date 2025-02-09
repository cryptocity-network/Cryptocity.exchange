<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const lang = computed(() =>
  locale.value,
)

useHead({
  htmlAttrs: {
    lang,
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
    { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
    { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/png', href: '/favicon-128x128.png', sizes: '128x128' },
    { rel: 'icon', type: 'image/png', href: '/favicon-196x196.png', sizes: '196x196' },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://letsexchange.io/widget_lets.css',
    },
  ],
  script: [
    {
      src: 'https://letsexchange.io/init_widget.js',
    },
  ],
})
</script>

<template>
  <div>
    <header>
      This is the header
      <nav>
        <NuxtLink v-for="availableLocale in availableLocales" :key="availableLocale.code" :to="switchLocalePath(availableLocale.code)">
          {{ t(`Locales.${availableLocale.code}`) }}
        </NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      This is the footer
    </footer>
  </div>
</template>
