import Image from "next/image";

// icons
import { HiArrowNarrowRight } from "react-icons/hi";

// image
import HeroCoders from "@/public/twoplaysamonth/HeroCoders.svg";
import HeroBanner from "@/public/hustleHomePage/HeroBanner@2x.png";

const Banner = ({ events }) => {
  const currentEvent = events.filter((event) => event.isCurrent);

  return (
    <>
      {currentEvent.length ? (
        <section className="bg-slate-900">
          <div className="flex max-w-7xl px-4 mx-auto py-20 justify-between">
            {/* primary section */}
            <div className="md:w-1/2 text-gray-200">
              <div className="w-72">
                <Image
                  src={require(`/public/${currentEvent[0].image}.png`)}
                  alt="Logo"
                />
              </div>
              <h3 className="text-5xl font-black tracking-wide leading-snug font-sans py-8">
                {currentEvent[0].name}
              </h3>
              <p>{currentEvent[0].description}</p>
              <a
                href={currentEvent[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 my-8 px-6 rounded-full bg-neutral-100 text-sky-900 py-3"
              >
                Join{" "}
                <span className="inline-block text-base text-cyan-400">
                  <HiArrowNarrowRight />
                </span>
              </a>
            </div>
            {/* image section*/}
            <div className="hidden md:block">
              <Image src={HeroCoders} width={350} />
            </div>
          </div>
        </section>
      ) : (
        <div className="-z-0 inset-0 h-5/6">
          <Image src={HeroBanner} />
        </div>
      )}
    </>
  );
};

export default Banner;
