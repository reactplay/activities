import IdeaCard from '@/components/Ideas/Card';
import { useEffect, useState } from 'react';
import { idea_count, list_ideas } from '@/services/graphql/ideas';
import LayoutWrapper from '@/components/LayoutWrapper';
import { CTA } from '@/components/Hack-R-Play';
import gstyles from '@/styles/Home.module.css';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import IdeaFilters from '@/components/Hack-R-Play/IdeaFilter';
import { useAuthenticationStatus, useUserData } from '@nhost/nextjs';
import { PrimaryButton } from '@/components/Buttons';
import { get_latest_status } from '@/services/graphql/status';
import { unescape_new_line } from '@/services/util/string';

const PAGE_SIZE = 12;

const IdeaListingPage = () => {
	const { isAuthenticated } = useAuthenticationStatus();
	const [ideas, setIdeas] = useState([]);
	const [ideaCount, setIdeaCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const userData = useUserData();

	useEffect(() => {
		loadIdeas();
	}, []);

	const loadIdeas = (filter) => {
		setIsLoading(true);
		const promises = [];
		console.log(filter);
		promises.push(
			list_ideas(filter || { pagesize: PAGE_SIZE }, userData?.id).then(
				(res) => {
					if (res && res.length) {
						res.forEach((i) => {
							i.description = unescape_new_line(i.description);
						});
					}
					return res;
				}
			)
		);
		promises.push(idea_count(filter, userData?.id));

		Promise.all(promises)
			.then((res) => {
				processResultData(res[0]);
				setIdeaCount(res[1]);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const onCardClicked = (id) => {
		router.push(`ideas/${id}`);
	};

	const redirectToRegistration = () => {
		router.push('registration');
	};

	const processResultData = (result) => {
		let tempData = [];
		for (const idea of result) {
			let interObj = {
				title: idea.title,
				description: idea.description,
				id: idea.id,
				avatarUrl: [
					idea.idea_members_map?.user_id_map.avatarUrl,
					idea.idea_owner_map?.avatarUrl,
				],
				tinkers: [
					idea.idea_members_map?.user_id_map.displayName,
					idea.dea_owner_map?.displayName,
				],
				status: get_latest_status(idea),
			};

			tempData.push(interObj);
		}
		setIdeas(tempData);
	};

	return (
		<LayoutWrapper
			title='HACK-R-PLAY'
			description='A hackathon hosted by ReactPlay'>
			<div className='z-[9]'>
				<div className='h-14 p-16 flex flex-col items-center justify-center'>
					<h2
						className={`font-primary text-5xl uppercase text-white tracking-wide ${gstyles['page-title']}`}>
						SUBMISSIONS
					</h2>
					<div className='text-[#ffffff99] py-4'>
						{' '}
						Total: {ideaCount}
					</div>
				</div>
				<div className='flex px-2'>
					<IdeaFilters
						total={ideaCount}
						isAuthenticated={isAuthenticated}
						pagesize={PAGE_SIZE}
						onChange={(f) => loadIdeas(f)}></IdeaFilters>
				</div>

				<Grid
					container
					item
					xs={12}
					md={12}
					spacing={2}
					rowSpacing={2}
					columns={{ xs: 12, md: 12, lg: 12 }}
					className=' py-16 md:px-10'>
					{ideas.length === 0 ? (
						<div className='w-full py-10 flex flex-col justify-center items-center z-[9] text-brand-hightlight'>
							<div className='text-3xl '>
								No idea has been added yet.
							</div>
							<div className='text-grey py-4 flex justify-center items-center'>
								<div className='text-slate-300 pr-4'>
									To register first idea click
								</div>
								<PrimaryButton
								  className="umami--click--register"
									handleOnClick={() =>
										redirectToRegistration()
									}
									small={true}>
									Register Now
								</PrimaryButton>
							</div>
						</div>
					) : (
						<>
							{ideas.map((value, vi) => {
								return (
									<Grid
										key={vi}
										item
										container
										justifyContent={'center'}
										xs={12}
										sm={6}
										md={6}
										lg={4}
										xl={3}
										className='z-[9]'>
										<IdeaCard
											data={value}
											onClick={() =>
												onCardClicked(value.id)
											}
										/>
									</Grid>
								);
							})}
						</>
					)}
				</Grid>

				<CTA
					title='Be a part of the best react event'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.'
				/>
			</div>
		</LayoutWrapper>
	);
};

export default IdeaListingPage;
