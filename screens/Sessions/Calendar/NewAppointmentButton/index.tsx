import React, { FC } from 'react';

import Button from '@mui/material/Button';

import useMediaQuery from '@mui/material/useMediaQuery';

import CalendarMonth from '@mui/icons-material/CalendarMonth';

import { appointmentButton } from './style';

interface INewAppointmentButton {
	onClick: () => void;
}

const NewAppointmentButton: FC<INewAppointmentButton> = ({ onClick }) => {
	const isWideScreen = useMediaQuery('(max-width:1460px)');

	return (
		/** Displaying calendar icon whether the screen is wide enough */
		isWideScreen ? (
			<Button
				sx={{
					...appointmentButton,
				}}
				onClick={onClick}
			>
				New Appointment
			</Button>
		) : (
			<Button
				sx={{
					...appointmentButton,
				}}
				startIcon={<CalendarMonth />}
				onClick={onClick}
			>
				New Appointment
			</Button>
		)
	);
};

export default NewAppointmentButton;
