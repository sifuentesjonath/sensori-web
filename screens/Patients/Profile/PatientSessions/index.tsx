// Mui Materia

import { useTheme, Stack, Box, Typography } from '@mui/material';
// /**Styles */
import { scrollStyleRemoval } from '@screens/Library/style';
import colorPalette from '@styles/color-palette';

/**Context */
import { AppContext } from '@/providers/AppProvider';

// /**Components */
import PatientSessionsList from './SessionsList';
import { useContext } from 'react';

const PatientSessions = () => {
	const { open } = useContext(AppContext);

	const theme = useTheme();
	return (
		<Box
			sx={{
				...(open && {
					width: '75vw',
					[theme.breakpoints.down(1200)]: {
						width: '70vw',
					},
				}),
				...(!open && {
					width: '80vw',
				}),
				borderRadius: '16px',
				border: `1px solid ${colorPalette.buttonBlue}`,
				height: '50vh',
				maxWidth: '1440px',
				[theme.breakpoints.down(660)]: {
					width: '67vw',
				},
			}}
		>
			<Typography
				variant='subtitle1'
				sx={{
					color: colorPalette.white,
					fontWeight: 600,
					marginTop: '12px',
					marginLeft: '12px',
				}}
			>
				Patient Sessions
			</Typography>
			<Stack
				sx={{
					...scrollStyleRemoval,
					height: '47vh',
					overflow: 'scroll',
					padding: 0,
				}}
			>
				<PatientSessionsList />
			</Stack>
		</Box>
	);
};

export default PatientSessions;
