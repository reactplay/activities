import React from "react";
import EventCard from "./EventCard";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

function EventSection({ events }) {
  return (
    <>
      <section
        id="events"
        className="flex flex-col items-center justify-center w-full mx-auto px-4 bg-gray-50"
      >
        <h1 className="text-5xl py-16 font-raleway">
          <span className="font-black font-body text-[#010326]">Events</span>
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-3 justify-center items-center gap-10 lg:gap-20">
          {events?.map((event) => (
            <EventCard key={`event_key-${event.id}`} event={event} />
          ))}
        </div>
        <button className="font-sans font-black text-2xl py-16 decoration-cyan-400 underline transition-shadow text-[#010326]">
          <Link href="/events">
            <a  target="_blank">
              View all{" "}
              <span className="inline-block text-lg text-cyan-400">
                <HiArrowNarrowRight />
              </span>
            </a>
          </Link>
        </button>
      </section>
    </>
  );
}

export default EventSection;
