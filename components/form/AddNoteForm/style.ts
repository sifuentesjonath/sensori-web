import { CSSObject } from '@mui/material';
import { scrollStyleRemoval } from '@screens/Library/style';
import colorPalette from '@styles/color-palette';

export const addNoteFormStyle: CSSObject = {
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
				...scrollStyleRemoval,
				borderRadius: '4px',
				border: '0.5px solid #000',
				background: colorPalette.white,
				'& .MuiInputBase-root.MuiOutlinedInput-root': {
					...scrollStyleRemoval,
					borderRadius: '4px',
				},
				'& .MuiInputBase-input.MuiOutlinedInput-input': {
					...scrollStyleRemoval,
				},
				'& .MuiFormHelperText-root': {
					...scrollStyleRemoval,
					color: colorPalette.buttonRed,
				},
			},
		},
	},
};
