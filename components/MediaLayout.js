import Link from "next/link";
import Image from "next/image";
import ReactPlayLogo from "../public/ReactPlayLogo.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BiPlay } from "react-icons/bi";

const MediaLayout = ({ events, reactPlayLive, twitterSpaces, title, id }) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-center w-full mx-auto px-4 ${
        events && "bg-gray-50"
      } ${twitterSpaces && "bg-cyan-400/10"} ${
        reactPlayLive && "bg-slate-900"
      }`}
    >
      <h1
        className={`text-5xl py-16 font-sans ${reactPlayLive && "text-white"}`}
      >
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
          <Link key={event.id} href={event.link} scroll={false}>
            {event.link.includes("http") ? (
              <a
                className="w-full mb-10 rounded-lg text-sm text-gray-300 sm:h-[21rem] md:h-[20rem] flex flex-col gap-5 bg-cyan-800 max-w-[350px] px-6 py-8 cursor-pointer hover:scale-105 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <Image
                    src={require(`/public/${event.image}.png`)}
                    alt="Banner Logo"
                    layout="responsive"
                  />
                </div>
                <p className="">{event.description}</p>
              </a>
            ) : (
              <a className="w-full mb-10 rounded-lg text-sm text-gray-300 sm:h-[21rem] md:h-[20rem] flex flex-col gap-5 bg-cyan-800 max-w-[350px] px-6 py-8 cursor-pointer hover:scale-105 transition-all">
                <div>
                  <Image
                    src={require(`/public/${event.image}.png`)}
                    alt="Banner Logo"
                    layout="responsive"
                  />
                </div>
                <p className="">{event.description}</p>
              </a>
            )}
          </Link>
        ))}
        {reactPlayLive?.map((el) => (
          <iframe
            key={el.id}
            width="360"
            height="320"
            className="mb-10 rounded-lg"
            src={el.src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
        {twitterSpaces?.map((el) => (
          <div
            key={el.id}
            className="bg-slate-900 text-white w-[350px] p-4 rounded-lg"
          >
            {/* Host */}
            <div className="flex gap-2 items-center">
              {/* logo */}
              <Image alt="Logo of ReactPlay" src={ReactPlayLogo} />
              <span className="uppercase bg-slate-600 px-1 rounded text-sm">
                Host
              </span>
            </div>
            <h3 className="py-4 text-xl font-semibold">{el.title}</h3>
            <p className="pb-10">{el.date}</p>
            <div className="py-2 flex justify-center rounded-full bg-slate-400 hover:bg-slate-500 transition">
              <a
                className="text-gray-900 inline-flex items-center font-semibold text-base"
                href={el.link}
                target="_blank"
              >
                <BiPlay className="w-6 h-6" />
                Play Recording
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* link to rest of the media */}
      <button
        className={`font-sans font-black text-2xl py-16 decoration-cyan-400 underline transition-shadow ${
          reactPlayLive && "text-white"
        }`}
      >
        <a
          href={
            reactPlayLive
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
