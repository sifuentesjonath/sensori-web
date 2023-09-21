import Grid from '@mui/material/Grid';

import DragNDropButton from './DragNDropButton';
import UploadButton from './UploadButton';

const LibraryDropZone = () => {
	return (
		<Grid lg={4} item container direction='column' spacing={2} p={3}>
			<DragNDropButton />
			<UploadButton />
		</Grid>
	);
};

export default LibraryDropZone;
