import Image from "next/image";
import styles from "./page.module.css";

const events = [
  {
    name: "43rd Annual Dogwood Crosstown Classic, Presented by Batista Grading Inc",
    link: "https://www.discgolfscene.com/tournament/43rd_Annual_Dogwood_Crosstown_Classic_Presented_by_Batista_Grading_Inc_2026",
    desc: "The 43rd Annual Dogwood Crosstown Classic, Presented by Batista Grading Inc is right around the corner and will be part of the NC Point Series. $3,000 added cash.",
    date: "April 3-5, 2026",
    imageLink:
      "https://m.discgolfscene.com/flyers/tournaments/46484/39th-annual-dogwood-crosstown-classic-presented-by-eastern-disc-golf-1643254692-large.jpg",
  },
  {
    name: "Sunshine Open at 501 and Mile Marker 63 - Presented by Abreu Karol, and GMT",
    link: "https://www.discgolfscene.com/tournament/Sunshine_Open_at_501_and_Mile_Marker_63_Pros_Presented_by_Abreu_Karol_and_GMT_2026",
    desc: "Abreu Karol, Greatest Media Team, First Available Print and Apparel, and Disc Golf 978 are teaming up once more to bring you the newly rebranded Sunshine Open. Pros and amateurs will play three rounds with tee times all three days.",
    date: "May 29-31, 2026",
    imageLink:
      "https://m.discgolfscene.com/flyers/tournaments/107126/discmania-presents-sunshine-open-at-501-and-mile-marker-63-presented-by-abreu-karol-and-gmt-1776988907-large.jpg",
  },
  {
    name: "DGVTour #6 - Brewster Ridge Open Driven by Innova - DGPT Q-Series",
    link: "https://www.discgolfscene.com/tournament/DGVTour_6_Brewster_Ridge_Open_2026",
    desc: "DGVTour #6 - Brewster Ridge Open Driven by Innova - DGPT Q-Series with $4,000 added cash to the pro purse.",
    date: "June 19-21, 2026",
    imageLink:
      "https://m.discgolfscene.com/logos/clubs/5623/disc-golf-vermont-e30ca6233f0d.jpg",
  },
  {
    name: "East Coast Metal Roofing presents The Massachusetts State Championship powered by Discmania",
    link: "https://www.discgolfscene.com/tournament/East_Coast_Metal_Roofing_presents_The_Massachusetts_State_Championship_2026",
    desc: "A three-day PDGA A-Tier and NEFA points event with one round per day, plus EDGE fundraising support, raffle prizes, $5,000 added cash, and $4,000 added merchandise.",
    date: "June 26-28, 2026",
    imageLink:
      "https://m.discgolfscene.com/flyers/tournaments/107906/east-coast-metal-roofing-presents-the-massachusetts-state-championship-powered-by-discmania-1773240074-large.jpg",
  },
  {
    name: "2026 Daceyland Open",
    link: "https://www.discgolfscene.com/tournament/2026_Daceyland_Open_2026",
    desc: "$3,000 added cash.",
    date: "July 24-26, 2026",
    imageLink:
      "https://m.discgolfscene.com/logos/tournaments/109344/2026_Daceyland_Open_20261771355384.jpg",
  },
];

const [featuredEvent, ...otherEvents] = events;

export default function Events() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={`${styles.heroCopy} reveal visible`}>
            <p className="section-label">On the Calendar</p>
            <h1 className={styles.heroTitle}>Upcoming Events</h1>
            <p className={styles.heroSub}>
              GMT-backed tournaments, partner events, and marquee weekends worth
              planning around.
            </p>
            <a href="#more-events" className="btn-primary">
              View Full Event Hub
            </a>
          </div>

          <article className={`${styles.featured} reveal visible`}>
            <div className={styles.featuredImageWrap}>
              <Image
                src={featuredEvent.imageLink}
                alt={featuredEvent.name}
                className={styles.featuredImage}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.eventTag}>Featured Event</div>
            </div>
            <div className={styles.featuredBody}>
              <p className={styles.eventMeta}>{featuredEvent.date}</p>
              <h2 className={styles.featuredTitle}>{featuredEvent.name}</h2>
              <p className={styles.eventDesc}>{featuredEvent.desc}</p>
              <a
                href={featuredEvent.link}
                target="_blank"
                rel="noreferrer"
                className={styles.eventLink}
              >
                Event Details
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="more-events" className={styles.gridSection}>
        <div className={styles.gridHeader}>
          <div>
            <p className="section-label">2026 Lineup</p>
            <h2 className="section-title">More Stops On The Schedule</h2>
          </div>
        </div>

        <div className={styles.grid}>
          {otherEvents.map((event, index) => (
            <article
              key={event.name}
              className={`${styles.card} reveal visible`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardImageWrap}>
                <Image
                  src={event.imageLink}
                  alt={event.name}
                  className={styles.cardImage}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.cardBody}>
                <p className={styles.eventMeta}>{event.date}</p>
                <h3 className={styles.cardTitle}>{event.name}</h3>
                <p className={styles.eventDesc}>{event.desc}</p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.eventLink}
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
