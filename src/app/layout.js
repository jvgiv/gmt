// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollEffects from "./ScrollEffects";
import { bebas, barlow } from './fonts'
import Header from "@/app/components/ui/Header";
import { CartProvider } from '@/app/components/cart/CartProvider';
import Socials from "@/app/components/ui/Socials";
import Footer from "@/app/components/ui/Footer";

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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${barlow.variable}`}>
      <body className={`${bebas.variable} ${barlow.variable}`}>
        <CartProvider>
          <ScrollEffects />
          <Header />
          {children}
          <Socials />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
