import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const teamMembers = [
  {
    name: "Jamie Kiep",
    image: "/1495.jpg",
    alt: "Jamie Kiep",
    role: "Sponsored Player",
    rating: "1016",
    accent: "Newest Addition",
    copy:
      "Jamie brings years of tournament experience, steady play, and a big personality to Team GMT. Away from competition, he stays busy with family life and caring for more than 50 animals, which says a lot about the energy and commitment he carries into everything he does.",
    highlight:
      "You will see Jamie representing GMT at Pro Tour stops, regional events across New England, and in fresh media features this season.",
    ctaLabel: "Watch Jamie's In The Bag",
    ctaHref: "https://www.youtube.com/watch?v=E7Q_YP2kVCg",
  },
  {
    name: "Harry Chace",
    image: "/1496.png",
    alt: "Harry Chace",
    role: "Team GMT Year Two",
    rating: "1024",
    accent: "Returning for 2026",
    copy:
      "Harry remains a key part of what GMT is building. He competes at a high level, helps shape events, travels for the brand, and shows up across commentary, course work, and community-facing projects with real consistency.",
    highlight:
      "With another DGPT Pro Tour season ahead, Harry is carrying a focused second-year mindset and will continue appearing across GMT coverage and original content.",
  },
  // {
  //   name: "Raivis Markons-Craig",
  //   image: "/1496.png",
  //   alt: "RMC",
  //   role: "",
  //   rating: "",
  //   accent: "",
  //   copy:
  //     "",
  //   highlight:
  //     "",
  // },
];

export default function About() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid}>
          <div className={`${styles.heroCopy} reveal visible`}>
            <p className="section-label">About GMT</p>
            <h1 className={styles.title}>
              The Players Behind GMT
            </h1>
            <p className={styles.subtitle}>
              Meet the competitors and personalities representing Greatest
              Media Team on tour, at regional events, and throughout the disc
              golf community.
            </p>
            <div className={styles.actions}>
              <Link href="/videos" className="btn-primary">
                Explore What We Do
              </Link>
              <Link
                href="https://www.youtube.com/@GreatestMediaTeam"
                className="btn-secondary"
                target="_blank"
              >
                Follow the Channel
              </Link>
            </div>
          </div>

          <div className={`${styles.heroPanel} reveal visible`}>
            <p className={styles.panelLabel}>Team Snapshot</p>
            <div className={styles.panelStats}>
              <div>
                <span>{teamMembers.length}</span>
                <p>Featured team members</p>
              </div>
              <div>
                <span>2026</span>
                <p>Season focus</p>
              </div>
              <div>
                <span>DGPT</span>
                <p>Tour presence</p>
              </div>
            </div>
            <p className={styles.panelBody}>
              GMT is built around players who compete hard, show up for the
              community, and help grow the game through events, media, and
              consistent presence on and off the course.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.statsBand}>
        <div className={styles.statsInner}>
          <div className={styles.stat}>
            <span>Player Focus</span>
            <strong>Performance + Personality</strong>
          </div>
          <div className={styles.stat}>
            <span>Coverage Style</span>
            <strong>Tour, regional, and original media</strong>
          </div>
          <div className={styles.stat}>
            <span>Brand Energy</span>
            <strong>Competitive, grounded, community-first</strong>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.sectionHeader}>
          <p className="section-label">Featured Players</p>
          <h2 className="section-title">Meet the Team</h2>
        </div>

        <div className={styles.cardGrid}>
          {teamMembers.map((member) => (
            <article key={member.name} className={`${styles.card} reveal visible`}>
              <div className={styles.imageWrap}>
                <Image
                  src={member.image}
                  alt={member.alt}
                  width={620}
                  height={827}
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.badge}>{member.accent}</div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <p>{member.role}</p>
                  <span>PDGA Rating {member.rating}</span>
                </div>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.copy}>{member.copy}</p>
                <p className={styles.highlight}>{member.highlight}</p>

                {member.ctaHref ? (
                  <Link
                    href={member.ctaHref}
                    target="_blank"
                    className={styles.inlineLink}
                  >
                    {member.ctaLabel}
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
