<script setup lang="ts">
import CryptoMapBanner from "~/components/Banners/CryptoMapBanner.vue";
import NimiqPayBanner from "~/components/Banners/NimiqPayBanner.vue";

const swap = ref(false);
const widgetRef = ref<HTMLElement | null>(null);
const { t } = useI18n();

useHead({
  title: "Cryptocity.Exchange",
});

useSeoMeta({
  title: t("SeoTitle"),
  description: t("SeoDescription"),
});
defineOgImageComponent("NuxtSeo", {
  title: t("PageTitle"),
  description: t("PageDescription"),
  colorMode: "light",
});

function scrollToWidget() {
  widgetRef.value?.scrollIntoView({ behavior: "smooth", block: "center" });
}
</script>

<template>
  <div>
    <section class="container max-w-[1048px] mx-auto mt-30 mb-30 px- custom-grid">
      <!-- Hero -->
      <div data-section="hero" class="space-y-1 mb-3 text-center md:text-left">
        <h1
          class="pb-6 text-5xl/16 max-w-full md:max-w-[398px] text-wrap text-neutral px-4 md:px-0"
        >
          {{ !swap ? t("BuyAndSellCrypto") : t("SwapCrypto") }}
        </h1>
        <h3
          class="pb-8 text-xl/8 max-w-full md:max-w-[248px] text-wrap font-semibold text-neutral opacity-60 px-4 md:px-0"
        >
          {{ !swap ? t("BuyAndSellNim") : t("SwapStat") }}
        </h3>
        <div class="pb-20" @click="scrollToWidget">
          <SliderToggle v-model="swap" />
        </div>
      </div>

      <!-- Wallet CTA -->
      <div
        data-section="wallet"
        class="group flex border-2 max-md:mx-3 border-gray-200 rounded-xl px-8 py-5 max-w-full md:max-w-[398px] h-max font-semibold hidden"
      >
        <div class="flex flex-col gap-y-3">
          <p class="text-neutral max-w-[165px]">
            {{ t("GetSelfHostedWallet") }}
          </p>

          <NuxtLink
            to="https://wallet.nimiq.com/"
            target="_blank"
            external
            rel="noopener noreferrer"
            class="nq-pill-blue nq-arrow"
          >
            {{ t("Create") }}
          </NuxtLink>
        </div>

        <div class="flex-1 flex flex-col items-center justify-center pl-4">
          <div class="flex flex-row gap-2 children:!size-6.5 text-neutral-700">
            <div group-hocus:i-nimiq:logos-nimiq i-nimiq:logos-nimiq-mono />
            <div group-hocus:i-nimiq:logos-bitcoin i-nimiq:logos-bitcoin-mono />
            <div group-hocus:i-nimiq:logos-usdc i-nimiq:logos-usdc-mono />
            <div group-hocus:i-nimiq:logos-usdt i-nimiq:logos-usdt-mono />
          </div>
          <span
            text="neutral-900 group-hocus:neutral"
            transition-colors
            class="mt-2 nq-label text-[9px]"
          >
            {{ t("SupportedCurrencies") }}
          </span>
        </div>
      </div>

      <!-- Widget -->
      <div ref="widgetRef" data-section="widget" class="flex justify-center">
        <CoinifyWidget v-if="!swap" />
        <LetsexchangeWidget v-else />
      </div>
    </section>

    <!-- Banners -->
    <CryptoMapBanner />
    <NimiqPayBanner />
  </div>
</template>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-areas: "hero" "widget" "wallet";
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-areas: "hero widget" "wallet widget";
  }

  [data-section="hero"] {
    grid-area: hero;
  }

  [data-section="wallet"] {
    grid-area: wallet;
  }
  [data-section="widget"] {
    grid-area: widget;
  }
}
</style>
