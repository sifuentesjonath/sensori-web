import { Button } from '@components/element/Button';
import { Input as TextInput } from '@components/element/Input';
import useUploadFileForm, {
	IUseUploadFileForm,
} from '@hooks/form/useUploadFileForm';
import {
	Box,
	Grid,
	Input,
	Typography,
	Button as MuiButton,
} from '@mui/material';
import React from 'react';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import {
	browserButton,
	buttonsActionContainer,
	cancelButton,
	uploadFile,
	uploadFileForm,
} from './style';
import UploadButton from '@public/svg/upload-alt.svg';
import Image from 'next/image';
import DropZone from '@components/element/DropZone';
import { UploadFileInput } from '@components/element/inputs/UploadFile';

const UploadFileForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useUploadFileForm();

	const handleBrowserFileWidget = () => alert('Browser button');
	const handleCancelUploadWidget = () => alert('Cancel button');

	const onValid: SubmitHandler<IUseUploadFileForm> = ({ file, tags }) => {
		alert(`File name: ${file} Tags: ${tags}`);
	};

	const onError: SubmitErrorHandler<IUseUploadFileForm> = (errors) => {
		console.log(errors);
	};
	return (
		<Box
			component='form'
			sx={{ ...uploadFileForm }}
			onSubmit={handleSubmit(onValid, onError)}
		>
			<Grid container direction='column'>
				<DropZone
					control={control}
					errorMessage='error'
					{...register('file')}
				/>
				<Grid item>
					<Typography sx={{ top: '57% !important' }}>{'File'}</Typography>
					<TextInput
						control={control}
						placeholder='Select File'
						errorMessage={errors?.file?.message ? errors?.file?.message : ''}
						sx={{ width: '510px' }}
						{...register('file')}
					/>
					<UploadFileInput
						control={control}
						type='file'
						errorMessage={errors?.file?.message ? errors?.file?.message : ''}
						{...register('file')}
					/>
				</Grid>
				<Grid item>
					<Typography sx={{ top: '70% !important' }}>{'Tags'}</Typography>
					<TextInput
						control={control}
						sx={{ width: '658px' }}
						errorMessage={errors?.tags?.message ? errors?.tags?.message : ''}
						placeholder='Add or select Tags'
						{...register('tags')}
					/>
				</Grid>
				<Grid item sx={{ ...buttonsActionContainer }}>
					<Button
						type='button'
						variant='outlined'
						sx={{ ...cancelButton }}
						onClick={handleCancelUploadWidget}
					>
						{'Cancel'}
					</Button>
					<Button
						type='submit'
						sx={{ ...uploadFile }}
						startIcon={
							<Image src={UploadButton} width={20} height={20} alt={'upload'} />
						}
					>
						{'Upload file'}
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default UploadFileForm;
