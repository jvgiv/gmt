import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "../components/ui/HomePage";
import AboutBand from "../components/ui/AboutBand";
import Services from "../components/ui/Services"
import EventsHome from "../components/ui/EventsHome";
import Mission from "../components/ui/Mission";
import NewsLetter from "@/components/ui/NewsLetter";

export default function Home() {
  return (
    <div>
      <HomePage />
      <NewsLetter />
      <AboutBand />
      <Services />
      <EventsHome />
      <Mission />
    </div>
  );
}
