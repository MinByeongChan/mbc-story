import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          ivory: {
            50: { value: '#FFFBF7' },
            100: { value: '#FFF8F1' },
            200: { value: '#FDF1E6' },
          },
          blush: {
            100: { value: '#F7E8E8' },
            200: { value: '#EFCFD2' },
            300: { value: '#D7A7A9' },
          },
          sage: {
            100: { value: '#E4EAE3' },
            200: { value: '#C8D5C5' },
            300: { value: '#A3B18A' },
          },
          gold: {
            100: { value: '#F2E3C6' },
            200: { value: '#E0C58E' },
            300: { value: '#C9A227' },
          },
          charcoal: {
            600: { value: '#4A4A4A' },
            700: { value: '#3A3A3A' },
          },
          grey: {
            100: { value: '#f5f5f5' },
            200: { value: '#e0e0e0' },
            300: { value: '#bdbdbd' },
            400: { value: '#9e9e9e' },
            500: { value: '#757575' },
          },
        },
        fonts: {},
      },
      semanticTokens: {
        colors: {
          primary: { value: '{colors.blush.200}' },
          secondary: { value: '{colors.sage.300}' },
          default: { value: '{colors.grey.300}' },
        },
      },
    },
  },

  // Global css
  globalCss: {
    'html, body': {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
