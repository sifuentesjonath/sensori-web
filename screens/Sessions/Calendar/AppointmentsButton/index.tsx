import React from 'react';

interface IAppointmentButtonProps {
	label: string;
	onClick: () => void;
}

const AppointmentsButton = ({ label, onClick }: IAppointmentButtonProps) => {
	return <div>AppointmentsButton</div>;
};

export default AppointmentsButton;
