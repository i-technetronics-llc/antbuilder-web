import { Inter, Merriweather, Mukta, Open_Sans } from "next/font/google";

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

export const local = Merriweather({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    display: "swap"
})

export const openSans = Open_Sans({
    subsets: ["latin"],
    variable: '--font-openSans',
    display: "swap"
})