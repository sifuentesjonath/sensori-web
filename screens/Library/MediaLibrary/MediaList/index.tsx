import List from '@mui/material/List';
import MediaListItem from './MediaListItem';
import { useFiles } from '@hooks/useFiles';

const MediaList = () => {
	const { files } = useFiles();
	console.log('files:', files);
	return (
		<List>
			{files.map((file) => (
				<MediaListItem file={file} key={file.uuid} />
			))}
		</List>
	);
};

export default MediaList;
