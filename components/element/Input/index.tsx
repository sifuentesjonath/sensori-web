import React, { forwardRef, useState } from 'react';
import { InputProps } from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { Controller, Control } from 'react-hook-form';
import { CSSObject, IconButton, InputAdornment } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export interface IInput extends InputProps {
	control: Control<any>;
	errorMessage: string;
	className?: string;
	sx?: CSSObject;
}

export const Input = forwardRef((props: IInput, ref: any) => {
	return (
		<Controller
			name={props.name ? props.name : ''}
			control={props.control}
			render={({ field: { onChange, value } }) => (
				<TextField
					variant='outlined'
					label={props.placeholder}
					onChange={onChange}
					value={value}
					error={!!props.error}
					helperText={props.errorMessage}
					type={props.type}
					className={props.className}
					sx={props.sx}
					maxRows={props.maxRows}
					multiline={props.multiline}
				/>
			)}
		/>
	);
});

export const InputPassword = forwardRef((props: IInput, ref: any) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	return (
		<Controller
			name={props.name ? props.name : ''}
			control={props.control}
			render={({ field: { onChange, value } }) => (
				<TextField
					variant='outlined'
					label={props.placeholder}
					onChange={onChange}
					value={props.value}
					error={!!props.error}
					helperText={props.errorMessage}
					type={showPassword ? 'text' : 'password'}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton onClick={handleClickShowPassword} edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			)}
		/>
	);
});
