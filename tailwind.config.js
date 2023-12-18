import { nextui } from '@nextui-org/react'
import {
  darkThemeColors,
  lightThemeColors
} from './styles/colorThemes'

/** @type {import('tailwindcss').Config} */
export const content =
  [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ]
export const theme =
  {
    extend:
      {
        backgroundImage:
          {
            'gradient-radial':
              'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
              'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
          },
        colors:
          {}
      }
  }
export const darkMode =
  'class'
export const plugins =
  [
    nextui(
      {
        addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
        layout:
          {}, // common layout tokens (applied to all themes)
        themes:
          {
            light:
              {
                layout:
                  {}, // light theme layout tokens
                colors:
                  lightThemeColors
              },
            dark: {
              colors:
                darkThemeColors
            }
          }
      }
    )
  ]
