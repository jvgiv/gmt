import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./(content)/home/page";
import AboutBand from "./(content)/aboutband/page";
import Services from "./(content)/services/page";
import Header from "@/components/ui/Header";
import EventsHome from "./(content)/eventshome/page";
import Mission from "./(content)/mission/page";
import Socials from "./(content)/socials/page";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <HomePage />
      <AboutBand />
      <Services />
      <EventsHome />
      <Mission />
      <Socials />
      <Footer />
    </div>
  );
}
