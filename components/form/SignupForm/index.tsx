//React
import React, { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
//Next
import Link from 'next/link';
import { useRouter } from 'next/navigation';
//Styles
import colorPalette from '@styles/color-palette';
import { loginFormContainer, loginButtons } from '../LoginForm/style';
//Firebase
import { auth } from '@auth/firebaseApp';
//Services
import { signupSubmit } from '@auth/user';
//MUI material
import {
	Typography,
	CircularProgress,
	Box,
	Grid,
	useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//Components
import { Button } from '@components/element/Button';
import { Input, InputPassword } from '@components/element/Input';
import AlertMessage from '@components/notice/Alert';

//Hooks
import useSignupForm, { IUseSignupForm } from '@hooks/form/useSignupForm';
//Utils
import { paths } from '@utils/paths';

const SignupForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useSignupForm();
	const theme = useTheme();
	const [loading, setLoading] = useState<boolean>(false);
	const [openAlert, setOpenAlert] = useState<boolean>(false);
	const router = useRouter();

	const handleChangeAlert = () => {
		setOpenAlert(!openAlert);
	};
	const onValid: SubmitHandler<IUseSignupForm> = async (data) => {
		setLoading(true);
		try {
			await signupSubmit({ ...data });
			auth.signOut();
			router.replace(paths.verifiedAccount);
		} catch (error) {
			handleChangeAlert();
			setTimeout(() => {
				setLoading(false);
			}, 4500);
		}
	};

	const onError: SubmitErrorHandler<IUseSignupForm> = (errors) => {
		console.log(errors);
	};

	return (
		<Box
			component='section'
			sx={{
				...loginFormContainer,
				[theme.breakpoints.up('lg')]: {
					'& form': {
						gap: '1.3rem !important',
					},
				},
			}}
		>
			<form onSubmit={handleSubmit(onValid, onError)}>
				<Typography variant='h5' component='h1'>
					{'Sign Up'}
				</Typography>
				<Input
					control={control}
					errorMessage={
						errors?.firstName?.message ? errors?.firstName?.message : ''
					}
					placeholder='First name'
					{...register('firstName')}
				/>
				<Input
					control={control}
					errorMessage={
						errors?.lastName?.message ? errors?.lastName?.message : ''
					}
					placeholder='Last name'
					{...register('lastName')}
				/>
				<Input
					control={control}
					errorMessage={errors?.email?.message ? errors?.email?.message : ''}
					placeholder='eMail'
					{...register('email')}
				/>
				<InputPassword
					control={control}
					errorMessage={
						errors?.password?.message ? errors?.password?.message : ''
					}
					placeholder='Password'
					type='password'
					{...register('password')}
				/>
				<Grid
					sx={{
						alignSelf: 'start',
						marginTop: '16px',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1rem',
						'& button': {
							color: `${colorPalette.black}!important`,
							margin: '8px 0',
						},
						[theme.breakpoints.down('md')]: {
							paddingTop: '8px',
							flexDirection: 'column',
							alignItems: 'start',
							gap: '0.3rem',
						},
					}}
				>
					<Button
						type='submit'
						variant='contained'
						sx={{
							mt: 3,
							mb: 2,
							width: 'auto',
							'& .MuiGrid-root': {
								background: colorPalette.green,
							},
						}}
						endIcon={!loading && <ArrowForwardIcon fontSize='small' />}
						loading={loading}
						loadingIndicator={<CircularProgress size={24} />}
					>
						{!loading ? 'Sign up' : ''}
					</Button>
				</Grid>
			</form>
			<AlertMessage
				description={'This email already has an account'}
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

export default SignupForm;
