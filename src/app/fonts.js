import { Barlow_Condensed, Bebas_Neue } from "next/font/google";

export const bebas = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-bebas-neue',
});

export const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-barlow-condensed'
});