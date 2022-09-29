import styles from '../../styles/idea.module.css';
import Image from 'next/image';
import { Grid, Card, Typography } from '@mui/material';
import InProgress from '/public/Idea-List/inProgress.svg';
import Complted from '/public/Idea-List/completed.svg';
import NotStarted from '/public/Idea-List/notStart.svg';
import { FiThumbsUp } from 'react-icons/fi';
import { BiComment } from 'react-icons/bi';

const IdeaCard = ({ data, onClick }) => {
	const get_status_style = (status) => {
		const final_status = status || { label: 'Idea Submitted' };
		switch (final_status.label) {
			case 'Completed':
				return {
					image: Complted,
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
	return (
		<Card
			className={styles.card}
			variant='outlined'
			onClick={() => onClick()}>
			<Grid
				container
				columns={{ xs: 1 }}
				className={'m-0 pt-12 px-8 h-72'}>
				<Grid item xs={1} className={''}>
					<Typography
						variant='h5'
						className={`${styles.title}`}
						color='#00F2FE'>
						{data.title}
					</Typography>
				</Grid>
				<div className='mb-2'>
					<Grid
						item
						xs={1}
						className='flex flex-row gap-2 items-center'>
						<Image
							src={get_status_style(data?.status).image}
							alt={`status ${data.status?.label}`}
						/>

						<Typography
							variant={'body2'}
							color={get_status_style(data?.status).color}
							className={styles.cardStatus}>
							{data?.status?.label.toUpperCase() ||
								'IDEA SUBMITTED'}
						</Typography>
					</Grid>
				</div>
				<Grid item xs={1} className=''>
					<div
						className={`${styles.cardDescription} whitespace-pre-wrap `}>
						{data.description}
					</div>
				</Grid>
				<div className='flex py-2 pt-8 w-full'>
					<div
						className='flex-1'
						style={{
							position: 'relative',
							top: 0,
							left: 0,
						}}>
						{data.avatarUrl.map((value, index) => {
							return (
								<div
									key={index}
									className={
										!data.avatarUrl.includes(undefined) &&
										index === 1
											? styles.cardParent
											: null
									}>
									{value && (
										<Image
											key={value + index.toString()}
											className={styles.cardAvatar}
											height={50}
											width={50}
											layout={'fixed'}
											src={data.avatarUrl[index]}
											alt={'user avatar'}
											aria-label='user avatar'
										/>
									)}
								</div>
							);
						})}
					</div>
					<div className='flex justify-center items-center text-[#ffffff99]'>
						<div className='flex px-4 justify-center items-center'>
							<div className='pr-2'>
								{' '}
								<FiThumbsUp />
							</div>
							{data.like_count}
						</div>
						<div className='px-4 flex justify-center items-center'>
							<div className='pr-2'>
								<BiComment />
							</div>
							{data.comment_count}
						</div>
					</div>
				</div>
			</Grid>
		</Card>
	);
};
export default IdeaCard;
