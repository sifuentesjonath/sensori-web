import { createAction } from '@reduxjs/toolkit';
import { UserPatientState } from './userPatients.slice';

export const setUserPatientState = createAction<UserPatientState>(
	'@@PatientActions/setPatientState'
);
export const resetUserPatientState = createAction<UserPatientState>(
	'@@PatientActions/resetPatientState'
);
