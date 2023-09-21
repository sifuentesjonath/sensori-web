import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import CloseModalButton from '../CloseModal';
import UploadFileForm from '@components/form/UploadFileForm';
import { addNoteModal } from './styles';
import AddNoteForm from '@components/form/AddNoteForm';

export const AddNoteModal = () => {
	return (
		<Box sx={addNoteModal}>
			<Typography id='modal-modal-title' variant='h6' component='h3'>
				{'Add Note'}
			</Typography>
			<CloseModalButton />
			<Grid container>
				<AddNoteForm />
			</Grid>
		</Box>
	);
};
