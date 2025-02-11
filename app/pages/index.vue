<script setup lang="ts">
const swap = ref(false)
</script>

<template>
  <section>
    <div class="container mx-auto mt-30 mb-30">
      <div class="grid grid-cols-1 md:grid-cols-2 min-h-[610px]">
        <div class="flex col-span-1 justify-center">
          <div class="flex flex-col">
            <div class="space-y-1 mb-3">
              <h1 class="pb-8">
                Buy and Sell<br>Crypto
              </h1>
              <p class="pb-8">
                Buy and Sell NIM with<br>
                Euro, USD, CHF and more!
              </p>
              <div class="pb-20">
                <SliderToggle v-model="swap" />
              </div>
            </div>

            <div class="grid grid-cols-2 border-2 border-gray-200 rounded-3xl px-10 py-5">
              <div class="col-span-1 ">
                <p>
                  Get your self hosted<br>
                  wallet in 30 sec!
                </p>

                <NuxtLink to="#">
                  Create
                </NuxtLink>
              </div>

              <div class="col-span-1 flex flex-col items-center">
                <div class="flex flex-row">
                  <img
                    src="/nimiq.svg"
                    alt="Nimiq"
                  >
                  <img
                    src="/bitcoin.svg"
                    alt="Bitcoin"
                  >
                  <img
                    src="/usdc.svg"
                    alt="USDC"
                  >
                  <img
                    src="/usdt.svg"
                    alt="USDT"
                  >
                </div>
                <small class="uppercase">
                  Supported currencies
                </small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 flex justify-center">
          <CoinifyWidget v-if="!swap" />
          <LetsexchangeWidget v-else />
        </div>
      </div>
    </div>
  </section>
</template>
