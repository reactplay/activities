import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import BannerLogo from "../public/Hack-R-Play/BannerLogo.png";
import Banner from "@/components/Banner";
import PastInitialives from "@/components/PastInitialives";


export default function Home() {
	const router = useRouter();
	// useEffect(() => {
	// 	router.push('/hackrplay/2022/home');
	// }, []);
	const recentEvent={
		name: '#2PlaysAMonth',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, debitis?'
	}
	const pastEvents = [
		{
			name: "Hack-R-Play",
			description: 'ReactPlay brings you the opportunity to take part in the Hackathon and learn from it. Showcase your mindblowing ideas, build projects, and create content - there are also chances to win exciting prizes.',
			image: BannerLogo,
			link: `/hackrplay/2022/home`
		},
		
	];
	const EventLayout = () => {
		return (
			<div>
				<Banner recentEvent={recentEvent}/>
				<PastInitialives pastEvents={pastEvents}/>
			</div>
		);
	};
	

	return (
		<Layout title="ReactPlay presents HACK-R-PLAY">
			<EventLayout/>
		</Layout>
	);
}
