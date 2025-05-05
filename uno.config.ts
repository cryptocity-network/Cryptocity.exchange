import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetNimiq({
      utilities: true,
      attributifyUtilities: true,
    }),
    presetAttributify(),
    presetIcons(),
  ],
  preflights: [
    {
      getCSS: () => `
        body { background-color: #F8F8F8; }
   
      `,
    },
  ],
  theme: {
    breakpoints: {
      sm: '375px',
      md: '768px',
      lg: '1152px',
      xl: '1440px',
    },
  },
  transformers: [
    transformerDirectives(),
  ],
})
