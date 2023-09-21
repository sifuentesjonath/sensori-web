'use client';
import React from 'react';

import { currentSessionStyles } from './styles';

import { Box, Container, Grid, List, ListItem, useTheme } from '@mui/material';

import PatientCard from '@screens/Patients/Profile/PatientProfile/Card';
import { ButtonsSection } from './ButtonSection';
import { ExperienceCard } from './ExperienceCard';
import Logo from '@components/common/Logo';

import { paths } from '@utils/paths';
import { SmoothnessRealTime } from '@components/charts/SmoothnessRealTime';
import { useRouter } from 'next/navigation';
import colorPalette from '@styles/color-palette';
import { HeartRealTime } from '@components/charts/HeartRealTime';
import { ColumnsChart } from '@components/charts/ColumnChart';

const CurrentSessionScreen = () => {
	const router = useRouter();
	const theme = useTheme();

	const handleOnClickPatientFullView = () => {
		router.replace(paths.patients);
	};

	const yaxisData = [
		'01-LE',
		'02-LE',
		'F7-LE',
		'F8-LE',
		'T5-LE',
		'T4-LE',
		'T6-LE',
	];

	return (
		<Box sx={{ ...currentSessionStyles }}>
			<Grid
				container
				sx={{
					[theme.breakpoints.down(1408)]: {
						display: 'flex',
						justifyContent: 'center',
						gap: '12px',
					},
					[theme.breakpoints.down(964)]: {
						justifyContent: 'start',
					},
				}}
			>
				<Grid display='flex' flexDirection='column' gap='20px' item>
					<ButtonsSection />
					<PatientCard
						isInCurrentSession={true}
						onClick={handleOnClickPatientFullView}
					/>
					<ExperienceCard />
				</Grid>
				<Grid
					display='flex'
					flexDirection='column'
					item
					sx={{ [theme.breakpoints.down(964)]: { display: 'none' } }}
				>
					<Container
						sx={{
							paddingTop: '5rem',
							display: 'flex',
							[theme.breakpoints.down(1408)]: { display: 'none' },
						}}
					>
						<List
							sx={{
								paddingTop: '2rem',
								position: 'absolute',
								color: colorPalette.textBlue,
								fontSize: '14px',
								fontWeight: 500,
								display: 'flex',
								flexDirection: 'column',
								gap: '1.1rem',
							}}
						>
							{yaxisData.map((data) => {
								return <ListItem>{data}</ListItem>;
							})}
						</List>
						<SmoothnessRealTime sx={{ paddingLeft: '2.5rem' }} />
					</Container>
					<Container
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							[theme.breakpoints.down(1408)]: {
								flexDirection: 'column',
								paddingTop: '76px',
							},
						}}
					>
						<HeartRealTime />
						<ColumnsChart low={25} medium={76} high={84} />
					</Container>
				</Grid>
				<Box
					className='box-image'
					sx={{ [theme.breakpoints.down(568)]: { display: 'none' } }}
				>
					<Logo href={paths.sessions} />
				</Box>
			</Grid>
		</Box>
	);
};

export default CurrentSessionScreen;
