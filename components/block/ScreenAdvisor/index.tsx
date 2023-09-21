import { FC, ReactNode } from 'react';

import Image from 'next/image';

import { Box, Grid, Typography, useTheme } from '@mui/material';
import {
	screenAdvisorContainer,
	containerSuccess,
	containerError,
} from './style';

import SensoriumLogo from '@public/svg/sensorium-logo.svg';
import Logo from '@components/common/Logo';

interface IScreenAdvisorProps {
	type: 'error' | 'success';
	title: string;
	description: string;
	children?: ReactNode;
}

const ScreenAdvisor: FC<IScreenAdvisorProps> = ({
	type,
	title,
	description,
	children,
}) => {
	const theme = useTheme();
	return (
		<Box component='main' sx={{ ...screenAdvisorContainer }}>
			<Grid
				container
				sx={{
					...(type === 'success' && {
						...containerSuccess,
					}),
					...(type === 'error' && {
						...containerError,
					}),
				}}
			>
				<Grid
					sx={{ [theme.breakpoints.down('sm')]: { alignSelf: 'center' } }}
					item
				>
					<Logo />
				</Grid>
				<Grid item component='section'>
					<Typography variant='h3'>{title}</Typography>
					<Typography>{description}</Typography>
				</Grid>
				{children}
			</Grid>
		</Box>
	);
};

export default ScreenAdvisor;
