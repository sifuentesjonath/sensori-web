import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const uploadFileForm: CSSObject = {
	'& .MuiGrid-container': {
		'& label': {
			cursor: 'pointer',
		},
		'& .MuiBox-root': {
			width: '658px',
			height: '238px',
			margin: '22px 0 32px 0',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '10px',
			flexShrink: 0,
			borderRadius: '12px',
			border: '1.2px dashed #438CBF',
			'& .MuiTypography-root': {
				position: 'inherit',
			},
			'& .MuiTypography-h6': {
				fontSize: '24px',
				fontStyle: 'normal',
				fontWeight: 700,
			},
			'& .MuiTypography-subtitle2': {
				color: colorPalette.textBlue,
				fontSize: '16px',
				fontStyle: 'normal',
				fontWeight: '500',
				lineHeight: 'normal',
			},
		},
		'& .MuiGrid-root.MuiGrid-item': {
			display: 'flex',
			flexDirection: 'row',
			'& .MuiTypography-body1': {
				position: 'absolute',
				fontSize: '14px',
				fontStyle: 'normal',
				fontWeight: 400,
				textTransform: 'capitalize',
			},
			'& .MuiFormControl-root.MuiTextField-root': {
				height: '48px',
				borderRadius: '4px 0 0 4px',
				border: '0.5px solid #000',
				background: colorPalette.white,
				'& .MuiInputBase-root.MuiOutlinedInput-root': {
					height: 'inherit',
					borderRadius: '4px 0 0 4px',
				},
				'& .MuiFormHelperText-root': {
					color: colorPalette.buttonRed,
				},
			},
		},
	},
};

export const browserButton: CSSObject = {
	borderRadius: '0px 4px 4px 0px',
	border: `0.5px solid ${colorPalette.black}`,
	background: `${colorPalette.green} !important`,

	fontWeight: '600',
	color: colorPalette.textBlueStrong,
};

export const buttonsActionContainer: CSSObject = {
	display: 'flex',
	width: '100%',
	justifyContent: 'end',
	gap: '16px',
};
export const cancelButton: CSSObject = {
	minWidth: '6rem',
	minHeight: '3rem',
	background: 'initial',
	color: colorPalette.textBlueStrong,
	borderRadius: '16px',
	border: `1px solid ${colorPalette.textBlueStrong}`,
	boxShadow: '0px 4px 12px 0px rgba(67, 140, 191, 0.12)',
};

export const uploadFile: CSSObject = {
	minWidth: '160px',
	minHeight: '3rem',
	borderRadius: '16px',
	background: ' #1E6184',
	color: colorPalette.white,
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: 'normal',
	boxShadow: '0px 4px 12px 0px rgba(67, 140, 191, 0.12)',
};
