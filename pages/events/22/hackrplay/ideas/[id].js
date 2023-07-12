import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LayoutWrapper from '@/components/LayoutWrapper';
import styles from '@/styles/Home.module.css';
import { get_idea } from '@/services/graphql/ideas';
import { Typography } from '@mui/material';
import { FiPenTool, FiDownload, FiThumbsUp } from 'react-icons/fi';
import { PrimaryButton, SecondaryOutlinedButton } from '@/components/Buttons';
import InProgress from '/public/Idea-List/inProgress.svg';
import Completed from '/public/Idea-List/completed.svg';
import NotStarted from '/public/Idea-List/notStart.svg';
import {
	get_idea_submission_info,
	get_latest_status,
} from '@/services/graphql/status';
import { unescape_new_line } from '@/services/util/string';
import { FaBloggerB, FaCommentDots, FaReact, FaGitAlt } from 'react-icons/fa';
import Link from 'next/link';
import StatusBar from '@/components/status-bar/StatusBar';
import Interaction from '@/components/interactions';
import { Config } from '@/services/metadata/hackrplay';

const StatusMap = {
	['Idea Submitted']: {
		image: NotStarted,
		color: '#FD6868',
	},
	['In Progress']: {
		image: InProgress,
		color: '#FDC668',
	},
	Completed: {
		image: Completed,
		color: '#68FDC6',
	},
};
const get_status_style = (status) => {
	const final_status = status || { label: 'Idea Submitted' };
	switch (final_status.label) {
		case 'Completed':
			return {
				image: Completed,
				color: '#68FDC6',
			};
		case 'In Progress':
			return {
				image: InProgress,
				color: '#FDC668',
			};
		case 'Idea Submitted':
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
			loadIdeaDetails(id);
		}
	}, [id]);

	const loadIdeaDetails = (id) => {
		get_idea(id).then((res) => {
			const all_statuses = [];
			console.log(res.idea_idea_status_map);
			res.idea_idea_status_map.forEach((st) => {
				all_statuses.push({
					...st.idea_status_status_map,
					...{ date: st.date },
				});
			});
			res.status_history = all_statuses;
			res.status = get_latest_status(res);
			res.description = unescape_new_line(res.description);

			if (
				res.status &&
				res.status.id ===
					process.env.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID
			) {
				get_idea_submission_info(res.id).then((sub) => {
					const f_obj = { ...res, ...sub[0] };
					console.log(f_obj);
					setIdea(f_obj);
				});
			} else {
				setIdea(res);
			}
		});
	};

	const onEditClicked = (id) => {
		router.push(`../registration/${id}`);
	};
	const onSubmitClicked = (id) => {
		router.push(`submit/${id}`);
	};

	const onCancelClicked = () => {
		router.push(`../ideas`);
	};

	const refreshIdea = () => {
		loadIdeaDetails(id);
	};

	const onLikeClicked = () => {};

	return (
		<LayoutWrapper title='HACK-R-PLAY | Idea Registration' metainfo={Config}>
			{idea ? (
				<div className='w-full h-full flex flex-col justify-center items-center  p-14'>
					<div className='w-fit h-full max-w-6xl flex shadow-md rounded mb-6  z-[9] px-5 lg:w-full'>
						<div className='flex flex-col flex-1'>
							<div className='h-14 p-16 flex  items-center justify-center text-white'>
								<h2
									className={`font-primary text-5xl uppercase text-white tracking-wide ${styles['page-title']}`}>
									Idea
								</h2>
							</div>
							<div className='flex flex-col p-4 flex-1 text-white border-2 border-[#ffffff29] rounded-md pt-4'>
								<div className='flex-1 px-4 py-8font-primary border-b border-sky-500 py-4'>
									<div className='flex-1 text-[#00F2FE]  text-3xl'>
										<h2>{idea.title}</h2>
									</div>
									<div className='flex py-2 text-sm text-brand-muted'>
										<div className='pr-4 block md:hidden'>
											{get_latest_status(idea).label}
										</div>
										<div className='pr-4'>
											{
												idea.idea_like_map_aggregate
													.aggregate.count
											}{' '}
											likes
										</div>
										<div>
											{
												idea.idea_comments_map_aggregate
													.aggregate.count
											}{' '}
											Comments
										</div>
									</div>
								</div>

								<div className='flex flex-1 px-4 py-8 text-[#ffffff99] whitespace-pre-wrap	'>
									<div className='flex-1'>
										{idea.description}
									</div>
									<div className='px-4 hidden md:block'>
										<StatusBar
											value={idea.status_history}
											map={StatusMap}
										/>
									</div>
								</div>
								<div className='flex'>
									<div className='py-8 flex'>
										<div className='flex flex-col px-8'>
											<div className='flex justify-center items-center'>
												<Image
													className='rounded-full'
													height={40}
													width={40}
													layout={'fixed'}
													src={
														idea.idea_owner_map
															.avatarUrl
													}
													alt={'user avatar'}
													aria-label='user avatar'
												/>
											</div>
											<div className='flex justify-center items-center text-1xl'>
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
														height={40}
														width={40}
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
												<div className='flex justify-center items-center text-1xl'>
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
									<div className='flex-1 px-8'>
										{idea.status &&
										idea.status.id ===
											process.env
												.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID ? (
											<div>
												{/* FaBloggerB, FaCommentDots, FaReact, FaGitAlt */}
												<div className='flex items-center'>
													<span className='py-1 px-4'>
														<FaReact />
													</span>
													<Link
														href={
															idea.application ||
															''
														}>
														<a
															target='blank'
															className='mt-2 mb-2 font-medium font-body text-gray-400 text-center underline underline-offset-2 hover:text-gray-200 text-sm'>
															{idea.application ||
																'Not Found'}
														</a>
													</Link>
												</div>
												<div className='flex items-center'>
													<span className='py-1 px-4'>
														<FaGitAlt />
													</span>
													<Link
														href={
															idea.repository_url ||
															''
														}>
														<a
															target='blank'
															className='mt-2 mb-2 font-medium font-body text-gray-400 text-center underline underline-offset-2 hover:text-gray-200 text-sm'>
															{idea.repository_url ||
																'Not Found'}
														</a>
													</Link>
												</div>
												<div className='flex items-center'>
													<span className='py-1 px-4'>
														<FaBloggerB />
													</span>
													<Link
														href={
															idea.blog_url || ''
														}>
														<a
															target='blank'
															className='mt-2 mb-2 font-medium font-body text-gray-400 text-center underline underline-offset-2 hover:text-gray-200 text-sm'>
															{idea.blog_url ||
																'Not Found'}
														</a>
													</Link>
												</div>
												<div className='flex items-center'>
													<span className='py-1 px-4'>
														<FaCommentDots />
													</span>
													<span className='whitespace-pre-wrap'>
														{unescape_new_line(
															idea.comment
														) || 'Not Found'}
													</span>
												</div>
											</div>
										) : null}
									</div>
								</div>
								<hr />
								<div>
									<div className='py-4 h-full flex '>
										<div className='flex-1 flex'>
											<div className='p-2 '>
												{/* Follwoing code will be reintroduced for upcoming events. So not removing now */}
												{/* {!idea.status ||
												idea.status.id !==
													process.env
														.NEXT_PUBLIC_HACKATHON_SUBMIT_STATUS_ID ? (
													<PrimaryButton
														handleOnClick={() =>
															onSubmitClicked(
																idea.id
															)
														}>
														{`Submit`}
														<FiDownload
															className='ml-2 my-auto'
															size={20}
														/>
													</PrimaryButton>
												) : null} */}
											</div>
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
												{/* Follwoing code will be reintroduced for upcoming events. So not removing now */}
												{/* <SecondaryOutlinedButton
													handleOnClick={() =>
														onEditClicked(idea.id)
													}>
													{`Edit`}
													<FiPenTool
														className='ml-2 my-auto'
														size={20}
													/>
												</SecondaryOutlinedButton> */}
											</div>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-fit h-full max-w-6xl flex shadow-md rounded mb-6  z-[9] px-5 sm:w-full'>
						<Interaction
							data={idea}
							doRefresh={() => refreshIdea()}
						/>
					</div>
				</div>
			) : null}
		</LayoutWrapper>
	);
}
