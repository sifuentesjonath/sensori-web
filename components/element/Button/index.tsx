import React, { ReactNode } from 'react';
import { StyledButton, styledButton } from './style';
import { LoadingButtonProps, LoadingButton } from '@mui/lab';

export interface IButtonProps extends LoadingButtonProps {
	children?: ReactNode;
	type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, type, ...props }: IButtonProps) => {
	return (
		<StyledButton
			sx={{ ...styledButton, textTransform: 'none' }}
			type={type}
			{...props}
		>
			{children}
		</StyledButton>
	);
};
