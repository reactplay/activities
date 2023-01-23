import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Banner from '@/components/Banner';

export default function Home() {
	const router = useRouter();
	// useEffect(() => {
	// 	router.push('/hackrplay/2022/home');
	// }, []);

	return <Layout title='ReactPlay presents HACK-R-PLAY'>
<Banner/>
	</Layout>;
}
