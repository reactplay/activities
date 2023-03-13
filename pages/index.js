import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import { Config } from "@/services/metadata/home";
import MediaLayout from "@/components/MediaLayout";

export default function Home() {
	
	
	const PastInitiatives = ({ pastEvents }) => {
		return (
			<section id='events' className="text-white flex items-center justify-center my-28 md:w-[80%] w-full mx-auto px-4">
				{/* wrapper */}
				<div className="flex flex-col w-full">
					<h1 className="bg-clip-text text-transparent font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-[#43d9fe] to-[#1D1455] mb-8">Events</h1>
					<div className="flex flex-col md:flex-row w-full  mx-auto gap-10  px-3 md:px-0 flex-wrap items-center justify-center">
						{/* past events */}
						{pastEvents.map((event, i) => (
							<Link href={event.link}>
								<article
									key={i}
									className="w-full relative rounded text-sm h-60 flex flex-col gap-2  max-w-[350px] cursor-pointer hover:scale-105 transition-all before:content-[''] before:h-64 before:border-cyan-200 before:border-4  before:w-80 before:left-[-20px] before:bottom-[10px]  before:absolute before:z-0 inset-2"
								>
									<Image src={event.image} alt="Banner Logo" layout="responsive" fill objectFit="cover" objectPosition={'center'} height='1900' />
								</article>
							</Link>
						))}
					</div>
				</div>
			</section>
		);
	};
	const EventLayout = () => {
		return (
			<div className="w-full">
				<Banner bannerImg={Config.banner}/>
				<PastInitiatives pastEvents={Config.pastEvents} />
				<MediaLayout videoLinks={Config.videoLinks} title='ReactPlay Live' id='live'/>
				<MediaLayout twitterLinks={Config.twitterLinks} title='ReactPlay Twitter Spaces' id='spaces'/>
			</div>
		);
	};

	return (
		<Layout title="The Hustle Home page" metainfo={Config} links={Config.links}>
			<EventLayout />
		</Layout>
	);
}
