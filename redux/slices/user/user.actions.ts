import { createAction } from '@reduxjs/toolkit';
import { AuthState } from './user.slice';

export const setUserState = createAction<AuthState>(
	'@@UserActions/setUserState'
);
export const resetUserState = createAction<AuthState>(
	'@@UserActions/resetUserState'
);
