import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import CloseModalButton from '../CloseModal';
import { uploadFileStyle } from './styles';
import UploadFileForm from '@components/form/UploadFileForm';

export const UploadFileModal = () => {
	return (
		<Box sx={uploadFileStyle}>
			<Typography id='modal-modal-title' variant='h6' component='h3'>
				{'Update file'}
			</Typography>
			<CloseModalButton />
			<Grid container>
				<UploadFileForm />
			</Grid>
		</Box>
	);
};
