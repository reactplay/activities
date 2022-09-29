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
						<li key={oi} className={`${styles['tl-item']}`}>
							<div
								className={`${styles['item-title']} ${
									current_value
										? 'text-white'
										: 'text-grey-200'
								}`}>
								{o}
							</div>
							<div
								className={`text-brand-muted  ${styles['item-detail']} `}>
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
