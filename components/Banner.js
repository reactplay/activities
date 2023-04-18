import Image from "next/image";
import Link from "next/link";

// icons
import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";

// image
import HeroCoders from "@/public/twoplaysamonth/HeroCoders.svg";
import TwoPlaysAMonthGen from "@/public/2plays-a-month/twoplaysamonthgen.png";

const Banner = ({ events }) => {
  const currentEvent = events.filter((event) => event.isCurrent);
  console.log(currentEvent.link);

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
        <section className="bg-slate-900">
          <div className="flex max-w-7xl px-4 mx-auto py-20 justify-between">
            {/* primary section */}
            <div className="md:w-1/2 text-gray-200">
              <div className="w-72">
                <Image src={TwoPlaysAMonthGen} alt="TwoPlaysAMonth Logo" />
              </div>
              <h3 className="text-5xl font-black tracking-wide leading-snug font-sans py-8">
                Learning is a journey rather than a destination.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                distinctio consequatur, aperiam, quidem eum vitae architecto
                asperiores temporibus voluptatem odio excepturi corporis,
                assumenda doloremque quisquam?
              </p>
              <a
                href="#events"
                className="inline-flex items-center gap-2 my-8 px-6 rounded-full bg-neutral-100 text-sky-900 py-3"
              >
                Explore{" "}
                <span className="inline-block text-base text-cyan-400">
                  <HiArrowNarrowDown />
                </span>
              </a>
            </div>
            {/* image section*/}
            <div className="hidden md:block h-fit">
              <Image src={HeroCoders} width={350} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Banner;
