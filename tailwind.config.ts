import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
content: ['./src/**/*.{html,js,svelte,ts}'],

theme: {
extend: {
      colors: {
      primary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
      },
      bismuth: {
      // Base Bismuth Color Palette
      primary: {
            100: '#E6D6E6',
            200: '#D1B3D1',
            300: '#C4A8C4', // Primary Bismuth Color
            400: '#B38DB3',
            500: '#A673A6',
            600: '#945A94',
            700: '#834183',
            800: '#722772',
            900: '#610D61',
      },
      // Iridescent Variation
      secondary: {
            100: '#E0EBEB',
            200: '#B3D1D1',
            300: '#9CC4C4', // Secondary Bismuth Color
            400: '#80B8B8',
            500: '#66ACAC',
            600: '#4D9F9F',
            700: '#339393',
            800: '#1A8787',
            900: '#007A7A',
      },
      // Metallic Variation
      tertiary: {
            100: '#EBEBDF',
            200: '#D1D1B3',
            300: '#C4C49C', // Tertiary Bismuth Color
            400: '#B8B880',
            500: '#ACAC66',
            600: '#9F9F4D',
            700: '#939333',
            800: '#878719',
            900: '#7A7A00',
      },
      // Existing color variants preserved
      blue: {
            100: '#E6F3FF',
            200: '#B3D9FF',
            300: '#80C0FF',
            400: '#4DA6FF',
            500: '#1A8CFF',
            600: '#0066CC',
            700: '#004C99',
            800: '#003366',
            900: '#001933',
      },
      // Purple variants
      purple: {
            100: '#F3E6FF',
            200: '#D9B3FF',
            300: '#C080FF',
            400: '#A64DFF',
            500: '#8C1AFF',
            600: '#6600CC',
            700: '#4C0099',
            800: '#330066',
            900: '#190033',
      },
      // Gold variants
      gold: {
            100: '#FFF7E6',
            200: '#FFE7B3',
            300: '#FFD780',
            400: '#FFC74D',
            500: '#FFB71A',
            600: '#CC8800',
            700: '#996600',
            800: '#664400',
            900: '#332200',
      },
      // Copper variants
      copper: {
            100: '#FFE6E0',
            200: '#FFBFB3',
            300: '#FF9980',
            400: '#FF734D',
            500: '#FF4D1A',
            600: '#CC3300',
            700: '#992600',
            800: '#661900',
            900: '#330D00',
      },
      },
      dark: {
      800: '#1a1b23',
      900: '#121318',
      true: '#000000', // True black for base background
      },
      discord: {
      blue: '#5865F2',
      'blue-hover': '#4752C4'
      }
      },


      backgroundImage: {
      'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      'bismuth-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234DA6FF' fill-opacity='0.1' d='M50 0L0 50l50 50 50-50L50 0zm0 20l30 30-30 30-30-30 30-30z'/%3E%3C/svg%3E\")",
      },
      gradientColorStops: {
      'bismuth-blue': {
      start: '#4DA6FF',
      middle: '#1A8CFF',
      end: '#0066CC'
      },
      'bismuth-purple': {
      start: '#A64DFF',
      middle: '#8C1AFF',
      end: '#6600CC'
      },
      'bismuth-gold': {
      start: '#FFC74D',
      middle: '#FFB71A',
      end: '#CC8800'
      },
      'bismuth-copper': {
      start: '#FF734D',
      middle: '#FF4D1A',
      end: '#CC3300'
      }
      },
      keyframes: {
      'pulse-subtle': {
      '0%, 100%': { opacity: '0.9' },
      '50%': { opacity: '0.7' }
      },
      'swipe-indicator': {
      '0%': { transform: 'translateX(0)', opacity: '0.3' },
      '50%': { transform: 'translateX(10px)', opacity: '1' },
      '100%': { transform: 'translateX(0)', opacity: '0.3' }
      },
      'crystal-shimmer': {
      '0%': { 
            opacity: '0.5',
            backgroundPosition: '0% 50%'
      },
      '50%': { 
            opacity: '1',
            backgroundPosition: '100% 50%'
      },
      '100%': { 
            opacity: '0.5',
            backgroundPosition: '0% 50%'
      }
      },
      'metallic-shift': {
      '0%': { filter: 'hue-rotate(0deg) brightness(1)' },
      '50%': { filter: 'hue-rotate(15deg) brightness(1.2)' },
      '100%': { filter: 'hue-rotate(0deg) brightness(1)' }
      }
      },
      animation: {
      'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      'swipe-indicator': 'swipe-indicator 2s ease-in-out infinite',
      'crystal-shimmer': 'crystal-shimmer 6s ease-in-out infinite',
      'metallic-shift': 'metallic-shift 8s ease-in-out infinite'
      }
}
},

plugins: [typography, forms, containerQueries, aspectRatio]
} as Config;