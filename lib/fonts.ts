import {
  Bebas_Neue,
  Bungee_Inline,
  Bungee_Outline,
  Nanum_Gothic_Coding,
  Oxygen,
  Roboto,
} from 'next/font/google'

export const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
export const oxygen = Oxygen({ subsets: ['latin'], weight: ['400'] })
export const nanumGothicCoding = Nanum_Gothic_Coding({
  subsets: ['latin'],
  weight: ['400'],
})
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700', '400'],
})
export const bungeeInline = Bungee_Inline({
  subsets: ['latin'],
  weight: ['400'],
})
export const bungeeOutline = Bungee_Outline({
  subsets: ['latin'],
  weight: ['400'],
})
