import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // 토스증권(TDS) 테마 선택자 - [data-tds-color-scheme="dark"] 사용 시 다크 모드
  conditions: {
    extend: {
      tossDark: '[data-tds-color-scheme="dark"] &',
      tossLight: '[data-tds-color-scheme="light"] &',
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fontSizes: {
          xs: { value: '12px' },
          sm: { value: '13px' },
          md: { value: '14px' },
          lg: { value: '15px' },
          xl: { value: '16px' },
          '2xl': { value: '17px' },
          '3xl': { value: '20px' },
        },
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
          // 토스증권(TDS) 색상 팔레트 - https://www.tossinvest.com
          toss: {
            grey: {
              50: { value: '#f9fafb' },
              100: { value: '#f2f4f6' },
              200: { value: '#e5e8eb' },
              300: { value: '#d1d6db' },
              400: { value: '#b0b8c1' },
              500: { value: '#8b95a1' },
              600: { value: '#6b7684' },
              700: { value: '#4e5968' },
              800: { value: '#333d4b' },
              900: { value: '#191f28' },
            },
            blue: {
              50: { value: '#e8f3ff' },
              100: { value: '#c9e2ff' },
              200: { value: '#90c2ff' },
              300: { value: '#64a8ff' },
              400: { value: '#4593fc' },
              500: { value: '#3182f6' },
              600: { value: '#2272eb' },
              700: { value: '#1b64da' },
              800: { value: '#1957c2' },
              900: { value: '#194aa6' },
            },
            red: {
              50: { value: '#ffeeee' },
              100: { value: '#ffd4d6' },
              200: { value: '#feafb4' },
              300: { value: '#fb8890' },
              400: { value: '#f66570' },
              500: { value: '#f04452' },
              600: { value: '#e42939' },
              700: { value: '#d22030' },
              800: { value: '#bc1b2a' },
              900: { value: '#a51926' },
            },
            green: {
              50: { value: '#f0faf6' },
              100: { value: '#aeefd5' },
              200: { value: '#76e4b8' },
              300: { value: '#3fd599' },
              400: { value: '#15c47e' },
              500: { value: '#03b26c' },
              600: { value: '#02a262' },
              700: { value: '#029359' },
              800: { value: '#028450' },
              900: { value: '#027648' },
            },
          },
        },
        fonts: {},
      },
      semanticTokens: {
        colors: {
          primary: { value: '{colors.blush.200}' },
          secondary: { value: '{colors.sage.300}' },
          default: { value: '{colors.grey.300}' },
          // 토스증권 시맨틱 색상 (data-tds-color-scheme="dark" 시 다크 모드)
          toss: {
            background: {
              value: {
                base: '{colors.toss.grey.50}',
                _tossDark: '{colors.toss.grey.900}',
              },
            },
            backgroundSecondary: {
              value: {
                base: '#FFFFFF',
                _tossDark: '{colors.toss.grey.800}',
              },
            },
            text: {
              value: {
                base: '{colors.toss.grey.900}',
                _tossDark: '{colors.toss.grey.50}',
              },
            },
            textSecondary: {
              value: {
                base: '{colors.toss.grey.600}',
                _tossDark: '{colors.toss.grey.400}',
              },
            },
            primary: {
              value: {
                base: '{colors.toss.blue.500}',
                _tossDark: '{colors.toss.blue.400}',
              },
            },
            positive: {
              value: {
                base: '{colors.toss.red.500}',
                _tossDark: '{colors.toss.red.400}',
              },
            },
            negative: {
              value: {
                base: '{colors.toss.blue.500}',
                _tossDark: '{colors.toss.blue.400}',
              },
            },
          },
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
