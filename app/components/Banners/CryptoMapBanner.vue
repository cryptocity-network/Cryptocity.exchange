<template>
  <section class="relative h-[400px] rounded-3xl overflow-hidden bg-contain bg-right bg-crypto-map">
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#1F2348] via-[#1F2348]/100 to-transparent"></div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col justify-center p-8 max-w-md">
      <!-- Map Icon -->
      <div class="pl-14">
        <div class="mb-6">
          <div class="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center">
            <div class="i-lucide-map-pin text-2xl text-white"></div>
          </div>
        </div>

        <!-- Text Content -->
        <h2 class="text-4xl font-bold text-white mb-4">
          Crypto Map
        </h2>
        <p class="text-gray-300 text-lg mb-8">
          Find places to spend Crypto
        </p>

        <!-- Explore Button -->
        <button class="nq-pill-blue px-8 py-2 font-bold text-xl">
          <span>Explore</span>
          <div class="i-lucide-arrow-right text-lg"></div>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style>
.bg-crypto-map {
  background-image: url('/bg-cryptomap.svg'), radial-gradient(circle, #1743A3 0%, #2398DC 100%);
  background-size: contain;
  background-position: right;
}
</style>