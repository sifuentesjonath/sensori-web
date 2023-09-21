'use client';
/**React */
import React, { useContext, FC } from 'react';
/**Next */
import Image from 'next/image';
/**Mui material */
import {
	Box,
	Grid,
	Avatar,
	Typography,
	useTheme,
	useMediaQuery,
} from '@mui/material';
/**Images */
import MockupPatientImage from '@public/svg/patient.svg';
import ExperienceIcon from '@public/svg/experienceIcon.svg';
/**Styles */
import { sessionWidgetStyle } from './style';
/**Context */
import { AppContext } from '@/providers/AppProvider';
/**Component */
import LineChartWidget from '@components/charts/LineChartWidget';
import { OpenSessionProgressButton } from '@components/element/buttons/SessionProgressButton';
import { CurrentSessionButton } from '@components/element/buttons/CurrentSessionButton';

interface ISessionWidgetProps {}
const SessionWidget = () => {
	const { open, sessionState } = useContext(AppContext);
	const theme = useTheme();
	const isSmallLaptop = useMediaQuery(theme.breakpoints.down(1267));

	return (
		<Box
			component='section'
			sx={{
				width: '100%',
				...sessionWidgetStyle,
				...(!sessionState && {
					display: 'none',
				}),
				[theme.breakpoints.down(650)]: { display: 'none' },
				padding: '22px',
				...(!open && {
					paddingRight: '100px',
				}),
				...(open && {
					width: '80vw',
				}),
			}}
		>
			<Grid
				container
				justifyContent='space-evenly'
				alignItems='center'
				padding='0 4px'
				gap='20px'
				sx={{
					display: 'flex',
					[theme.breakpoints.between(1267, 1400)]: {
						display: 'grid',
						gridAutoFlow: 'column',
						justifyContent: 'end',
						gap: '48px',
					},
				}}
			>
				<Grid item>
					<CurrentSessionButton />
				</Grid>
				<Grid item>
					<OpenSessionProgressButton />
				</Grid>
				<Grid item display='flex' gap='8px'>
					<Avatar>
						<Image src={MockupPatientImage} alt='patient-image' />
					</Avatar>
					<Box display={'flex'} flexDirection={'column'} gap='4px'>
						<Typography>{'Patient:'}</Typography>
						<Typography variant='h6'>{'John Doe'}</Typography>
					</Box>
				</Grid>
				<Grid
					item
					sx={{
						...(isSmallLaptop && { display: 'none' }),
						width: '408px',
						'& rect': { height: '8px' },
						'& svg': { borderRadius: '8px' },
						...(open && {
							marginRight: '20px',
						}),
					}}
				>
					<Typography>{'Smoothness'}</Typography>
					<LineChartWidget />
				</Grid>
				<Grid item sx={{ [theme.breakpoints.down(756)]: { display: 'none' } }}>
					<Typography>{'Experiences'}</Typography>
					<Image src={ExperienceIcon} alt='experience-icon' />
				</Grid>
			</Grid>
		</Box>
	);
};

export default SessionWidget;
