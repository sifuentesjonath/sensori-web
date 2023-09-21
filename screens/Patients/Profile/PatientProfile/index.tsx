/**React */
import React from 'react';

/**Mui Material */
import { Box } from '@mui/material';

/**Components */
import PatientCard from './Card';
import PatientUpdate from './UpdatePatient';

interface IPatientProfileProps {
	isProfileView: boolean;
	onClick: () => void;
}

const PatientProfile = ({ isProfileView, onClick }: IPatientProfileProps) => {
	return (
		<Box sx={{ maxWidth: '1440px' }}>
			{!isProfileView && <PatientCard onClick={onClick} />}
			{!!isProfileView && <PatientUpdate />}
		</Box>
	);
};

export default PatientProfile;
