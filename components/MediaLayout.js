import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

const MediaLayout = ({ videoLinks, twitterLinks, title, id }) => {
const TwitterSpaces=({el})=>{
	return(
		<article className="bg-slate-900 max-w-[300px] p-4 rounded cursor-pointer hover:scale-110 transition-all duration-150">
			<h2 className="text-xl font-primary">{el.title}</h2>
			<p className="text-gray-400 text-xs">{el.date}</p>
			<div className="flex  items-center justify-between">
			<a
              className="mt-3 inline-flex justify-center items-center font-body text-[#00F2FE] hover:underline  transition-all duration-150"
              href={`https://twitter.com/${el.host}`}
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter className="mr-1" />
              @{el.host}
            </a>
			<Image className="rounded-full" alt={el.host}
                  src={el.avatar}
                //   layout="responsive"
                  width='50'
                  height='50'
                  />
			</div>
		</article>
	)
}

	return (
		<section id={id} className="text-white flex items-center justify-center my-28 w-full md:w-[80%] mx-auto px-4">
			{/* wrapper */}
			<div className="flex flex-col w-full">
				<h1 className="bg-clip-text text-transparent font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-[#43d9fe] to-[#1D1455] mb-8">{title}</h1>
				<div className="flex flex-col md:flex-row w-full  mx-auto justify-center items-center gap-6  px-3 md:px-0 flex-wrap">
					{videoLinks &&
						videoLinks.map((el, i) => (
							<iframe
								key={i}
								width="360"
								height="315"
								src={el.src}
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						))}
					{twitterLinks && twitterLinks.map((el, i)=><a key={i}  target="_blank" href={el.link}><TwitterSpaces el={el}/></a>)}
				</div>
				<button className="mt-12 font-body text-cyan-400 hover:underline transition-shadow">
					<a href={videoLinks ? "https://www.youtube.com/playlist?list=PLIJrr73KDmRxqfDS58ZC3MoianOjcm__Y" : ""} target="_blank">
						{videoLinks ? "Show All Reactplay Lives" : "Show All Twitter Spaces"}
					</a>
				</button>
			</div>
		</section>
	);
};

export default MediaLayout;
