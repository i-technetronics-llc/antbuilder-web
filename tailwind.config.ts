import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          200: "#EDF4FF",
          DEFAULT: "#3B82F6",
          600: "#5A77A7",
        },
        trueGray: {
          300: "#4E5765",
          DEFAULT: "#3B4350",
          500: "#11223F",

        }
      },
      transitionProperty: {
      height: 'height'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
export default config
