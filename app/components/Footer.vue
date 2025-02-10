<template>
    <footer class="">
        <div class="container mx-auto md:px-55">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <!-- Left Column -->
                <div class="space-y-16 col-span-1">
                    <div class="flex items-center pb-16">
                        <img src="/en-flag.svg" alt="English" class="h-15 w-22" />
                        <!-- <span class="text-sm">EN</span> -->
                    </div>
                    <nav>
                        <ul class="space-y-12 nq-style">
                            <li>
                                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">Für Einzelhändler
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">Für Einsteiger</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">Das Netzwerk</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">Über uns</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#" class="hover:text-blue-400 transition-colors">News</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- Right Column - Logos -->
                <div class="col-span-3">
                    <div class="flex flex-col md:flex-row items-start space-y-16 md:space-x-24 md:space-y-0 mb-32">
                        <img src="/criptociudad.png" alt="Criptociudad" class=" w-auto" />
                        <img src="/kryptostadt.png" alt="Kryptostadt" class=" w-auto" />
                        <img src="/criptocidade.png" alt="Criptocidade" class="w-auto" />
                    </div>

                    <div class="">
                        <h3 class="nq-h3 mb-8">Notice pursuant to § 29 (1) of the German Securities
                            Institute Act
                            (WpIG)</h3>
                        <p class="nq-text-s mb-32">
                            Nimiq Labs GmbH operates as a tied agent within the meaning of § 3 (2) WpIG and engages
                            exclusively in investment brokerage activities on behalf and under the liability of CONCEDUS
                            GmbH, Eckental, in accordance with § 2 (2) No. 3 WpIG.
                            <NuxtLink to="#" class="">Learn more about Concedus
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
                    <NuxtLink to="#" class="transition-colors">Imprint</NuxtLink>
                    <span class="px-16">•</span>
                    <NuxtLink to="#" class=" transition-colors">Privacy</NuxtLink>
                    <p class="mt-16"> © Cryptocity Association 2023</p>
                </div>

                <!-- <div class="text-lg">   </div> -->
                <div class="col-span-3 flex-wrap flex items-center">

                    <NuxtLink to="#" class=" pr-8 border-r border-gray-300">Zum ausführlichen
                        Haftungsausschluss
                    </NuxtLink>
               
                    <NuxtLink to="#" class="pl-8 pr-8 border-r border-gray-300">Datenschutzerklärung</NuxtLink>
                 
                    <NuxtLink to="#" class="pl-8">Verwendung von Cookies</NuxtLink>
                </div>
            </div>


        </div>
    </footer>
</template>
<script>
export default {}
</script>