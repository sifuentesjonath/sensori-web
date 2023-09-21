import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const updateUserFormStyle: CSSObject = {
	width: '50%',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	justifyContent: 'start',
	gap: '32px',
};

export const saveButtonStyle: CSSObject = {
	width: '96px',
	minWidth: '3rem',
	height: '40px',
	fontWeight: 600,
	borderRadius: '12px',
	color: '#081B25',
};

export const deleteButtonStyle: CSSObject = {
	width: '110px',
	minWidth: '8rem',
	height: '40px',
	borderRadius: '12px',
	color: colorPalette.white,
	background: 'initial',
	border: `1px solid ${colorPalette.buttonRed}`,
	'& .MuiTouchRipple-root': {
		color: colorPalette.buttonRed,
	},
};
export const inputStyle: CSSObject = {
	'& .MuiTypography-root': {
		color: colorPalette.stroke.labelText,
		fontSize: '14px',
		fontWeight: 400,
		textTransform: 'capitalize',
		paddingBottom: '8px',
	},
	'& .MuiFormControl-root.MuiTextField-root': {
		width: '240px',
		height: '48px',
		borderRadius: '4px',
		border: `0.5px solid ${colorPalette.black}`,
		background: colorPalette.white,
		'& .MuiInputBase-root.MuiOutlinedInput-root': {
			height: 'inherit',
			borderRadius: '4px 0 0 4px',
			'& input': {
				height: '14px',
				borderRadius: '12px',
			},
		},
		'& .MuiFormHelperText-root': {
			color: colorPalette.buttonRed,
		},
	},
	'& .MuiButton-root': {
		width: '240px',
		height: '48px',
		background: colorPalette.buttonBlue,
		color: colorPalette.white,
		padding: '16px',
		justifyContent: 'start',
		borderRadius: '4px',
	},
};

export const selectImageBtn: CSSObject = {
	'& .MuiBox-root': {
		position: 'absolute',
		width: '85%',
		height: '85%',
		clipPath: 'polygon(100% 100%, 0% 100%, 0% 72%, 100% 72%)',
		background: colorPalette.gray,
		mixBlendMode: 'multiply',
		borderRadius: '300px',
		display: 'flex',
		alignItems: 'end',
		justifyContent: 'center',
		paddin: '2px',
	},
};
