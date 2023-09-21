import React from 'react';
import {
	Alert,
	AlertProps,
	AlertTitle,
	Snackbar,
	SnackbarProps,
} from '@mui/material';

export interface IAlertProps extends SnackbarProps {
	alert: AlertProps;
	title?: string;
	description?: string;
}

const AlertMessage = ({ alert, title, description, ...props }: IAlertProps) => {
	return (
		<Snackbar autoHideDuration={6000} {...props}>
			<Alert {...alert}>
				<AlertTitle>{title}</AlertTitle>
				{description}
			</Alert>
		</Snackbar>
	);
};

export default AlertMessage;
