import Image from "next/image";
import Link from "next/link";
import React from "react";

function EventCard({ event }) {
  return (
    <Link href={event.link || `/events/${event.id}/${event.link}`}>
      <a target={event.external ? "_blank" : undefined}>
        <article className="w-[360px] cursor-pointer hover:scale-105 transition-all">
          <div className="bg-[#010426] py-28 px-8 rounded-3xl h-[300px] w-[360px]">
            <Image
              src={require(`/public/logos/${event.logo}`)}
              alt={`${event.name} Banner Logo`}
              layout="responsive"
              width={296}
              height={40}
            />
            {/* Not sure that we need this section on a logo / banner */}
            <div className={`grid grid-cols-3 mt-1 border border-[#66fec9]`}>
              <div
                className={`col-span-2 text-[#66fec9] font-medium px-1 text-[10px] flex items-center justify-center uppercase`}
              >
                {event.slogan.title}
              </div>
              <div
                className={`text-black bg-[#66fec9] px-1 text-[10px] flex items-center justify-center uppercase`}
              >
                {event.duration}
              </div>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default EventCard;
