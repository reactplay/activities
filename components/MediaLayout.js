import Link from "next/link";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const MediaLayout = ({ events, videoLinks, twitterLinks, title, id }) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-center w-full mx-auto px-4 ${
        events && "bg-gray-50"
      } ${twitterLinks && "bg-cyan-400/10"} ${videoLinks && "bg-slate-900"}`}
    >
      <h1 className={`text-5xl py-16 font-sans ${videoLinks && "text-white"}`}>
        {!title.split(" ")[1] ? (
          <span className="font-black">{title}</span>
        ) : (
          <div>
            <span>{title.split(" ")[0]}</span>{" "}
            <span className="font-black underline decoration-cyan-400">
              {title.split(" ")[1]}
            </span>
          </div>
        )}
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-3 justify-center items-center gap-10 lg:gap-20">
        {events?.map((event) => (
          <Link key={event.id} href={event.link}>
            <article className="w-full mb-10 rounded text-sm text-gray-300 sm:h-[21rem] md:h-[20rem] flex flex-col gap-5 bg-cyan-800 max-w-[350px] px-6 py-8 cursor-pointer hover:scale-105 transition-all">
              <div>
                <Image
                  src={require(`/public/${event.image}.png`)}
                  alt="Banner Logo"
                  layout="responsive"
                />
              </div>
              <p className="">{event.description}</p>
            </article>
          </Link>
        ))}
        {videoLinks?.map((el) => (
          <iframe
            key={el.id}
            width="360"
            height="320"
            className="mb-10"
            src={el.src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
        {twitterLinks?.map((el) => (
          <div
            key={el.id}
            className="mb-10 rounded text-sm text-gray-300 sm:h-[21rem] md:h-[20rem] flex flex-col gap-5 bg-cyan-800 w-[350px] px-6 py-8 cursor-pointer hover:scale-105 transition-all"
          >
            {el.guestSpeaker}
          </div>
        ))}
      </div>

      {/* link to rest of the media */}
      <button
        className={`font-sans font-black text-2xl py-16 decoration-cyan-400 underline transition-shadow ${
          videoLinks && "text-white"
        }`}
      >
        <a
          href={
            videoLinks
              ? "https://www.youtube.com/playlist?list=PLIJrr73KDmRxqfDS58ZC3MoianOjcm__Y"
              : ""
          }
          target="_blank"
        >
          View all{" "}
          <span className="inline-block text-lg text-cyan-400">
            <HiArrowNarrowRight />
          </span>
        </a>
      </button>
    </section>
  );
};

export default MediaLayout;
