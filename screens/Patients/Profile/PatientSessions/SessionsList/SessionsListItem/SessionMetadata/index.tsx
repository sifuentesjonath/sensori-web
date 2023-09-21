import React from 'react';
import { Stack, Grid, Typography, useTheme } from '@mui/material';
import colorPalette from '@styles/color-palette';

export interface ISessionMetadata {
	name: string;
	taken: number;
	date: Date;
}

const SessionMetadata = ({ name, taken, date }: ISessionMetadata) => {
	const theme = useTheme();
	const lastModificationDate = date
		.toLocaleDateString('en-US', {
			dateStyle: 'medium',
		})
		.replace(',', '');

	const lastModificationTime = date.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});

	return (
		<Stack direction='row' spacing={1}>
			<Grid>
				<Grid>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: '16px',
							color: colorPalette.white,
						}}
					>
						{name}
					</Typography>
				</Grid>
				<Grid
					display='flex'
					gap='0.6em'
					sx={{ [theme.breakpoints.down(660)]: { flexDirection: 'column' } }}
				>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '12px',
							color: colorPalette.textBlue,
						}}
					>{`Session ${taken}`}</Typography>
					<Typography
						sx={{
							fontWeight: 500,
							fontSize: '12px',
							color: colorPalette.white,
						}}
					>{`${lastModificationDate}, ${lastModificationTime}`}</Typography>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default SessionMetadata;
