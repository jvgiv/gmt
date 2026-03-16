import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./(content)/home/page";
import AboutBand from "./(content)/aboutband/page";
import Services from "./(content)/services/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutBand />
      <Services />
    </div>
  );
}
