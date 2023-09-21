'use client';
import { Modal } from '@mui/material';
import { setModalState } from '@redux/slices/modal/modal.actions';
import { getModalState } from '@redux/slices/modal/modal.selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CustomModal = () => {
	const { Oppened, Component } = useSelector(getModalState);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(setModalState({ Name: '', Oppened: !Oppened, Component: <></> }));
	};

	return (
		<Modal
			open={Oppened}
			onClose={handleClose}
			children={Component ? Component : <></>}
		/>
	);
};

export default CustomModal;
