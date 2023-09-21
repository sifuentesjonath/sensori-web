import React, { useState, useEffect } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import colorPalette from '@styles/color-palette';
import { searchMicButton } from '../../../style';

interface ISearchBarInputProps extends OutlinedTextFieldProps {
	startAdornment?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
		muiName: string;
	};
	endAdornment?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
		muiName: string;
	};

	// Would it be better that the endAdorment would be wrapped in a IconButton with a onClick action?
	onVoiceSearchClick?: (searchValue) => void;
}

const SearchBarInput = (props: ISearchBarInputProps) => {
	const { startAdornment: StartAdornment, endAdornment: EndAdornment } = props;
	const [searchTerm, setSearchTerm] = useState('');

	const handleClear = () => {
		setSearchTerm('');
	};

	const handleOnChange = (event) => {
		const value = event.target.value;
		setSearchTerm(value);
	};

	const inputProps = {
		autoFocus: true,
		disableUnderline: true,
		startAdornment: (
			<InputAdornment position='start'>
				{StartAdornment ? (
					<Box
						sx={{
							width: '38px',
							height: '38px',
							borderRadius: '32px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							...searchMicButton,
						}}
					>
						<StartAdornment />
					</Box>
				) : (
					<SearchIcon
						sx={{
							color: colorPalette.textBlue,
						}}
					/>
				)}
			</InputAdornment>
		),
		endAdornment: (
			<InputAdornment position='end'>
				<IconButton onClick={handleClear}>
					{EndAdornment ? (
						<Stack
							direction='row'
							sx={{
								color: colorPalette.textBlue,
							}}
						>
							<Typography variant='subtitle2'>Clear</Typography>
							<EndAdornment />
						</Stack>
					) : (
						<MicNoneIcon />
					)}
				</IconButton>
			</InputAdornment>
		),
		sx: {
			color: colorPalette.black,
			fontWeight: 500,
		},
	};

	return (
		// Form might be unnecessary???
		<form>
			<TextField
				onChange={handleOnChange}
				value={searchTerm}
				disabled={props.disabled}
				sx={{
					display: 'flex',
				}}
				InputProps={inputProps}
				variant='standard'
				placeholder={'Search...'}
			/>
		</form>
	);
};

export default SearchBarInput;
