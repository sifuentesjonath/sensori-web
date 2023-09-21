import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import colorPalette from '@styles/color-palette';

export interface IMetadata {
	filename: string;
	filesizeMB: number; // Is gonna be always be in MB?
	lastModificationDate: Date;
}

export interface IFileMetadataProps {
	metadata: IMetadata;
}

const FileMetadata = ({ metadata }: IFileMetadataProps) => {
	const date = new Date(metadata.lastModificationDate);
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
		<Box>
			<Box>
				<Typography color={colorPalette.white} variant='subtitle2'>
					{metadata.filename}
				</Typography>
			</Box>
			<Stack spacing={{ md: 1 }} direction={{ md: 'column', lg: 'row' }}>
				<Box>
					<Typography
						color={colorPalette.green}
						variant='subtitle2'
						sx={{
							fontSize: '12px',
							fontWeight: 500,
							whiteSpace: 'nowrap',
						}}
					>
						{metadata.filesizeMB}MB
					</Typography>
				</Box>
				<Box>
					<Typography
						color={colorPalette.textBlue}
						variant='subtitle2'
						sx={{
							fontSize: '12px',
							fontWeight: 500,
							whiteSpace: 'nowrap',
						}}
					>
						{lastModificationDate}
					</Typography>
				</Box>
				<Box>
					<Typography
						color={colorPalette.white}
						variant='subtitle2'
						sx={{
							fontSize: '12px',
							fontWeight: 500,
							whiteSpace: 'nowrap',
						}}
					>
						{lastModificationTime}
					</Typography>
				</Box>
			</Stack>
		</Box>
	);
};

export default FileMetadata;
