import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const sessionWidgetStyle: CSSObject = {
	display: 'flex',
	justifyContent: 'center',
	'& .MuiGrid-container': {
		width: '100%',
		maxWidth: '1440px',
		height: '100px',
		border: `2px solid ${colorPalette.green}`,
		borderRadius: '24px',
		background: colorPalette.buttonBlueStrong,
		boxShadow: '0px 0px 28px 0px rgba(46, 149, 203, 0.24)',
		'& .MuiGrid-item': {
			'& .MuiAvatar-root': {
				width: '60px',
				height: '60px',
			},
			'& .MuiBox-root': {
				'& .MuiTypography-body1': {
					fontSize: '14px',
					fontWeight: 400,
					color: colorPalette.textBlue,
				},
				'& .MuiTypography-h6': {
					ontSize: '12px',
					fontWeight: 500,
					color: colorPalette.white,
				},
			},
			'& .MuiTypography-body1': {
				fontSize: '14px',
				fontWeight: 400,
				color: colorPalette.textBlue,
			},
		},
	},
};
