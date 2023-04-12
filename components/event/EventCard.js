import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EventCard({ event }) {
  return (
    <Link href={event.link}>
      <article className="w-[360px] cursor-pointer hover:scale-105 transition-all">
        <div className="bg-[#010426] py-28 px-8 rounded-3xl h-[300px] w-[360px]">
          <Image
            src={require(`/public/${event.image}.png`)}
            alt={`${event.name} Banner Logo`}
            layout="responsive"
          />
        </div>
        <p className="pt-6 text-[#010326] text-2xl font-semibold">
          {event.name}
        </p>
        <p className="text-[#010326] text-base pt-2 truncate hover:text-clip opacity-50">
          {event.description}
        </p>
      </article>
    </Link>
  );
}

export default EventCard