import { createAction } from '@reduxjs/toolkit';
import { ModalState } from './modal.slice';

export const setModalState = createAction<ModalState>(
	'@@ModalActions/setModalState'
);

export const resetModalState = createAction<ModalState>(
	'@@ModalActions/resetModalState'
);
