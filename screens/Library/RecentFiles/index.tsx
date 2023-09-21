import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import RecentFileCard from './RecentFileCard';
import Stack from '@mui/material/Stack';

import colorPalette from '@styles/color-palette';
import { files } from '../sample_files';
import { scrollStyleRemoval } from '../style';

interface IRecentFilesProps {}

const RecentFiles = () => {
	return (
		<Grid
			container
			direction='column'
			item
			lg={8}
			p={3}
			spacing={2}
			sx={{
				overflowX: 'scroll',
				...scrollStyleRemoval,
			}}
		>
			<Grid item>
				<Typography
					variant='subtitle1'
					sx={{
						color: colorPalette.white,
						fontWeight: 600,
					}}
				>
					Recent Files
				</Typography>
			</Grid>

			<Grid item>
				<Stack direction='row' spacing={3}>
					{files.slice(0, 3).map((file) => (
						<RecentFileCard file={file} />
					))}
				</Stack>
			</Grid>
		</Grid>
	);
};

export default RecentFiles;
