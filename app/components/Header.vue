<template>
    <header class="py-4 px-6 h-[96px]">
        <div class="container mx-auto flex items-center justify-between h-full">
            <!-- Logo Section -->
            <div class="flex items-center">
                <NuxtLink to="/">
                    <img src="/logo.png" alt="Cryptocity Logo" class="cursor-pointer" />
                </NuxtLink>
         
            </div>

            <!-- Right Section -->
            <div class="flex items-center h-full">
                <a href="#" class="font-bold pr-32">
                    Learn more
                </a>
                <nav>
                    <select v-model="selectedLocale" @change="switchLocale"
                        class="bg-transparent px-3 py-1.5transition-colors">
                        <option v-for="availableLocale in availableLocales" :key="availableLocale.code"
                            :value="availableLocale.code">
                            {{ t(`Locales.${availableLocale.code}`) }}
                        </option>
                    </select>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        availableLocales: Array,
        switchLocalePath: Function,
        t: Function
    },
    data() {
        return {
            selectedLocale: this.availableLocales[0].code // Default to the first locale
        }
    },
    methods: {
        switchLocale() {
            this.$router.push(this.switchLocalePath(this.selectedLocale));
        }
    }
}
</script>