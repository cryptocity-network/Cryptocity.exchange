<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isMobile = ref(false)

onMounted(() => {
  // Check screen width on mount
  isMobile.value = window.innerWidth <= 768

  // Add a resize event listener to update `isMobile` dynamically
  const handleResize = () => {
    isMobile.value = window.innerWidth <= 768
  }
  window.addEventListener('resize', handleResize)

  // Cleanup event listener on unmount
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})

const appStoreLink = 'https://apps.apple.com/us/app/nimiq-pay/id6471844738'
const googlePlayLink = 'https://play.google.com/store/apps/details?id=com.nimiq.pay&hl=gsw'
</script>

<template>
  <section class="relative h-[480px] md:h-[322px] rounded-xl overflow-hidden bg-nimiqpay mx-4 md:mx-0">
    <!-- Content Overlay -->
    <div class="grid md:grid-cols-2 grid-cols-1 relative z-10 h-full justify-center p-8 max-w-full">
      <div class="md:col-span-1 flex flex-col justify-center md:pl-14 md:text-left text-center">
        <h2 class="text-4xl font-bold text-white my-4">
          Nimiq Pay
        </h2>
        <p class="text-white/90 text-lg mb-8 w-[280px] text-center md:text-left mx-auto md:mx-0">
          Pay with NIM in over 90'000 locations and shops
        </p>

        <!-- App Store Buttons -->
        <div class="flex space-x-4 justify-center md:justify-start">
          <!-- App Store Button -->
          <BasicModalComponent v-if="!isMobile">
            <template #trigger>
              <NuxtImg src="/appstore.svg" alt="Download on the App Store" class="h-10 cursor-pointer" />
            </template>
            <template #content>
              <div class="relative bg-white rounded-3xl py-3 max-w-md w-full text-center">
                <h3 class="text-3xl font-bold text-[#1F2348] mb-2">
                  Download Nimiq Pay
                </h3>
                <p class="text-gray-600 mb-6 font-semibold text-lg">
                  Scan the QR Code
                </p>
                <div class="flex justify-center mb-6">
                  <div class="background-white shadow-lg rounded-lg p-2">
                    <NuxtImg src="/appstore-qrcode.svg" alt="QR Code" class="w-[125px] h-[125px]" />
                  </div>
                </div>
                <div class="flex justify-center pt-4 pb-[18px]">
                  <NuxtLink :to="appStoreLink" external target="_blank">
                    <NuxtImg src="/appstore.svg" alt="Download on the App Store" class="w-[137px]" />
                  </NuxtLink>
                </div>
              </div>
            </template>
          </BasicModalComponent>
          <NuxtLink v-else :to="appStoreLink" external target="_blank">
            <NuxtImg src="/appstore.svg" alt="Download on the App Store" class="h-10" />
          </NuxtLink>

          <!-- Google Play Button -->
          <BasicModalComponent v-if="!isMobile">
            <template #trigger>
              <NuxtImg src="/play-store.svg" alt="Download on Google Play" class="h-10 cursor-pointer" />
            </template>
            <template #content>
              <div class="relative bg-white rounded-3xl py-3 max-w-md w-full text-center">
                <h3 class="text-3xl font-bold text-[#1F2348] mb-2">
                  Download Nimiq Pay
                </h3>
                <p class="text-gray-600 mb-6 font-semibold text-lg">
                  Scan the QR Code
                </p>
                <div class="flex justify-center mb-6">
                  <div class="background-white shadow-lg rounded-lg p-2">
                    <NuxtImg src="/playstore-qrcode.svg" alt="QR Code" class="w-[125px] h-[125px]" />
                  </div>
                </div>
                <div class="flex justify-center pt-4 pb-5">
                  <NuxtLink :to="googlePlayLink" external target="_blank">
                    <NuxtImg src="/play-store.svg" alt="Download on Google Play" class="w-[137px]" />
                  </NuxtLink>
                </div>
              </div>
            </template>
          </BasicModalComponent>
          <NuxtLink v-else :to="googlePlayLink" external target="_blank">
            <NuxtImg src="/play-store.svg" alt="Download on Google Play" class="h-10" />
          </NuxtLink>
        </div>
      </div>
      <div class="md:col-span-1 flex justify-bottom">
        <NuxtImg src="/bg-nimiqpay-phone.svg" alt="nimiqpay" class="nimiqpay-phone" />
      </div>
    </div>
  </section>
</template>


<style>
.bg-nimiqpay {
  background-image: url('/bg-nimiqpay.svg'), radial-gradient(circle, #1743a3 0%, #2398dc 100%);
  background-size: cover;
  background-position: center;
}

.bg-nimiqpay-phone {
  background-image: url('/bg-nimiqpay-phone.svg');
  background-size: cover;
  background-position: bottom;
}

.nimiqpay-phone {
  position: absolute;
  width: 350px;
  height: 280px;
  bottom: -5px;
  right: 50px;
}

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 768px) {
  .bg-nimiqpay {
    background-image: url('/bg-nimiqpay.svg'), radial-gradient(circle, #1743a3 0%, #2398dc 100%);
    background-size: cover;
    background-position: right 0px bottom 0px;
  }

  .nimiqpay-phone {
    width: 250px;
    height: 240px;
    position: relative;
    margin: 0 auto;
    top: 35px;
    right: 0px;
  }
}
</style>
