import { Inter, Merriweather, Mukta, Open_Sans } from "next/font/google";
import localFont from 'next/font/local'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
})


export const mukta = Mukta({
    weight: ["200", "300", "400", "500", "600"],
    subsets: ['latin'],
    variable: '--font-mukta',
    display: 'swap'
})

export const merriWeather = Merriweather({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    display: "swap"
})

export const openSans = Open_Sans({
    subsets: ["latin"],
    variable: '--font-openSans',
    display: "swap"
})

export const millik = localFont({
    src: "./Millik.ttf",
    display: "swap",
})