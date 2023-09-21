'use client';
/**React */
import { createContext, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

/**Mui components */
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/**Styles */
import { device } from '@styles/breakPoints';
import { scrollStyleRemoval } from '@screens/Library/style';
import { backButtonPatient, pattientContainer } from './style';

/**Component */
import PatientProfile from './PatientProfile';
import FullNervousSystem from './FullNervuosSystem';
import PatientSessions from './PatientSessions';
import { paths } from '@utils/paths';

const patientInitialContext = {
	fullView: false,
	handlFullView: () => {},
};

export const PatientContext = createContext(patientInitialContext);

const PatientContainer = () => {
	const theme = useTheme();
	const isTabletView = useMediaQuery(device.tablet);
	const [fullView, setFullView] = useState(false);

	const handlFullView = () => {
		setFullView(!fullView);
	};

	return (
		<PatientContext.Provider value={{ fullView, handlFullView }}>
			<Box
				sx={{
					...pattientContainer,
					...scrollStyleRemoval,
					...(fullView && {
						display: 'flex',
						flexDirection: 'column',
						[theme.breakpoints.up(1600)]: {
							alignItems: 'center',
						},
					}),
					...(!fullView && {
						alignItems: 'start',
						...(isTabletView && { height: '84vh', flexDirection: 'column' }),
						[theme.breakpoints.up(1600)]: {
							justifyContent: 'center',
						},
					}),
					[theme.breakpoints.between(1024, 1396)]: {
						flexDirection: 'column',
					},
				}}
			>
				<PatientProfile isProfileView={fullView} onClick={handlFullView} />
				{!fullView && <FullNervousSystem />}
				{!!fullView && (
					<>
						<PatientSessions />
						<Button
							type='button'
							variant='text'
							onClick={handlFullView}
							sx={{ ...backButtonPatient }}
							startIcon={<ArrowBackIcon />}
						>
							Back
						</Button>
					</>
				)}
			</Box>
		</PatientContext.Provider>
	);
};

export default PatientContainer;
