import React from 'react';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

interface IAppointmentAlertProps {
	open: boolean;
	onClick: () => void;
}

const AppointmentAlert = ({ open, onClick }: IAppointmentAlertProps) => {
	return (
		<Collapse in={open}>
			<Alert
				action={
					<IconButton
						aria-label='close'
						color='inherit'
						size='small'
						onClick={onClick}
					>
						<CloseIcon fontSize='inherit' />
					</IconButton>
				}
				sx={{ mb: 2 }}
			>
				A new appointent is being created!
			</Alert>
		</Collapse>
	);
};

export default AppointmentAlert;
