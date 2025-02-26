<template>
  <section class="relative h-[500px] rounded-3xl overflow-hidden  bg-nimiqpay">
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-radial"></div>

    <!-- Content Overlay -->
    <div class="grid md:grid-cols-2 grid-cols-1 relative z-10 h-full justify-center p-8 max-w-full">
      <div class="md:col-span-1 flex flex-col justify-center pl-14">
        <h2 class="text-5xl font-bold text-white mb-4">
          Nimiq Pay
        </h2>
        <p class="text-white/90 text-xl mb-8">
          Pay with NIM in over 90'000 locations and shops
        </p>

        <!-- App Store Buttons -->
        <div class="flex space-x-4">
          <BasicModalComponent>
            <template #trigger>

              <img src="/appstore.svg" alt="Download on the App Store" class="h-10" />

            </template>

            <template #content>
              <!-- Modal Content -->
              <div class="relative bg-white rounded-3xl p-8 max-w-md w-full text-center">


                <h3 class="text-2xl font-bold text-[#1F2348] mb-2">
                  Download Nimiq Pay
                </h3>
                <p class="text-gray-600 mb-6">
                  Scan the QR Code
                </p>

                <!-- QR Code -->
                <div class="flex justify-center mb-6">
                  <div>
                    <img src="/appstore-qrcode.svg" alt="QR Code" class="w-48 h-48" />
                  </div>

                </div>

                <!-- Store Button -->
                <div class="flex justify-center">
                  <img src="/appstore.svg" alt="Download on the App Store" class="h-10" />
                </div>


              </div>
            </template>
          </BasicModalComponent>
          <BasicModalComponent>
            <template #trigger>

              <img src="/play-store.svg" alt="Get it on Google Play" class="h-10" />

            </template>

            <template #content>
              <p>Modal content</p>
            </template>
          </BasicModalComponent>

        </div>
      </div>
      <div class="md:col-span-1 flex justify-bottom">
        <img src="/bg-nimiqpay-phone.svg" alt="" class="absolute w-[500px] h-[480px] bottom-0 right-[50px]" />
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">

</script>

<style>
.bg-nimiqpay {
  background-image: url('/bg-nimiqpay.svg'), radial-gradient(circle, #1743A3 0%, #2398DC 100%);
  background-size: cover;
  background-position: center;
}
.bg-nimiqpay-phone{
  background-image: url('/bg-nimiqpay-phone.svg');
  background-size: cover;
  background-position: bottom;
}
</style>