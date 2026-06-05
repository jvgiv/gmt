import React from "react";
import Image from "next/image";
import Link from "next/link";
import events from "@/data/events.js";

export default function EventsHome() {
  const [firstEvent, secondEvent] = events;

  return (
    <div className="events">
      <div className="events-inner">
        <div className="events-header reveal">
          <div>
            <div className="section-label">On the Calendar</div>
            <h2 className="section-title">
              Upcoming
              <br />
              Events
            </h2>
          </div>
          <Link href="/events" className="btn-secondary">
            All Events
          </Link>
        </div>
        <div className="events-grid reveal">
          {firstEvent && (<div className="event-card-featured">
            <div className="event-img-wrap">
              <Image
                src={firstEvent.imageLink ? firstEvent.imageLink : "/sched.png"}
                alt={firstEvent.name}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="event-img-overlay"></div>
              <div className="event-tag">Filmed by GMT</div>
            </div>
            <div className="event-body">
              <div className="event-meta">{firstEvent.date}</div>
              {firstEvent.link ? (
                <a
                  href={firstEvent.link}
                  className="event-title"
                >
                  {firstEvent.name}
                </a>
              ) : (
                <h3 className="event-title">{firstEvent.name}</h3>
              )}
              <p className="events-home-loc">{firstEvent.location}</p>
              <p className="event-excerpt">
                {firstEvent.desc}
              </p>
            </div>
          </div>)}
          {secondEvent && ( <div className="event-card">
            <div className="event-img-wrap">
              <Image
                src={secondEvent.imageLink ? secondEvent.imageLink : "/sched.png"}
                alt={secondEvent.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="event-img-overlay"></div>
              <div className="event-tag">Filmed by GMT</div>
            </div>
            <div className="event-body">
              <div className="event-meta">{secondEvent.date}</div>
              {secondEvent.link ? (
                <a
                  href={secondEvent.link}
                  className="event-title"
                >
                  {secondEvent.name}
                </a>
              ) : (
                <h3 className="event-title">{secondEvent.name}</h3>
              )}
              <p className="events-home-loc">{secondEvent.location}</p>
              <p className="event-excerpt">
                {secondEvent.desc}
              </p>
            </div>
          </div> )}
        </div>
      </div>
    </div>
  );
}
