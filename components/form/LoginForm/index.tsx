//React
import React, { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
//Next
import Link from 'next/link';
import { useRouter } from 'next/navigation';
//Firebase
import { loginSubmit } from '@auth/user';
//Styles
import { loginFormContainer, loginButtons } from './style';

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
import useLoginForm, { IUseLoginForm } from '@hooks/form/useLoginForm';
import { useIsEmailVerified } from '@hooks/useVerifiedEmail';
//Utils
import { paths } from '@utils/paths';
import colorPalette from '@styles/color-palette';
import { useDispatch } from 'react-redux';
import { setUserState } from '@redux/slices/user/user.actions';
// import { useSnackbar } from 'notistack';

const LogInForm = () => {
	const [verifiedEmail] = useIsEmailVerified();
	const [loading, setLoading] = useState<boolean>(false);
	const [onClickloading, setOnClickLoading] = useState<boolean>(false);
	// const { enqueueSnackbar } = useSnackbar();
	const [openErrorMessage, setOpenErrorMessage] = useState<boolean>(false);
	const [openWelcomeMessage, setOpenWelcomeMessage] = useState<boolean>(false);
	const [openUnverifiedMessage, setOpenUnverifiedMessage] =
		useState<boolean>(false);
	const dispatch = useDispatch();

	const theme = useTheme();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useLoginForm();
	const router = useRouter();

	const handleChangedAlert = (message: 'success' | 'error' | 'unvalid') => {
		switch (message) {
			case 'success':
				setOpenWelcomeMessage(!openWelcomeMessage);
				// enqueueSnackbar('This is a success message!', { variant: 'success' });
				break;
			case 'error':
				setOpenErrorMessage(!openErrorMessage);
				// enqueueSnackbar('This is a success message!', { variant: 'error' });
				break;
			case 'unvalid':
				setOpenUnverifiedMessage(!openUnverifiedMessage);
				// enqueueSnackbar('This is a success message!', { variant: 'warning' });
				break;
			default:
				console.log('Default');
		}
	};

	const onValid: SubmitHandler<IUseLoginForm> = async ({ email, password }) => {
		setLoading(true);
		try {
			await loginSubmit({ email, password });
			const isUserEmailVerified = verifiedEmail();
			if (isUserEmailVerified) {
				handleChangedAlert('success');
				setTimeout(() => {
					dispatch(setUserState({ Email: email, Logged: true, Rol: 'user' }));
				}, 1000);
			} else {
				setLoading(true);
				setTimeout(() => {
					handleChangedAlert('unvalid');
					setLoading(false);
				}, 4500);
			}
		} catch (error) {
			setLoading(true);
			setTimeout(() => {
				handleChangedAlert('error');
				setLoading(false);
			}, 4500);
		}
	};

	const onError: SubmitErrorHandler<IUseLoginForm> = (errors) => {
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
				[theme.breakpoints.down('sm')]: {
					'& form': {
						alignItems: 'center',
					},
				},
			}}
		>
			<form onSubmit={handleSubmit(onValid, onError)}>
				<Typography variant='h5' component='h1'>
					{'Welcome'}
				</Typography>
				<Input
					control={control}
					errorMessage={errors?.email?.message ? errors?.email?.message : ''}
					placeholder='Email'
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
				<Link href={paths.restorePassword}>{'Forgot Password'}</Link>
				<Grid
					sx={{
						...loginButtons,
						[theme.breakpoints.down('md')]: {
							paddingTop: '8px',
							flexDirection: 'column',
							alignItems: 'start',
							gap: '0.3rem',
						},
						[theme.breakpoints.down('sm')]: {
							paddingTop: '8px',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '0.3rem',
						},
					}}
				>
					<Button
						type='submit'
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
						endIcon={!loading && <ArrowForwardIcon fontSize='small' />}
						loading={loading}
						loadingIndicator={<CircularProgress size={24} />}
					>
						{!loading ? 'Login' : ''}
					</Button>
					<Button
						type='button'
						variant='contained'
						sx={{
							mt: 2,
							mb: 1,
						}}
						onClick={() => {
							router.replace(paths.signup);
						}}
						loading={onClickloading}
						loadingIndicator={<CircularProgress size={24} />}
					>
						{!onClickloading ? "Don't have an account yet" : ''}
					</Button>
				</Grid>
			</form>
			<AlertMessage
				description={'Welcome to sensorium'}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={openWelcomeMessage}
				onClose={() => setOpenWelcomeMessage(!openWelcomeMessage)}
				alert={{
					onClose: () => setOpenWelcomeMessage(!openWelcomeMessage),
					severity: 'success',
				}}
			/>
			<AlertMessage
				description={'Something was wrong -Email or password are wrong'}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={openErrorMessage}
				onClose={() => setOpenErrorMessage(!openErrorMessage)}
				alert={{
					onClose: () => setOpenErrorMessage(!openErrorMessage),
					severity: 'error',
				}}
			/>
			<AlertMessage
				description={'You need verified your account -Check your email-'}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={openUnverifiedMessage}
				onClose={() => setOpenUnverifiedMessage(!openUnverifiedMessage)}
				alert={{
					onClose: () => setOpenUnverifiedMessage(!openUnverifiedMessage),
					severity: 'warning',
				}}
			/>
		</Box>
	);
};

export default LogInForm;
