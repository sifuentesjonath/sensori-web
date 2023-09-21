/**React */
import React, { useContext } from 'react';

/**Mui */
import {
	Box,
	CSSObject,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

/**Styles */
import { device } from '@styles/breakPoints';
import colorPalette from '@styles/color-palette';

/**Context */
import { AppContext } from '@/providers/AppProvider';

/**Components */
import UpdatePatientForm from '@components/form/UpdatePatientForm';
import StatsPatient from '../Stats';

const fullViewStyle: CSSObject = {
	maxWidth: '1440px',
	width: '80vw',
	height: '604px',
	display: 'flex',
	flexDirection: 'row',
	borderRadius: '16px',
	padding: '14px',
	background: colorPalette.buttonBlueStrong,
};

const UpdatePatient = () => {
	const theme = useTheme();
	const isTableView = useMediaQuery(theme.breakpoints.between(660, 1142));
	const isLaptopView = useMediaQuery(theme.breakpoints.up(1142));
	const { open } = useContext(AppContext);

	return (
		<Box
			sx={{
				...fullViewStyle,
				...(open && {
					width: '75vw',
					[theme.breakpoints.down(1200)]: {
						width: '70vw',
					},
				}),
				[theme.breakpoints.down(660)]: {
					width: '67vw',
					height: 'fit-content',
					justifyContent: 'start',
				},
				//TODO: Create constant
				[theme.breakpoints.between(660, 1142)]: {
					height: 'fit-content',
					overflowX: 'scroll',
					justifyContent: 'space-around',
				},
				[theme.breakpoints.up(1800)]: {
					justifyContent: 'center',
				},
			}}
		>
			<UpdatePatientForm />
			<Box
				sx={{
					width: '532px',
					height: '100%',
					background: colorPalette.buttonBlue,
					borderRadius: '16px',
					padding: '16px',
					[theme.breakpoints.down(660)]: {
						display: 'none',
					},
					// TODO: Create constant
					[theme.breakpoints.between(660, 1142)]: {
						width: 'fit-content',
						height: '568px',
						right: ' 2.4em',
						display: 'grid',
						'& div': {
							justifySelf: 'center',
						},
					},
				}}
			>
				<Typography
					sx={{ fontSize: '16px', color: colorPalette.white, fontWeight: 600 }}
				>
					Patient Stats
				</Typography>
				{isTableView && <StatsPatient size='sm' />}
				{isLaptopView && <StatsPatient size='lg' />}
			</Box>
		</Box>
	);
};

export default UpdatePatient;
