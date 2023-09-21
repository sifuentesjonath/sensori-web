import storage from '@redux/customStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userPersistConfig = {
	key: 'user',
	storage: storage,
	whitelist: ['Email', 'Logged', 'Rol'],
};
export interface AuthState {
	Email: string;
	Logged: boolean;
	Rol: 'superAdmin' | 'admin' | 'user' | null;
}

const initialState: AuthState = {
	Email: '',
	Logged: false,
	Rol: null,
};

const userSlice = createSlice({
	name: '@@UserActions',
	initialState,
	reducers: {
		setUserState: (state, action: PayloadAction<AuthState>) => {
			state.Email = action.payload.Email;
			state.Logged = action.payload.Logged;
			state.Rol = action.payload.Rol;
		},
		resetUserState: (state) => {
			state.Email = '';
			state.Logged = false;
			state.Rol = null;
		},
	},
});

export default userSlice.reducer;
