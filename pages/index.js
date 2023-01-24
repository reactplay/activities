import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import BannerLogo from "../public/Hack-R-Play/BannerLogo.png";
import Banner from "@/components/CurrentInitiatives";
import PastInitialives from "@/components/PastInitialives";
import CurrentInitiatives from "@/components/CurrentInitiatives";


export default function Home() {
	const router = useRouter();

	const pastEvents = [
		{
			name: "Hack-R-Play",
			description: 'ReactPlay brings you the opportunity to take part in the Hackathon and learn from it. Showcase your mindblowing ideas, build projects, and create content - there are also chances to win exciting prizes.',
			image: BannerLogo,
			link: `/hackrplay/2022/home`,
			inProgess: false
		},
		
	];
	const EventLayout = () => {
		return (
			<div>
				<CurrentInitiatives />
				<PastInitialives pastEvents={pastEvents}/>
			</div>
		);
	};
	

	return (
		<Layout title="Initiatives by ReactPlay">
			<EventLayout/>
		</Layout>
	);
}
