import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import styles from '@/styles/Home.module.css';
import { get_idea } from '@/services/graphql/ideas';
import { Typography } from '@mui/material';
import { FiPenTool, FiDownload } from 'react-icons/fi';
import { PrimaryButton, SecondaryOutlinedButton } from '@/components/Buttons';
import InProgress from '/public/Idea-List/inProgress.svg';
import Complted from '/public/Idea-List/completed.svg';
import NotStarted from '/public/Idea-List/notStart.svg';
import { get_latest_status } from '@/services/graphql/status';
import { unescape_new_line } from '@/services/util/string';

const get_status_style = (status) => {
	const final_status = status || { label: 'Not Started' };
	switch (final_status.label) {
		case 'Submitted':
			return {
				image: Complted,
				color: '#68FDC6',
			};
		case 'In Progress':
			return {
				image: InProgress,
				color: '#FDC668',
			};
		case 'Not Started':
		default:
			return {
				image: NotStarted,
				color: '#FD6868',
			};
	}
};

export default function IdeaDetails(props) {
	const router = useRouter();
	const { id } = router.query;
	const [idea, setIdea] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (id) {
			get_idea(id).then((res) => {
				res.status = get_latest_status(res);
				res.description = unescape_new_line(res.description);
				setIdea(res);
			});
		}
	}, [id]);

	const onEditClicked = (id) => {
		router.push(`../registration/${id}`);
	};
	const onSubmitClicked = (id) => {
		router.push(`submit/${id}`);
	};

	const onCancelClicked = (id) => {
		router.push(`/`);
	};

	return (
		<LayoutWrapper title='HACK-R-PLAY | Idea Registration'>
			{idea ? (
				<div className='w-full h-full flex flex-col justify-center items-center'>
					<div className='w-full h-full max-w-6xl flex shadow-md rounded mb-6  z-[9]'>
						<div className='flex flex-col flex-1'>
							<div className='h-14 p-16 flex  items-center justify-center text-white'>
								<h2
									className={`font-primary text-5xl uppercase text-white tracking-wide ${styles['page-title']}`}>
									Idea
								</h2>
							</div>
							<div className='flex flex-col flex-1 text-white border-2 border-sky-500 rounded-md p-8'>
								<div className='flex-1 px-4 py-8font-primary text-3xl text-[#00F2FE]'>
									<h2>{idea.title}</h2>
								</div>
								<div className='flex items-center p-4'>
									<Image
										src={
											get_status_style(idea.status).image
										}
										alt={`status `}
									/>

									<Typography
										className='px-4'
										variant={'body2'}
										color={
											get_status_style(idea.status).color
										}>
										{idea.status
											? idea.status.label
											: 'NOT STARTED'}
									</Typography>
								</div>

								<div className='flex-1 px-4 py-8 text-[#ffffff99] whitespace-pre-wrap	'>
									{idea.description}
								</div>
								<div className='flex'>
									<div className='flex-1 py-8 flex'>
										<div className='flex flex-col px-8'>
											<div className='flex justify-center items-center'>
												<Image
													className='rounded-full'
													height={80}
													width={80}
													layout={'fixed'}
													src={
														idea.idea_owner_map
															.avatarUrl
													}
													alt={'user avatar'}
													aria-label='user avatar'
												/>
											</div>
											<div className='flex justify-center items-center text-2xl'>
												{
													idea.idea_owner_map
														.displayName
												}
											</div>
											<div className='flex justify-center items-center text-xs text-[#00F2FE]'>
												Author
											</div>
										</div>
										{idea.idea_members_map ? (
											<div className='flex flex-col'>
												<div className='rounded-[100px] flex  justify-center items-center'>
													<Image
														className='rounded-full'
														height={80}
														width={80}
														layout={'fixed'}
														src={
															idea
																.idea_members_map
																.user_id_map
																.avatarUrl
														}
														alt={'user avatar'}
														aria-label='user avatar'
													/>
												</div>
												<div className='flex justify-center items-center text-2xl'>
													{
														idea.idea_members_map
															.user_id_map
															.displayName
													}
												</div>
												<div className='flex justify-center items-center text-xs'>
													Member
												</div>
											</div>
										) : null}
									</div>
								</div>
								<div>
									<hr />
									<div className='py-4 h-full flex '>
										<div className='p-2 flex-1'>
											{!idea.status ||
											idea.status.id !==
												process.env
													.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID ? (
												<PrimaryButton
													handleOnClick={() =>
														onSubmitClicked(idea.id)
													}>
													{`Submit`}
													<FiDownload
														className='ml-2 my-auto'
														size={20}
													/>
												</PrimaryButton>
											) : null}
										</div>

										<div className='p-2'>
											<div>
												<SecondaryOutlinedButton
													handleOnClick={() =>
														onCancelClicked()
													}>
													Cancel
												</SecondaryOutlinedButton>
											</div>
										</div>
										{!idea.status ||
										idea.status.id !==
											process.env
												.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID ? (
											<div className='p-2'>
												<PrimaryButton
													handleOnClick={() =>
														onEditClicked(idea.id)
													}>
													{`Edit`}
													<FiPenTool
														className='ml-2 my-auto'
														size={20}
													/>
												</PrimaryButton>
											</div>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</LayoutWrapper>
	);
}
