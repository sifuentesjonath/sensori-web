import { device } from '@styles/breakPoints';
import colorPalette from '@styles/color-palette';
import { CSSObject, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import styledComponent from 'styled-components';

export const loginContainer: CSSObject = {
	background: colorPalette.backgroundBlue,
	height: '100vh',
	minWidth: '380px',
	display: 'flex',
	position: 'absolute',
	alignItems: 'center',
	justifyContent: 'center',
};

export const mainContainer: CSSObject = {
	background: colorPalette.backgroundBlue,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100vw',
	height: 'auto',
	paddingTop: '0.4rem',
};

export const loginCard: CSSObject = {
	background: colorPalette.backgroundBlue,
	height: '100%',
	width: '412px',
	display: 'flex',
	flexDirection: 'column',
	gap: '1.6rem',
	'& img': {
		width: '189.75px',
		height: '66px',
		flexShrink: '0',
	},
	'& .MuiTypography-h3': {
		color: colorPalette.white,
		fontWeight: 'bold',
		fontSize: '40px',
	},
	'& .MuiTypography-body2': {
		color: colorPalette.textBlue,
		width: '400px',
		alignSelf: 'start',
		textAlign: 'start',
		fontWeight: 400,
		fontSize: '18px',
	},
};

export const imageLeftContainer: CSSObject = {
	height: '100%',
	'& img': {
		position: 'relative',
		zIndex: 1,
		width: '100%',
		height: '100vh',
	},
};

export const brainContainer: CSSObject = {
	'& img': {
		zIndex: 2,
		right: '60px',
		bottom: 0,
		position: 'absolute',
		width: '569px',
		height: '512px',
	},
};
