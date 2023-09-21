import { CSSObject } from '@emotion/react';
import colorPalette from '@styles/color-palette';

export const pattientContainer: CSSObject = {
	height: 'fit-content',
	width: '100%',
	position: 'absolute',
	overflow: 'scroll',
	overflowY: 'scroll',
	overflowX: 'scroll',
	display: 'flex',
	justifyContent: 'start',
	gap: '16px',
	padding: '24px',
};

export const backButtonPatient: CSSObject = {
	width: 'auto',
	height: 'auto',
	position: 'absolute',
	top: 0,
	left: 20,
	padding: 0,
	textTransform: 'none',
	color: colorPalette.textBlue,
	'& .MuiButton-startIcon': {
		padding: 0,
		margin: 0,
	},
	'&:hover': {
		color: colorPalette.gray,
	},
	'&:active': {
		color: colorPalette.gray,
	},
};
