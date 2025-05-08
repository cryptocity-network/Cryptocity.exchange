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
            <ul class="lg:space-y-4 flex flex-row flex-wrap leading-loose lg:block mb-4 md:mb-0">
              <li class="pr-4  lg:px-0 lg:border-0  border-r border-gray-300">
                <NuxtLink to="https://www.kryptostadt.info/en/merchants" target="_blank" rel="noopener noreferrer">
                  {{ t('ForRetailers') }}
                </NuxtLink>
              </li>
              <li class="px-4 lg:px-0 lg:border-0 border-r border-gray-300">
                <NuxtLink to="https://www.kryptostadt.info/en/beginners" target="_blank" rel="noopener noreferrer">
                  {{ t('ForBeginners') }}
                </NuxtLink>
              </li>
              <li class="px-4 pl-0 lg:px-0 lg:border-0  border-r border-gray-300">
                <NuxtLink to="https://www.kryptostadt.info/en/network" target="_blank" rel="noopener noreferrer">
                  {{ t('TheNetwork') }}
                </NuxtLink>
              </li>
              <li class="px-4 lg:px-0 lg:border-0  border-r border-gray-300">
                <NuxtLink to="https://www.kryptostadt.info/en/about" target="_blank" rel="noopener noreferrer">
                  {{ t('AboutUs') }}
                </NuxtLink>
              </li>
              <li class="px-4 lg:px-0 ">
                <NuxtLink
                  to="https://www.kryptostadt.info/en/news" class="hover:text-blue-400 transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  {{ t('News') }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Right Column - Logos -->
        <div class="col-span-3">
          <div
            class="flex flex-col md:flex-row items-start space-y-8 md:space-x-6 md:space-y-0 mb-8 md:mt-8 mt-4 lg:mt-0"
          >
            <NuxtLink to="https://cryptocity.network" target="_blank" rel="noopener noreferrer" class="w-[145px] h-[30px]">
              <NuxtImg src="/cryptocity.svg" alt="Criptociudad" width="145" height="50" />
            </NuxtLink>
            <NuxtLink
              to="https://cryptocity.network" target="_blank" rel="noopener noreferrer"
              class="w-[150px] h-[30px]"
            >
              <NuxtImg src="/kryptostadt.svg" alt="Kryptostadt" width="150" height="50" />
            </NuxtLink>
            <NuxtLink
              to="https://cryptocity.network" target="_blank" rel="noopener noreferrer"
              class="w-[152px] h-[30px]"
            >
              <NuxtImg src="/criptocidade.svg" alt="Criptocidade" width="152" height="50" />
            </NuxtLink>
            <NuxtLink
              to="https://cryptocity.network" target="_blank" rel="noopener noreferrer"
              class="w-[152px] h-[30px]"
            >
              <NuxtImg src="/criptociudad.svg" alt="criptociudad" width="155" height="55" />
            </NuxtLink>
          </div>

          <div>
            <div class="flex flex-col md:pt-8">
              <div class="mb-4 mt-4 md:mt-0 text-md font-bold text-blue-dark/60">
                Join our Social Channels!
              </div>
              <ul class="flex gap-4 md:gap-8">
                <li>
                  <NuxtLink to="https://x.com/kryptostadt" target="_blank" rel="noopener noreferrer">
                    <Icon
                      name="fa6-brands:square-x-twitter"
                      class="text-[rgba(31,35,72,0.6)] hover:text-[rgba(31,35,72,0.8)] transition-colors duration-200"
                      size="28"
                    />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="https://www.facebook.com/Kryptostadt/" target="_blank" rel="noopener noreferrer">
                    <Icon
                      name="fa6-brands:facebook"
                      class="text-[rgba(31,35,72,0.6)] hover:text-[rgba(31,35,72,0.8)] transition-colors duration-200"
                      size="28"
                    />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="https://www.instagram.com/kryptostadt" target="_blank" rel="noopener noreferrer">
                    <Icon
                      name="fa-brands:instagram-square"
                      class="text-[rgba(31,35,72,0.6)] hover:text-[rgba(31,35,72,0.8)] transition-colors duration-200"
                      size="28"
                    />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="https://de.pinterest.com/kryptostadt/" target="_blank" rel="noopener noreferrer">
                    <Icon
                      name="fa-brands:pinterest"
                      class="text-[rgba(31,35,72,0.6)] hover:text-[rgba(31,35,72,0.8)] transition-colors duration-200"
                      size="28"
                    />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="https://www.youtube.com/@Kryptostadt" target="_blank" rel="noopener noreferrer">
                    <Icon
                      name="fa-brands:youtube"
                      class="text-[rgba(31,35,72,0.6)] hover:text-[rgba(31,35,72,0.8)] transition-colors duration-200"
                      size="28"
                    />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="https://www.linkedin.com/in/company/kryptostadt" target="_blank" rel="noopener noreferrer">
                    <Icon
                      name="fa-brands:linkedin"
                      class="text-[rgba(31,35,72,0.6)] hover:text-[rgba(31,35,72,0.8)] transition-colors duration-200"
                      size="28"
                    />
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="https://www.tiktok.com/@kryptostadt" target="_blank" rel="noopener noreferrer">
                    <Icon
                      name="cib:tiktok"
                      class="text-[rgba(31,35,72,0.6)] hover:text-[rgba(31,35,72,0.8)] transition-colors duration-200"
                      size="28"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->

      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="col-span-1 relative top-[-5px]">
          <p class="mt-4">
            © Cryptocity Association 2023
          </p>
        </div>

        <div class="col-span-3 flex-wrap flex items-center  mt-4 md:mt-0">
          <a href="/privacy-policy.pdf" download target="_blank" class="pl-0 pr-2 border-r border-gray-300">
            {{ t('PrivacyPolicy') }}
          </a>

          <NuxtLink
            to="https://cryptocity.africa/en/cookies" target="_blank" rel="noopener noreferrer"
            class="pl-2 pr-2 border-r border-gray-300"
          >
            {{ t('CookieUsage') }}
          </NuxtLink>

          <a href="/terms-of-service.pdf" download class="pl-2" target="_blank">
            {{ t('TermOfService') }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
