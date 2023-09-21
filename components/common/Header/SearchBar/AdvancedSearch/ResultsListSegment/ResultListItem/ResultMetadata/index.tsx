import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import colorPalette from '@styles/color-palette';
import { VoiceSearchContext } from '@components/common/Header/SearchBar';
import { useContext } from 'react';

interface IResultMetadataProps {
	title: string;
	subtitle?: string;
}

const ResultMetadata = ({ title, subtitle }: IResultMetadataProps) => {
	const isVoiceSearch = useContext(VoiceSearchContext);

	return (
		<Stack>
			<Box>
				<Box>
					<Typography
						variant='subtitle2'
						sx={{
							color: colorPalette.black,
							fontWeight: 500,
							fontSize: '14px',
						}}
					>
						{title}
					</Typography>
				</Box>

				{subtitle ? (
					<Box>
						<Typography
							variant='subtitle2'
							sx={{
								color: isVoiceSearch
									? colorPalette.green
									: colorPalette.stroke.labelText,
								fontWeight: 500,
								fontSize: '12px',
							}}
						>
							{subtitle}
						</Typography>
					</Box>
				) : undefined}
			</Box>
		</Stack>
	);
};

export default ResultMetadata;
