// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollEffects from "./ScrollEffects";
import { bebas, barlow } from './fonts'
import Header from "@/components/ui/Header";
import { CartProvider } from '@/components/cart/CartProvider';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Greatest Media Team",
  description: "Your home for all things disc golf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${barlow.variable}`}>
      <body className={`${bebas.variable} ${barlow.variable}`}>
        <CartProvider>
          <ScrollEffects />
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
