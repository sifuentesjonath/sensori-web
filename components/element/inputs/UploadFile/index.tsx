import React, { forwardRef } from 'react';
import { Controller, Control } from 'react-hook-form';
import { Button, Input } from '@mui/material';
import { browserButton } from '@components/form/UploadFileForm/style';
import { IInput } from '@components/element/Input';

export const UploadFileInput = forwardRef((props: IInput, ref: any) => {
	return (
		<Controller
			name={props.name ? props.name : ''}
			control={props.control}
			render={({ field: { onChange, value } }) => (
				<Button
					sx={{ ...browserButton, index: 100 }}
					variant='contained'
					component='label'
				>
					{'Browser File'}
					<Input
						hidden
						onChange={onChange}
						value={value}
						error={!!props.error}
						type={props.type}
						className={props.className}
						sx={{ display: 'none' }}
					/>
				</Button>
			)}
		/>
	);
});
