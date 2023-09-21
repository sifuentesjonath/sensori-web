import React from 'react';

import IconButton from '@mui/material/IconButton';
import Button, { ButtonProps } from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { searchBarButton, searchMicButton } from '../../style';
import colorPalette from '@styles/color-palette';
import Box from '@mui/material/Box';

interface ISearchBarButtonProps extends ButtonProps {
	onVoiceSearchClick: () => void;
}

const SearchBarButton = ({
	onClick,
	onVoiceSearchClick,
	hidden,
}: ISearchBarButtonProps) => {
	return (
		<Button
			variant='outlined'
			/**
			 * TODO:
			 * Open AdvancedSearch and focus textfield and looking for triggering
			 * Microphone API.
			 */
			onClick={onClick}
			hidden={hidden}
			sx={
				hidden
					? {
							display: 'none',
					  }
					: {
							...searchBarButton,
					  }
			}
		>
			<Box>
				<IconButton
					sx={{
						color: colorPalette.textBlue,
					}}
				>
					<SearchIcon />
				</IconButton>
				Search...
			</Box>

			<IconButton
				onClick={onVoiceSearchClick}
				sx={{
					...searchMicButton,
				}}
			>
				<MicNoneIcon />
			</IconButton>
		</Button>
	);
};

export default SearchBarButton;
