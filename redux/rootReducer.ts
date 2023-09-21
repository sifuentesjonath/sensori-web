import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import userPatient, {
	userPatientPersistConfig,
} from '@redux/slices/userPatients/userPatients.slice';

import modal, { modalPersistConfig } from '@redux/slices/modal/modal.slice';
import userReducer, { userPersistConfig } from '@redux/slices/user/user.slice';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
	user: persistReducer(userPersistConfig, userReducer),
	userPatient,
	modal,
});
