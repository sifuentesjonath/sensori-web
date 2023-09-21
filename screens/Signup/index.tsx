'use client';
//React
import * as React from 'react';
//Next
import Image from 'next/image';
//Styles
import {
	imageLeftContainer,
	brainContainer,
	mainContainer,
	loginCard,
	loginContainer,
} from './style';
import { size } from '@styles/breakPoints';
//Mui material
import { Box, Typography, useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//Components
import SignupForm from '@components/form/SignupForm';
//Utils
import Brain from '@public/svg/brain-image.svg';
import RightImage from '@public/png/right-login-image.png';
import ButtonBack from '@components/element/buttons/ButtonBack';
import Logo from '@components/common/Logo';

const SignupScreen = () => {
	const theme = useTheme();
	return (
		<Grid
			component='main'
			container
			sx={{
				...loginContainer,
			}}
		>
			<Box
				sx={{
					...brainContainer,
					[theme.breakpoints.down(1272)]: {
						display: 'none',
					},
					[theme.breakpoints.up(1800)]: {
						display: 'none',
					},
				}}
			>
				<Image src={Brain} alt={'sensorium-brain'} />
			</Box>
			<Grid
				item
				xs={12}
				sm={8}
				md={8}
				sx={{ ...mainContainer }}
				component='section'
			>
				<Grid
					sx={{
						...loginCard,
						[theme.breakpoints.down('lg')]: {
							marginLeft: '0.1rem',
							width: '400px',
							'& .MuiTypography-h3': {
								fontSize: '36px !important',
							},
							'& .MuiTypography-body2': {
								alignSelf: 'center',
								textAlign: 'start',
								fontSize: '16px',
							},
						},
					}}
				>
					<Grid
						sx={{
							'& a': {
								'& img': {
									paddingBottom: '3rem',
								},
							},
						}}
					>
						<Logo />
					</Grid>
					<SignupForm />
				</Grid>
			</Grid>
			<Grid
				item
				xs={4}
				sm={4}
				md={4}
				sx={{
					...imageLeftContainer,
					[theme.breakpoints.down('md')]: {
						display: 'none',
					},
				}}
				component='section'
			>
				<Image src={RightImage} alt='right-login-image' />
			</Grid>
			<ButtonBack />
		</Grid>
	);
};

export default SignupScreen;
