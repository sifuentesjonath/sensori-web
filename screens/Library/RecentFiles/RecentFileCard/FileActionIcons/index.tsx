import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import colorPalette from '@styles/color-palette';
import { IFile } from '@screens/Library/sample_files';
import { useState } from 'react';

interface IFileActionIconsProps {
	file: IFile;
	fileIcon?: boolean;
	favoriteColor?: string;
	options: string[];
}

const FileActionIcons = ({
	file,
	fileIcon = true,
	favoriteColor,
	options,
}: IFileActionIconsProps) => {
	const [favoriteFile, setFavoriteFile] = useState(file.favorite);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);
	const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleFavoriteFile = () => {
		setFavoriteFile(!favoriteFile);
	};

	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			alignItems='flex-start'
		>
			{fileIcon && (
				<Box>
					<IconButton
						sx={{
							backgroundColor: colorPalette.buttonBlue,
							height: '3.5rem',
							width: '3.5rem',
						}}
					>
						<InsertDriveFileOutlinedIcon sx={{ color: colorPalette.green }} />
					</IconButton>
				</Box>
			)}

			{/* Favorite and more */}
			<Box>
				<IconButton
					sx={{
						color: favoriteColor,
						pr: 0,
					}}
					onClick={handleFavoriteFile}
				>
					{favoriteFile ? <StarRateRoundedIcon /> : <StarBorderRoundedIcon />}
				</IconButton>
				<IconButton
					sx={{
						color: colorPalette.textBlue,
						pr: 0,
					}}
					onClick={handleOpenMenu}
				>
					<MoreVertOutlinedIcon />
				</IconButton>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
					sx={{
						'& .MuiPaper-root': {
							backgroundColor: colorPalette.buttonBlue,
						},
						'& .MuiButtonBase-root': {
							color: colorPalette.white,
							fontWeight: 400,
						},
					}}
				>
					{options.map((option) => (
						<MenuItem onClick={handleClose}>{option}</MenuItem>
					))}
				</Menu>
			</Box>
		</Stack>
	);
};

export default FileActionIcons;
