import Image from "next/image";
import styles from "./page.module.css";
import events from "@/data/events.js";



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
              planning around. Keep an eye out for coverage
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
              <p className={styles.eventLocation}>{featuredEvent.location}</p>
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
                {event.imageLink ? (
                  <Image
                    src={event.imageLink}
                    alt={event.name}
                    className={styles.cardImage}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                ) : (
                  <Image
                    src="/sched.png"
                    alt="Placeholder Image"
                    className={styles.cardImage}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                )}
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.cardBody}>
                <p className={styles.eventMeta}>{event.date}</p>
                <h3 className={styles.cardTitle}>{event.name}</h3>
                <p className={styles.eventLocation}>{event.location}</p>
                {event.desc !== "" && (
                  <p className={styles.eventDesc}>{event.desc}</p>
                )}
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.eventLink}
                  >
                    Learn More
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
