import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { ToolBarButton } from './Buttons';

export default function Pagination({ total, pagesize, onChange }) {
	const [current, setCurrent] = useState(1);
	const [pageCount, setPageCount] = useState(0);

	useEffect(() => {
		setPageCount(Math.ceil(total / pagesize) || 1);
		setCurrent(1);
	}, [total]);
	const onButtonClicked = (index) => {
		setCurrent(index);
		invokeChange(index);
	};
	const invokeChange = (index) => {
		if (onChange) {
			onChange(index);
		}
	};

	return (
		<div className='flex justify-center items-center'>
			<ButtonGroup variant='text' aria-label='text button group'>
				<ToolBarButton
					handleOnClick={() => onButtonClicked(current - 1)}
					disabled={current === 1}>
					<FiChevronsLeft />
				</ToolBarButton>
				<div className='text-white'>
					Page: {current} / {pageCount}
				</div>
				<ToolBarButton
					handleOnClick={() => onButtonClicked(current + 1)}
					disabled={current === pageCount}>
					<FiChevronsRight />
				</ToolBarButton>
			</ButtonGroup>
		</div>
	);
}
