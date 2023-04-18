import Image from 'next/image'
import Link from 'next/link'

export default function EventIndexCardWithDetails({event}) {
  return (
    <Link href={event.link}>
      <article className="w-[360px] cursor-pointer hover:scale-105 transition-all">
        <div className="bg-[#010426] py-12 px-8 rounded-3xl min-h-[300px] w-[360px]">
          <Image
            src={require(`/public/${event.image}.png`)}
            alt={`${event.name} Banner Logo`}
            layout="responsive"
          />
          <div className="grid grid-cols-3 mt-1 border border-[#66fec9]">
            <div className="col-span-2 text-[#66fec9] font-bold px-1 text-[10px] flex items-center justify-center uppercase">
              100% React event in the universe
            </div>
            <div className="text-black bg-[#66fec9] px-1 text-[12px] flex items-center justify-center uppercase antialiased font-bold">
              OCT 1-22, 2022
            </div>
          </div>
          
          <p className='text-white pt-4'>{event.description}</p>
          
        </div>
      </article>
    </Link>
  )
}
