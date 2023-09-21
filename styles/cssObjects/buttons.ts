import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const purpleButton: CSSObject = {
	background: colorPalette.purple,
	color: colorPalette.white,
	borderRadius: '12px',
	textAlign: 'center',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: 600,
	lineHeight: 'normal',
	textTransform: 'none',
};

export const greenButton: CSSObject = {
	display: 'flex',
	justifyContent: 'center',
	background: colorPalette.green,
	borderRadius: '16px',
	boxShadow: '0px 4px 12px 0px rgba(67, 140, 191, 0.12)',
};
