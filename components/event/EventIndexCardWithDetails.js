import Image from 'next/image'
import Link from 'next/link'

export default function EventIndexCardWithDetails({event}) {
  return (
    <Link href={`/events/${event.id}/${event.name}`}>
      <article className="w-[360px] cursor-pointer hover:scale-105 transition-all">
        <div className="bg-[#010426] py-12 px-8 rounded-3xl w-[360px]">
          <Image
            src={require(`/public/logos/${event.logo}`)}
            alt={`${event.name} Banner Logo`}
            layout="responsive"
            width={296}
            height={40}
          />
          {/* Cleanup: Later remove if not needed */}
          <div className={`grid grid-cols-3 mt-1 border border-[#66fec9]`}>
            <div className={`col-span-2 text-[#66fec9] font-medium px-1 text-[10px] flex items-center justify-center uppercase`}>
            {event.slogan.title}
            </div>
            <div className={`text-black bg-[#66fec9] px-1 text-[10px] flex items-center justify-center uppercase`}>
              {event.duration}
            </div>
          </div>
          
          <p className='text-white pt-4'>{event.description}</p>
          
        </div>
      </article>
    </Link>
  )
}
