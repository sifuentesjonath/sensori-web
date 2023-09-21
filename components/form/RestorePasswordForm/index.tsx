//React
import React, { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
//Next
import { useRouter } from 'next/navigation';
//Firebase
import { restorePassword } from '@auth/user';
// MUI
import { Box, CSSObject, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//Components
import { Button } from '@components/element/Button';
import { Input } from '@components/element/Input';
import AlertMessage from '@components/notice/Alert';
//Hooks
import useRestorePasswordForm, {
	IUseRestorePasswordForm,
} from '@hooks/form/useRestorePasswordForm';
//Utils
import { paths } from '@utils/paths';
import colorPalette from '@styles/color-palette';

const restorePasswordContainer: CSSObject = {
	'& form': {
		display: 'flex',
		flexDirection: 'column',
		'& .MuiFormControl-root': {
			'& .MuiInputBase-root': {
				background: colorPalette.white,
				width: '240px',
				'& .MuiFormHelperText-root': {
					color: colorPalette.buttonRed,
				},
			},
			'& .MuiFormHelperText-root': {
				color: colorPalette.buttonRed,
			},
		},
	},
};

const RestorePasswordForm = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [openAlert, setOpenAlert] = useState<boolean>(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useRestorePasswordForm();

	const handleChangeAlert = () => {
		setOpenAlert(!openAlert);
	};

	const onValid: SubmitHandler<IUseRestorePasswordForm> = async (data) => {
		setLoading(true);
		try {
			await restorePassword({ ...data });
			setTimeout(() => {
				router.replace(paths.verifiedPassword);
			}, 4000);
		} catch (error) {
			handleChangeAlert();
			setTimeout(() => {
				setLoading(false);
			}, 4500);
		}
	};

	const onError: SubmitErrorHandler<IUseRestorePasswordForm> = (errors) => {
		console.log(errors);
	};

	return (
		<Box sx={{ ...restorePasswordContainer }}>
			<form onSubmit={handleSubmit(onValid, onError)}>
				<Input
					control={control}
					errorMessage={errors.email?.message ? errors.email.message : ''}
					placeholder='Introuduce your email'
					{...register('email')}
				/>
				<Button
					type='submit'
					variant='contained'
					sx={{ mt: 3, mb: 2, color: `${colorPalette.white}!important` }}
					endIcon={!loading && <ArrowForwardIcon fontSize='small' />}
					loading={loading}
					loadingIndicator={<CircularProgress size={24} />}
				>
					{!loading ? 'Send email' : ''}
				</Button>
			</form>
			<AlertMessage
				description={"This email don't have account"}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={openAlert}
				onClose={handleChangeAlert}
				alert={{
					onClose: handleChangeAlert,
					severity: 'warning',
				}}
			/>
		</Box>
	);
};

export default RestorePasswordForm;
