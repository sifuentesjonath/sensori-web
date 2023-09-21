import React from 'react';

import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';

import { Button } from '@components/element/Button';
import AddIcon from '@mui/icons-material/Add';

import useAddNewNote, { IUseAddNewNote } from '@hooks/form/useAddNote';

import { Box, Grid } from '@mui/material';

import { addNoteFormStyle } from './style';

import {
	buttonsActionContainer,
	cancelButton,
	uploadFile,
} from '../UploadFileForm/style';
import { Input } from '@components/element/Input';

const AddNoteForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useAddNewNote();

	const handleCancelAddNoteWidget = () => alert('Cancel button');

	const onValid: SubmitHandler<IUseAddNewNote> = ({ note }) => {
		alert(`Note: ${note} `);
	};

	const onError: SubmitErrorHandler<IUseAddNewNote> = (errors) => {
		console.log(errors);
	};

	return (
		<Box
			component='form'
			sx={{ ...addNoteFormStyle }}
			onSubmit={handleSubmit(onValid, onError)}
		>
			<Grid container direction='column'>
				<Grid item>
					<Input
						control={control}
						fullWidth
						multiline
						maxRows={16}
						sx={{ width: '658px' }}
						errorMessage={errors?.note?.message ? errors?.note?.message : ''}
						{...register('note')}
					/>
				</Grid>
				<Grid item sx={{ ...buttonsActionContainer }}>
					<Button
						type='button'
						variant='outlined'
						sx={{ ...cancelButton }}
						onClick={handleCancelAddNoteWidget}
					>
						{'Cancel'}
					</Button>
					<Button type='submit' sx={{ ...uploadFile }} startIcon={<AddIcon />}>
						{'Add Note'}
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default AddNoteForm;
