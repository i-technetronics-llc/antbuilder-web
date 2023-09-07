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
      padding: "2rem",
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
          900: "#11223F",
        },
        trueGray: {
          300: "#11223F",
          DEFAULT: "#3B4350",
          500: "#11223F",

        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
export default config
