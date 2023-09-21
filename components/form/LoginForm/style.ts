import colorPalette from '@styles/color-palette';
import { Box, CSSObject } from '@mui/material';
import { styled } from '@mui/material/styles';

export const loginFormContainer: CSSObject = {
	'& form': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		gap: '0.6rem',
	},
	'& .MuiTypography-root': {
		color: colorPalette.green,
		fontWeight: 400,
		fontSize: '20px',
	},
	'& .MuiFormControl-root': {
		'& .MuiInputBase-root': {
			height: '60px',
			background: 'white',
			width: '20rem',
			borderRadius: '4px',
			'& input': {
				padding: '0 14px',
			},
		},
		'& label': {
			top: '8px',
		},
		'& .MuiFormHelperText-root': {
			color: colorPalette.buttonRed,
		},
	},
	'& a': {
		textDecoration: 'none',
		color: colorPalette.textBlue,
		fontSize: '12px',
	},
};

export const loginButtons: CSSObject = {
	alignSelf: 'start',
	marginTop: '16px',
	display: 'flex',
	flexDirection: 'row',
	width: '412px',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '1rem',
	'& button': {
		color: `${colorPalette.black}!important`,
		margin: '8px 0',
	},
	'& button:last-child': {
		margin: 0,
		padding: 0,
		color: `${colorPalette.textBlue}!important`,
		backgroundColor: colorPalette.buttonBlue,
		minWidth: '220px',
	},
};
