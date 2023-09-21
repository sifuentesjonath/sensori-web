'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LogInForm from '@components/form/LoginForm';
import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import {
	imageLeftContainer,
	brainContainer,
	mainContainer,
	loginCard,
	loginContainer,
} from './style';
import Brain from '@public/svg/brain-image.svg';
import RightImage from '@public/png/right-login-image.png';
import { size } from '@styles/breakPoints';

import { ThemeProvider } from '@mui/material/styles';
import { fontTheme } from '@styles/themes/font';
import Logo from '@components/common/Logo';

const LogInScreen = () => {
	const theme = useTheme();
	return (
		<ThemeProvider theme={fontTheme}>
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
							[theme.breakpoints.between('sm', 'lg')]: {
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
							[theme.breakpoints.down('sm')]: {
								marginLeft: '0.1rem',
								'& .MuiTypography-root': {
									textAlign: 'center',
								},
								'& .MuiTypography-h3': {
									fontSize: '36px !important',
								},
								'& .MuiTypography-body2': {
									alignSelf: 'center',
									fontSize: '16px',
								},
							},
						}}
					>
						<Grid
							sx={{ [theme.breakpoints.down('sm')]: { alignSelf: 'center' } }}
						>
							<Logo />
						</Grid>
						<Typography variant='h3' component='h1'>
						“And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.”
						</Typography>
						<Typography
							variant='body2'
							sx={{
								[theme.breakpoints.up('lg')]: {
									width: '400px',
								},
								[theme.breakpoints.up('sm')]: {
									textAling: 'center',
								},
							}}
						>
							― Anais Nin
						</Typography>
						<LogInForm />
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
			</Grid>
		</ThemeProvider>
	);
};

export default LogInScreen;
