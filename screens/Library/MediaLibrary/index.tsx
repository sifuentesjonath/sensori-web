import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MediaList from './MediaList';
import colorPalette from '@styles/color-palette';
import { scrollStyleRemoval } from '../style';

const MediaLibrary = () => {
	return (
		<Grid item sm={12} md={12} lg={8}>
			<Box
				sx={{
					backgroundColor: colorPalette.buttonBlue,
					height: '50vh',
					borderRadius: '16px',
					overflow: 'auto',
					...scrollStyleRemoval,
				}}
			>
				<Stack
					sx={{
						padding: 2,
					}}
				>
					<Typography
						variant='subtitle1'
						sx={{
							color: colorPalette.white,
							fontWeight: 600,
						}}
					>
						Media Library
					</Typography>

					<MediaList />
				</Stack>
			</Box>
		</Grid>
	);
};

export default MediaLibrary;
