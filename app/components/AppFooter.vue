<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="">
    <div class="container mx-auto md:px-55">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 mb-12">
        <!-- Left Column -->
        <div class="space-y-16 col-span-1">
          <div class="flex items-center pb-16">
            <SelectLanguage />
          </div>
          <nav>
            <ul class="space-y-12 nq-style">
              <li>
                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">
                  {{ t('ForRetailers') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">
                  {{ t('ForBeginners') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">
                  {{ t('TheNetwork') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">
                  {{ t('AboutUs') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">
                  {{ t('News') }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Right Column - Logos -->
        <div class="col-span-3">
          <div class="flex flex-col md:flex-row items-start space-y-16 md:space-x-24 md:space-y-0 mb-32">
            <img src="/criptociudad.svg" alt="Criptociudad" class=" w-auto">
            <img src="/kryptostadt.svg" alt="Kryptostadt" class=" w-auto">
            <img src="/criptocidade.svg" alt="Criptocidade" class="w-auto">
          </div>

          <div class="">
            <h3 class="nq-h3 mb-8">
              {{ t('Notice') }}
            </h3>
            <p class="nq-text-s mb-32">
              {{ t('NoticeText') }}
              <NuxtLink to="#" class="">
                {{ t('LearnMoreAboutConcedus') }}
              </NuxtLink>
            </p>
            <p class="nq-text-s">
              Nimiq Labs GmbH is registered with the Federal Financial Supervisory Authority (BaFin) as a
              tied
              agent of CONCEDUS GmbH and is listed in the BaFin register of tied agents under the
              registration
              number 80179247. The BaFin register of contractually bound intermediaries can be accessed
              at:
              https://portal.mvp.bafin.de/database/VGVInfo/
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->

      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="col-span-1 relative top-[-19px]">
          <NuxtLink to="#" class="transition-colors">
            {{ t('Imprint') }}
          </NuxtLink>
          <span class="px-16">•</span>
          <NuxtLink to="#" class=" transition-colors">
            {{ t('Privacy') }}
          </NuxtLink>
          <p class="mt-16">
            © Cryptocity Association 2023
          </p>
        </div>

        <!-- <div class="text-lg">   </div> -->
        <div class="col-span-3 flex-wrap flex items-center">
          <NuxtLink to="#" class=" pr-8 border-r border-gray-300">
            {{ t('Disclaimer') }}
          </NuxtLink>

          <NuxtLink to="#" class="pl-8 pr-8 border-r border-gray-300">
            {{ t('PrivacyPolicy') }}
          </NuxtLink>

          <NuxtLink to="#" class="pl-8">
            {{ t('CookieUsage') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
