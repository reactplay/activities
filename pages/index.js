import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Image from 'next/image';
import {
	Hero,
	About,
	Judges,
	Partners,
	CTA,
	FAQs,
} from '../components/Hack-R-Play';

import DottedAndFilledTriangle from '@/public/Hack-R-Play/DottedAndFilledTriangle.svg';
import Flower from '@/public/Hack-R-Play/Flower.svg';

const PAGE_SIZE = 12;

const HomePage = () => {
	const router = useRouter();

	useEffect(() => {
		router.push('/hackrplay/2022/home');
	}, []);

	const faqs = [
		{
			question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendumest ultricies integer quis. Iaculis urna id volutpat lacus laoreet.',
		},
		{
			question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendumest ultricies integer quis. Iaculis urna id volutpat lacus laoreet.',
		},
		{
			question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendumest ultricies integer quis. Iaculis urna id volutpat lacus laoreet.',
		},
	];

	const judges = [
		{
			name: 'lorem ipsum dolor sit',
			title: 'lorem ipsum',
		},
		{
			name: 'lorem ipsum dolor sit',
			title: 'lorem ipsum',
		},
		{
			name: 'lorem ipsum dolor sit',
			title: 'lorem ipsum',
		},
	];

	return (
		<Layout title='ReactPlay presents HACK-R-PLAY'>
			<div className='absolute md:left-9 -top-10 left-5 z-0 md:w-32 md:h-32 w-24 h-24'>
				<Image
					src={DottedAndFilledTriangle}
					alt='Dotted And Filled Triangle'
					layout='responsive'
				/>
			</div>
			<div className='absolute md:-right-60 md:-top-48 -right-24 -top-14 z-0 md:w-2/5 md:h-2/5 w-1/2 h-1/2'>
				<Image src={Flower} alt='Flower' layout='responsive' />
			</div>

			<Hero />
			<About />
			<Judges judges={judges} />
			<Partners />
			<CTA
				title='Be a part of the best react event'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.'
			/>
			<FAQs faqs={faqs} />
		</Layout>
	);
};

export default HomePage;
