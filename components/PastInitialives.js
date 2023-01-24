import Image from "next/image";
import Link from "next/link";
import React from "react";


const PastInitialives = ({pastEvents}) => {
	
	return (
		<section className="text-white flex items-center justify-center my-28 w-full ">
			{/* wrapper */}
			<div className="flex flex-col w-full">
				<h1 className="md:text-2xl  text-center mb-16 tracking-wild uppercase">Past Initiatives</h1>
				<div className="flex flex-col md:flex-row w-full md:w-4/5 mx-auto justify-center items-center gap-6  px-3 md:px-0">
					{/* article */}
					{pastEvents.map((event, i) => 
						<Link href={event.link}><article key={i} className="md:basis-1/3 w-full rounded text-sm text-gray-300 min-h-52 flex flex-col gap-2 bg-cyan-800 max-w-[350px] px-6 py-8 cursor-pointer">
						<Image src={event.image} alt="Banner Logo" layout="responsive" />
						<p>{event.description}</p>
					</article></Link>
					)}
				</div>
			</div>
		</section>
	);
};

export default PastInitialives;
