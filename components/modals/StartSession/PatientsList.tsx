import { Box, Paper, Typography, Stack, Checkbox } from '@mui/material';
import { scrollStyleRemoval } from '@screens/Library/style';
import colorPalette from '@styles/color-palette';
import React from 'react';
import { mockupPatientData } from './mockupPatients';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const PatientsList = () => {
	return (
		<Box>
			<Paper
				sx={{
					display: 'flex',
					width: '440px',
					background: colorPalette.green,
					justifyContent: 'space-between',
				}}
			>
				<Typography>{'ID'}</Typography>
				<Typography>{"PATIENT'S NAME"}</Typography>
				<Typography>{'SELECTED'}</Typography>
			</Paper>
			<Stack
				spacing={1}
				sx={{
					...scrollStyleRemoval,
					height: '240px',
					overflow: 'scroll',
				}}
			>
				{mockupPatientData.map(({ id, name }) => (
					<Paper
						sx={{
							display: 'flex',
							width: '440px',
							justifyContent: 'space-between',
						}}
					>
						<Typography>{id}</Typography>
						<Typography sx={{ paddingRight: 20 }}>{name}</Typography>
						<Checkbox {...label} />
					</Paper>
				))}
			</Stack>
		</Box>
	);
};
