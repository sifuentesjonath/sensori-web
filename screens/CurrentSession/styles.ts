import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const currentSessionStyles: CSSObject = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	'& .MuiGrid-container': {
		background: colorPalette.buttonBlueStrong,
		borderRadius: '24px',
		border: `2px solid ${colorPalette.green}`,
		height: '988px',
		width: '1400px',
		padding: '12px',
		position: 'relative',
		'& .box-image': {
			position: 'absolute',
			height: 'fit-content',
			right: 0,
		},
	},
};

export const experienceWidgetStyles: CSSObject = {
	width: '316px',
	height: '294px',
	borderRadius: '16px',
	background: '#1E6184',
	padding: '16px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '12px',
	'& .MuiTypography-root': {
		fontSize: '16px',
		color: colorPalette.white,
		fontWeight: 600,
	},
	'& .MuiGrid-root': {
		'& .MuiButtonBase-root': {
			textTransform: 'none',
			'&:hover,&:focus': {
				color: colorPalette.green,
				background: 'initial',
				'& .MuiButton-endIcon': {
					'& .MuiSvgIcon-root': {
						color: colorPalette.green,
					},
				},
			},
		},
	},
	'& .change-experience': {
		height: '40px',
		width: '21em',
		color: colorPalette.black,
		fontWeight: 'bold',
		borderRadius: '12px',
	},
};
