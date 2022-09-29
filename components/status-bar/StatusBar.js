import { TextField, FormControl, Autocomplete, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import * as _ from 'lodash';
import { useUserData } from '@nhost/nextjs';
import Image from 'next/image';
import { Typography } from '@mui/material';
import styles from '@/styles/idea.module.css';
import moment from 'moment';

const StatusBar = ({ map, value }) => {
	return (
		<div className={`${styles['history-tl-container']}`}>
			<ul className={`${styles['tl']}`}>
				{Object.keys(map).map((o, oi) => {
					const val = map[o];
					const current_value = value.filter((v) => v.label === o)[0];

					return (
						<li className={`${styles['tl-item']}`}>
							<div
								className={`${styles['item-title']} ${
									current_value
										? 'text-white'
										: 'text-grey-200'
								}`}>
								{o}
							</div>
							<div
								className={`${styles['item-detail']} ${
									current_value
										? 'text-white'
										: 'text-grey-200'
								}`}>
								{' '}
								{current_value
									? moment(current_value.date).format(
											'DD-MM-yyyy'
									  )
									: 'Pending'}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default StatusBar;

{
	/*     
		// <div className='pt-10 px-10 w-full'>
		// 	<ol className={styles['status-list']}>
		// 		{Object.keys(map).map((o, oi) => {
		// 			const val = map[o];
		// 			return (
		// 				<li
		// 					key={oi}
		// 					className={`${
		// 						o.toLowerCase() === current.toLowerCase()
		// 							? styles['active']
		// 							: ''
		// 					} 
    //           ${styles['status-list-item']}
    //           `}>
		// 					<span className={styles['status-list-item-inner']}>
		// 						<Image
		// 							src={val.image}
		// 							alt={`status `}
		// 							className={`${
		// 								o.toLowerCase() !==
		// 								current.toLowerCase()
		// 									? 'grayscale'
		// 									: ''
		// 							}`}
		// 						/>

		// 						<Typography
		// 							className='px-4'
		// 							variant={'body2'}
		// 							color={
		// 								o.toLowerCase() ===
		// 								current.toLowerCase()
		// 									? val.color
		// 									: '#ffffff99'
		// 							}>
		// 							{val.label}
		// 						</Typography>
		// 					</span>
		// 				</li>
		// 			);
		// 		})}
		// 	</ol>
		// </div> */
}
