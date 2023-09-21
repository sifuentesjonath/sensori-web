import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import StatsGrid from './StatsGrid';
import StatsPie from './StatsPie';

import colorPalette from '@styles/color-palette';
import StatsRow from './StatsRow';

const MediaStats = () => {
	const theme = useTheme();
	const isWideScreen = useMediaQuery(theme.breakpoints.up('lg'));

	return (
		<Grid item sm={12} lg={4}>
			<Stack spacing={1}>
				<Stack
					spacing={1}
					sx={{
						border: 1,
						borderColor: colorPalette.textBlue,
						borderRadius: '16px',
						padding: 2,
					}}
				>
					<Box>
						<Typography
							variant='subtitle1'
							sx={{
								color: colorPalette.white,
								fontWeight: 600,
							}}
						>
							Media Stats
						</Typography>
					</Box>
					{isWideScreen ? <StatsGrid /> : <StatsRow />}
				</Stack>
				<StatsPie />
			</Stack>
		</Grid>
	);
};

export default MediaStats;
