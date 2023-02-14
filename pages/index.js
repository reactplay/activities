import Layout from "@/components/Layout";
import HackerPlayLogo from "../public/hackrplay/BannerLogo.png";
import twoPlaysaMonthLogo from "../public/twoplaysamonth/NavbarLogo.png"
import Banner from "@/components/Banner";
import { Config } from "../services/metadata/home";
import Link from "next/link";
import Image from "next/image";
import MediaLayout from "@/components/MediaLayout";

export default function Home() {
	const pastEvents = [
		{
			name: "Hack-R-Play",
			description:
				"ReactPlay brings you the opportunity to take part in the Hackathon and learn from it. Showcase your mindblowing ideas, build projects, and create content - there are also chances to win exciting prizes.",
			image: HackerPlayLogo,
			link: `/events/23/hackrplay/2022/home`,
		},
		{
			name: "2PlaysaMonth",
			description:
				"ReactPlay brings you an opportunity to participate in the month-long drive to learn and contribute to Open Source. Join the #2PlaysAMonth and build two projects(plays) in the month of February. You will learn from expert code reviews while contributing to Open Source - you may also win some exciting prizes..",
			image: twoPlaysaMonthLogo,
			link: `/events/23/twoplaysamonth`,
		},
		
	];

	const videoLinks=[
		{
			src: 'https://www.youtube.com/embed/1qfDkmtuWqg'
		},
		{
			src: 'https://www.youtube.com/embed/b0eas9xxD-E'
		},
		{
			src: 'https://www.youtube.com/embed/w0nd4ASTDdg'
		},
	]
	const twitterLinks=[
		{
			name: 'twitterSpaces'
		},
		{
			name: 'twitterSpaces'
		},
		{
			name: 'twitterSpaces'
		},
	]
	const PastInitiatives = ({ pastEvents }) => {
		return (
			<section id='events' className="text-white flex items-center justify-center my-28 md:w-[80%] w-full mx-auto px-4">
				{/* wrapper */}
				<div className="flex flex-col w-full">
					<h1 className="md:text-2xl  text-start mb-16  uppercase font-primary">Events</h1>
					<div className="flex flex-col md:flex-row w-full  mx-auto gap-6  px-3 md:px-0 flex-wrap items-center justify-center">
						{/* past events */}
						{pastEvents.map((event, i) => (
							<Link href={event.link}>
								<article
									key={i}
									className="w-full rounded text-sm text-gray-300 min-h-52 flex flex-col gap-2 bg-cyan-800 max-w-[350px] px-6 py-8 cursor-pointer hover:scale-105 transition-all"
								>
									<Image src={event.image} alt="Banner Logo" layout="responsive" />
									<p>{event.description}</p>
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
				<Banner />
				<PastInitiatives pastEvents={pastEvents} />
				<MediaLayout videoLinks={videoLinks} title='ReactPlay Live' id='live'/>
				<MediaLayout twitterLinks={twitterLinks} title='ReactPlay Twitter Spaces' id='spaces'/>
			</div>
		);
	};

	return (
		<Layout title="The Hustle Home page" metainfo={Config} links={Config.links}>
			<EventLayout />
		</Layout>
	);
}
