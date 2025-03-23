<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer>
    <div class="container mx-auto md:px-12 py-12 px-2">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 mb-4">
        <!-- Left Column -->
        <div class="space-y-4 col-span-1">
          <div class="flex items-center pb-4">
            <SelectLanguage />
          </div>
          <nav>
            <ul class="lg:space-y-4 flex flex-row flex-wrap leading-loose lg:block">
              <li class="pr-4  lg:px-0 lg:border-0  border-r border-gray-300">
                <NuxtLink to="#">
                  {{ t('ForRetailers') }}
                </NuxtLink>
              </li>
              <li class="px-4 lg:px-0 lg:border-0 border-r border-gray-300">
                <NuxtLink to="#">
                  {{ t('ForBeginners') }}
                </NuxtLink>
              </li>
              <li class="px-4 lg:px-0 lg:border-0  border-r border-gray-300">
                <NuxtLink to="#">
                  {{ t('TheNetwork') }}
                </NuxtLink>
              </li>
              <li class="px-4 lg:px-0 lg:border-0  border-r border-gray-300">
                <NuxtLink to="#">
                  {{ t('AboutUs') }}
                </NuxtLink>
              </li>
              <li class="px-4 lg:px-0 ">
                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">
                  {{ t('News') }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Right Column - Logos -->
        <div class="col-span-3">
          <div class="flex flex-col md:flex-row items-start space-y-4 md:space-x-6 md:space-y-0 mb-8 md:mt-8 mt-4 lg:mt-0">
            <NuxtImg src="/criptociudad.svg" alt="Criptociudad" width="150" height="50" />
            <NuxtImg src="/kryptostadt.svg" alt="Kryptostadt" width="150" height="50" />
            <NuxtImg src="/criptocidade.svg" alt="Criptocidade" width="150" height="50" />
          </div>

          <div>
            <h3 class="mb-2">
              {{ t('Notice') }}
            </h3>
            <p class="mb-8">
              {{ t('NoticeText') }}
              <NuxtLink to="#" class="">
                {{ t('LearnMoreAboutConcedus') }}
              </NuxtLink>
            </p>
            <p>
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
          <NuxtLink to="#">
            {{ t('Imprint') }}
          </NuxtLink>
          <span class="px-4">•</span>
          <NuxtLink to="#">
            {{ t('Privacy') }}
          </NuxtLink>
          <p class="mt-4">
            © Cryptocity Association 2023
          </p>
        </div>

        <div class="col-span-3 flex-wrap flex items-center">
          <NuxtLink to="#" class="pr-2 border-r border-gray-300">
            {{ t('Disclaimer') }}
          </NuxtLink>

          <NuxtLink to="#" class="pl-2 pr-2 border-r border-gray-300">
            {{ t('PrivacyPolicy') }}
          </NuxtLink>

          <NuxtLink to="#" class="pl-2">
            {{ t('CookieUsage') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
