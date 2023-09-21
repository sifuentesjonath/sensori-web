import React, { Component } from 'react';
import { Button } from '@components/element/Button';
import CloseIcon from '@mui/icons-material/Close';
import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';
import { useDispatch, useSelector } from 'react-redux';
import { getModalState } from '@redux/slices/modal/modal.selectors';
import { setModalState } from '@redux/slices/modal/modal.actions';

const closeModalContainer: CSSObject = {
	minWidth: '0.5rem !important',
	minHeight: '1rem !important',
	position: 'absolute',
	background: 'initial',
	top: 12,
	right: 12,
	boxShadow: 'none',
	textAling: 'center',
	'&:hover,&:focus': {
		color: colorPalette.black,
		background: 'initial',
		'& .MuiButton-endIcon': {
			'& .MuiSvgIcon-root': {
				color: colorPalette.buttonRed,
			},
		},
	},
	'& .MuiButton-endIcon': {
		widht: '24px',
		margin: '0',
		'& .MuiSvgIcon-root': {
			width: '1.8rem',
		},
	},
};

const CloseModalButton = () => {
	const { Oppened } = useSelector(getModalState);
	const dispatch = useDispatch();

	const handleOnClick = () => {
		dispatch(setModalState({ Name: '', Oppened: !Oppened, Component: null }));
	};

	return (
		<Button
			type='button'
			variant='text'
			color='primary'
			sx={{ ...closeModalContainer }}
			endIcon={<CloseIcon />}
			// TODO: Create state redux to know when close the modal
			onClick={handleOnClick}
		>
			Close
		</Button>
	);
};

export default CloseModalButton;
