<template>
  <section
    class="relative h-[480px] md:h-[322px]  rounded-xl overflow-hidden bg-contain bg-right bg-crypto-map mb-10 md:mt-30 mx-4 md:mx-auto max-w-1048px"
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#1F2348] via-[#1F2348]/100 to-transparent" />

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col justify-center p-8 ">
      <!-- Map Icon -->
      <div class="md:pl-14">
        <div class="mb-6">
          <div class="w-12 h-12 flex items-center justify-center mx-auto md:mx-0">
            <NuxtImg src="/icon-cryptomap.svg" alt="Download on the App Store" class="h-12" />
          </div>
        </div>

        <!-- Text Content -->
        <h2 class="text-4xl font-bold text-white mb-4 text-center md:text-left">
          Crypto Map
        </h2>
        <p class="text-gray-300 text-lg mb-8 text-center md:text-left">
          Find places to spend Crypto
        </p>

        <!-- Explore Button -->
        <NuxtLink to="https://map.nimiq.com/@17.750880574470294,-9.97978963055369,3z" external target="_blank" class="nq-pill-blue px-8 py-2 font-bold text-xl mx-auto md:mx-0 flex items-center gap-2 nq-arrow">
          Explore
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style>
.bg-crypto-map {
  background-image: url('/bg-cryptomap.svg');
  background-size: contain;
  background-position: right;
}

@media screen and (max-width: 768px) {
  .bg-crypto-map {
    background-size: cover;
    background-position: bottom;
  }
}
</style>
