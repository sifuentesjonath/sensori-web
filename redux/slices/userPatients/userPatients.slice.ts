import storage from '@redux/customStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const userPatientPersistConfig = {
	key: 'patient',
	storage: storage,
	whitelist: [
		'Name',
		'Email',
		'Phone',
		'Height',
		'Weight',
		'Sessions',
		'Suscription',
		'Location',
	],
};
export interface UserPatientState {
	Name: string;
	Email: string;
	Phone: string;
	Height: string;
	Weight: string;
	Sessions: number;
	Suscription: boolean;
	Location: string;
}

//TODO: Set how we will inicialize the patient state.
const initialState: UserPatientState = {
	Name: '',
	Email: '',
	Phone: '',
	Height: '',
	Weight: '',
	Sessions: 0,
	Suscription: false,
	Location: '',
};

const userPatientSlice = createSlice({
	name: '@@UserPatientActions',
	initialState,
	reducers: {
		setUserPatientState: (state, action: PayloadAction<UserPatientState>) => {
			state.Name = action.payload.Name;
			state.Email = action.payload.Email;
			state.Phone = action.payload.Phone;
			state.Height = action.payload.Height;
			state.Weight = action.payload.Weight;
			state.Sessions = action.payload.Sessions;
			state.Suscription = action.payload.Suscription;
			state.Location = action.payload.Location;
		},
		resetUserPatientState: (state) => {
			state = initialState;
		},
	},
});

export default userPatientSlice.reducer;
