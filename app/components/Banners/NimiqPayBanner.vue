<template>
  <section class="relative h-[480px] md:h-[322px] rounded-3xl overflow-hidden  bg-nimiqpay">

    <!-- Content Overlay -->
    <div class="grid md:grid-cols-2 grid-cols-1 relative z-10 h-full justify-center p-8 max-w-full">
      <div class="md:col-span-1 flex flex-col justify-center md:pl-14 md:text-left text-center">
        <h2 class="text-4xl font-bold text-white my-4">
          Nimiq Pay
        </h2>
        <p class="text-white/90 text-lg mb-8 w-[280px]">
          Pay with NIM in over 90'000 locations and shops
        </p>

        <!-- App Store Buttons -->
        <div class="flex space-x-4 justify-center md:justify-start">
          <BasicModalComponent>
            <template #trigger>

              <img src="/appstore.svg" alt="Download on the App Store" class="h-10" />

            </template>

            <template #content>
              <!-- Modal Content -->
              <div class="relative bg-white rounded-3xl py-4 max-w-md w-full text-center">


                <h3 class="text-3xl font-bold text-[#1F2348] mb-2">
                  Download Nimiq Pay
                </h3>
                <p class="text-gray-600 mb-6 font-semibold text-lg">
                  Scan the QR Code
                </p>

                <!-- QR Code -->
                <div class="flex justify-center mb-6">
                  <div>
                    <img src="/appstore-qrcode.svg" alt="QR Code" class="w-[137px] h-[137px]" />
                  </div>

                </div>

                <!-- Store Button -->
                <div class="flex justify-center py-4">
                  <a href="https://apps.apple.com/us/app/nimiq-pay/id6471844738" target="_blank"
                    rel="noopener noreferrer"><img src="/appstore.svg" alt="Download on the App Store"
                      class="h-10" /></a>

                </div>


              </div>
            </template>
          </BasicModalComponent>
          <BasicModalComponent>
            <template #trigger>

              <img src="/play-store.svg" alt="Get it on Google Play" class="h-10" />

            </template>

            <template #content>
              <div class="relative bg-white rounded-3xl py-4 max-w-md w-full text-center">


                <h3 class="text-3xl font-bold text-[#1F2348] mb-2">
                  Download Nimiq Pay
                </h3>
                <p class="text-gray-600 mb-6 font-semibold text-lg">
                  Scan the QR Code
                </p>

                <!-- QR Code -->
                <div class="flex justify-center mb-6">
                  <div>
                    <img src="/playstore-qrcode.svg" alt="QR Code" class="w-[137px] h-[137px]" />
                  </div>

                </div>

                <!-- Store Button -->
                <div class="flex justify-center py-4">
                  <a href="https://play.google.com/store/apps/details?id=com.nimiq.pay" target="_blank"
                    rel="noopener noreferrer">
                    <img src="/play-store.svg" alt="Download on the App Store" class="h-10" />
                  </a>
                </div>


              </div>
            </template>
          </BasicModalComponent>

        </div>
      </div>
      <div class="md:col-span-1 flex justify-bottom">
        <img src="/bg-nimiqpay-phone.svg" alt="" class="nimiqpay-phone" />
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

@media screen and (max-width: 1200px) {}

@media screen and (max-width: 768px) {
  .bg-nimiqpay {
    background-image: url('/bg-nimiqpay.svg'), radial-gradient(circle, #1743A3 0%, #2398DC 100%);
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