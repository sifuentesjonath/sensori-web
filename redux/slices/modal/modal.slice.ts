import storage from '@redux/customStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

export const modalPersistConfig = {
	key: 'modal',
	storage: storage,
	whitelist: ['Name', 'Oppened', 'Component'],
};
export interface ModalState {
	Name: string;
	Oppened: boolean;
	Component: JSX.Element;
}

const initialState: ModalState = {
	Name: '',
	Oppened: false,
	Component: null,
};

const modalSlice = createSlice({
	name: '@@ModalActions',
	initialState,
	reducers: {
		setModalState: (state, action: PayloadAction<ModalState>) => {
			state.Name = action.payload.Name;
			state.Oppened = action.payload.Oppened;
			state.Component = action.payload.Component;
		},
		resetModalState: (state) => {
			state.Name = '';
			state.Oppened = false;
			state.Component = null;
		},
	},
});

export default modalSlice.reducer;
