<script setup lang="ts">
const swap = ref(false)
</script>

<template>
  <section>
    <div class="container mx-auto mt-120 mb-120">
      <div class="grid grid-cols-1 md:grid-cols-2 min-h-610">
        <div class="flex col-span-1 justify-center">
          <div class="flex flex-col">
            <div class="space-y-4 mb-12">
              <h1 class="nq-h1 font-size-48 pb-32">
                Buy and Sell<br>Crypto
              </h1>
              <p class="nq-style pb-32">
                Buy and Sell NIM with<br>
                Euro, USD, CHF and more!
              </p>
              <div class="flex space-x-4 pb-100">
                <SwitchButton v-model="swap" />
              </div>
            </div>

            <div class="grid grid-cols-2 border-2 border-gray-200 rounded-3xl px-30 py-20">
              <div class="col-span-1 ">
                <p class="nq-text-l">
                  Get your self hosted<br>
                  wallet in 30 sec!
                </p>

                <a class="nq-link">
                  Create
                </a>
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
                <div class="nq-text-s uppercase">
                  Supported currencies
                </div>
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
