import React from "react";

const MediaLayout = ({ videoLinks, twitterLinks, title, id }) => {
	return (
		<section id={id} className="text-white flex items-center justify-center my-28 w-full md:w-[80%] mx-auto px-4">
			{/* wrapper */}
			<div className="flex flex-col w-full">
				<h1 className="md:text-2xl  text-start mb-16 uppercase font-primary">{title}</h1>
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
					{twitterLinks && twitterLinks.map((el, i)=><div className="w-80 h-28 bg-slate-600 rounded">{el.name}</div>)}
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
