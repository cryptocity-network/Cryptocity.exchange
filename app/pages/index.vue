<script setup lang="ts">
import CryptoMapBanner from '~/components/Banners/CryptoMapBanner.vue'
import NimiqPayBanner from '~/components/Banners/NimiqPayBanner.vue'

const swap = ref(false)
const widgetRef = ref<HTMLElement | null>(null)

useSeoMeta({
  title: 'Buy and Sell Crypto - Cryptocity',
  description: 'Buy and sell NIM, Bitcoin, USDC, and USDT with Euro, USD, CHF, and more on Cryptocity.',
})
defineOgImageComponent('NuxtSeo', {
  title: 'Buy and Sell Crypto - Cryptocity',
  description: 'Buy and sell NIM, Bitcoin, USDC, and USDT with Euro, USD, CHF, and more on Cryptocity.',
  colorMode: 'light',
})

function handleRedirect() {
  window.open('https://wallet.nimiq.com/', '_blank')
}

function scrollToWidget() {
  widgetRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
  <section>
    <div class="container max-w-[1048px] mx-auto mt-30 mb-30 px-1">
      <!-- Use grid with md:grid-cols-2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 min-h-[610px]">
        <!-- Left Column (Desktop: Stacked, Mobile: 1 → 2 at bottom) -->
        <div class="flex flex-col md:col-span-1">
          <!-- Component 1: Title & Text (Mobile Order 1) -->
          <div class="space-y-1 mb-3 order-1 md:order-none text-center md:text-left ">
            <h1 class="pb-6 text-5xl/16 max-w-full md:max-w-[398px] text-wrap text-neutral px-4 md:px-0">
              {{ !swap ? ' Buy and Sell Crypto' : 'Swap Your Crypto' }}
            </h1>
            <h3
              class="pb-8 text-xl/8 max-w-full md:max-w-[248px] text-wrap font-semibold text-neutral opacity-60 px-4 md:px-0"
            >
              {{ !swap ? 'Buy and Sell NIM with Euro, USD, CHF, and more!' : 'Swap Your Crypto, Swap 5520+ cryptos to NIM and back!' }}
            </h3>
            <div class="pb-20" @click="scrollToWidget">
              <SliderToggle v-model="swap" />
            </div>
          </div>

          <div
            class="hover-icons grid grid-cols-2 border-2 border-gray-200 rounded-xl px-8 py-5 max-w-full md:max-w-[398px] h-[126px] font-semibold hidden md:flex cursor-pointer"
          >
            <div class="col-span-1">
              <p class="text-netural mb-3 max-w-[165px]">
                Get your self-hosted wallet in 30 sec!
              </p>

              <NuxtLink to="https://wallet.nimiq.com/" target="_blank" rel="noopener noreferrer" class="text-blue crypto-map-desktop">
                Create
              </NuxtLink>

              <button class="nq-pill-blue crypto-map-desktop px-3 py-1 text-md mx-auto md:mx-0 flex items-center gap-1 " @click="handleRedirect">
                <span>Create</span>
                <div class="i-lucide-arrow-right text-lg" />
              </button>
            </div>

            <div class="col-span-1 flex flex-col items-center justify-center pl-4">
              <div class="flex flex-row space-x-2 mb-2">
                <NuxtImg
                  class="icon grayscale brightness-100 transition" src="/nimiq.svg" alt="Nimiq" width="26"
                  height="26"
                />
                <NuxtImg
                  class="icon grayscale brightness-100 transition" src="/bitcoin.svg" alt="Bitcoin" width="26"
                  height="26"
                />
                <NuxtImg
                  class="icon grayscale brightness-100 transition" src="/usdc.svg" alt="USDC" width="26"
                  height="26"
                />
                <NuxtImg
                  class="icon grayscale brightness-100 transition" src="/usdt.svg" alt="USDT" width="26"
                  height="26"
                />
              </div>
              <span class="text-neutral uppercase text-[9px] font-bold tracking-widest pl-1">
                Supported currencies
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Widget (Mobile Order 2) -->
        <div ref="widgetRef" class="flex justify-center order-2 md:col-span-1 md:order-none">
          <CoinifyWidget v-if="!swap" />
          <LetsexchangeWidget v-else />
        </div>

        <!-- Component 3: Supported Currencies (Mobile Order 3 - At Bottom) -->
        <div
          to="https://wallet.nimiq.com" target="_blank" external
          class="hover-icons mt-[150px] mb-[200px] flex md:hidden grid grid-cols-2 border-2 border-gray-200 rounded-xl px-10 py-5 order-3 md:order-none max-w-full md:max-w-[398px] font-semibold cursor-pointer"
        >
          <div class="col-span-1">
            <p class="text-netural mb-2  max-w-[165px] ">
              {{ !swap ? 'Get your self-hosted wallet in 30 sec!' : 'Swap Your Crypto, Swap 5520 + cryptos to NIM and back!' }}
            </p>
            <!-- TODO: link from design is using gradiant blue -->
            <NuxtLink to="https://wallet.nimiq.com/" target="_blank" rel="noopener noreferrer" class="text-blue">
              Create
            </NuxtLink>
          </div>
          <div class="col-span-1 flex flex-col items-center justify-center pl-4 ">
            <div class="flex flex-row space-x-2 mb-2 ">
              <NuxtImg
                class="icon md:grayscale md:brightness-100 transition" src="/nimiq.svg" alt="Nimiq" width="26"
                height="26"
              />
              <NuxtImg
                class="icon md:grayscale md:brightness-100 transition" src="/bitcoin.svg" alt="Bitcoin" width="26"
                height="26"
              />
              <NuxtImg class="icon md:grayscale md:brightness-100 transition" src="/usdc.svg" alt="USDC" width="26" height="26" />
              <NuxtImg class="icon md:grayscale md:brightness-100 transition" src="/usdt.svg" alt="USDT" width="26" height="26" />
            </div>
            <span class="text-neutral uppercase text-[9px] font-bold tracking-widest pl-1">Supported currencies</span>
          </div>
        </div>
      </div>
      <CryptoMapBanner />
      <NimiqPayBanner />
    </div>
  </section>
</template>

<style lang="css" scoped>
.hover-icons:hover .icon {
  filter: none;
}

.hover-icons:hover button.crypto-map-desktop {
  display: none;
}

.hover-icons button.crypto-map-desktop {
  display: flex;
}

.hover-icons:hover a.crypto-map-desktop {
  display: block;
}

.hover-icons a.crypto-map-desktop {
  display: none;
}
</style>
