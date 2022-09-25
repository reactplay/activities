import Layout from '@/components/Layout';
import Flower from '../public/Hack-R-Play/Flower.svg';
import HeroLines from '../public/Hack-R-Play/HeroLines.svg';
import DottedAndFilledTriangle from '../public/Hack-R-Play/DottedAndFilledTriangle.svg';
import Image from 'next/image';

const links = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Submissions',
		href: '/hackrplay/2022/ideas',
	},
];

export default function LayoutWrapper({ title, description, children }) {
	return (
		<Layout links={links} title={title} description={description}>
			<div className='absolute left-9 -top-10 opacity-50'>
				<Image
					src={DottedAndFilledTriangle}
					alt='Dotted And Filled Triangle'
					width={220}
					height={220}
				/>
			</div>
			<div className='absolute -right-60 -top-48'>
				<Image src={Flower} alt='Flower' width={500} height={500} />
			</div>
			<div className='absolute left-44 -top-5 z-0'>
				<Image
					src={HeroLines}
					alt='Hero Lines'
					width={750}
					height={750}
				/>
			</div>
			<div className='z-[9]'>{children} </div>
		</Layout>
	);
}
