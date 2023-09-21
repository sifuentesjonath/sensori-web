import Box from '@mui/material/Box';

import colorPalette from '@styles/color-palette';
import Stack from '@mui/material/Stack';

import FileMetadata from './FileMetadata';
import FileActionIcons from './FileActionIcons';
import recentFileCard from './style';

import { IFile } from '@screens/Library/sample_files';

export interface IRecentFileCardProps {
	file: IFile;
}

const possibleActions = ['Option1', 'Option2', 'Option3'];

const RecentFileCard = ({ file }: IRecentFileCardProps) => {
	return (
		<Box
			sx={{
				...recentFileCard,
			}}
		>
			<Stack spacing={2}>
				<FileActionIcons
					file={file}
					favoriteColor={colorPalette.green}
					options={possibleActions}
				/>
				<FileMetadata metadata={file.metadata} />
			</Stack>
		</Box>
	);
};

export default RecentFileCard;
