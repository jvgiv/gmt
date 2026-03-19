import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./(content)/home/page";
import AboutBand from "./(content)/aboutband/page";
import Services from "./(content)/services/page"
import EventsHome from "./(content)/eventshome/page";
import Mission from "./(content)/mission/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutBand />
      <Services />
      <EventsHome />
      <Mission />
    </div>
  );
}
