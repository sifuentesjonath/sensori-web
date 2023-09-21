import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const fullNervousStyle: CSSObject = {
	width: '855px',
	height: '660px',
	borderRadius: '16px',
	border: '1px solid #164760',
	padding: '12px 16px',
	'& .MuiTypography-root': {
		position: 'absolute',
		color: colorPalette.white,
		fontSize: '16px',
		fontWeight: 600,
	},
	'& .MuiBox-root': {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'& .full-system': {
			width: 'min-content',
			//@ts-ignore
			height: '560px',
			justifySelf: 'center',
			alignSelf: 'ccenter',
		},
	},
};
