import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const fullViewButton: CSSObject = {
	minWidth: '0.5rem !important',
	minHeight: '1rem !important',
	position: 'relative',
	background: 'initial',
	padding: '0',
	alignSelf: 'end',
	top: '2px',
	fontSize: '12px',
	color: '#2E95CB',
	'&:hover,&:focus': {
		color: colorPalette.green,
		background: 'initial',
		'& .MuiButton-endIcon': {
			'& .MuiSvgIcon-root': {
				color: colorPalette.green,
			},
		},
	},
	'& .MuiButton-endIcon': {
		widht: '24px',
		margin: '0',
		'& .MuiSvgIcon-root': {
			width: '1.8rem',
		},
	},
};

// TODO: when merge sens-5 to dev and get the change on dev change this to colorPalette prop
// TODO: Change all the background color and add to the colorPalette
export const cardStyle: CSSObject = {
	width: '241px',
	height: '548px',
	display: 'flex',
	flexDirection: 'column',
	flexShrink: 0,
	background: '#1E6184',
	borderRadius: '16px',
	paddingBottom: 0,
	'& .MuiCardContent-root': {
		height: '200vh',
		padding: '0 10px',
		paddingBottom: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		justifyContent: 'space-around',
		borderRadius: '16px',
	},
	'& .MuiBox-root': {
		'& img': {
			width: '80px',
			height: '80px',
			flexShrink: 0,
			borderRadius: '3000px',
		},
	},
	'& .MuiPaper-root': {
		width: '222px',
		height: '231px',
		flexShrink: 0,
		background: '#164760',
		borderRadius: '16px',
	},
	'& .MuiTypography-root': {
		display: 'flex',
		color: ' #71B9DF',
		fontSize: '14px',
		fontWeight: 400,
		paddingLeft: '8px',
	},
};

export const textData: CSSObject = {
	color: colorPalette.white + '!important',
	fontSize: '16px !important',
	fontWeight: 600 + '!importnant',
};

export const cardStyleCurrentSession: CSSObject = {
	width: '316px',
	height: '548px',
	display: 'flex',
	flexDirection: 'column',
	flexShrink: 0,
	background: '#1E6184',
	borderRadius: '16px',
	paddingBottom: 0,
	'& .MuiCardContent-root': {
		height: '200vh',
		padding: '0 10px',
		paddingBottom: 0,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		gap: '12px',
		borderRadius: '16px',
	},
	'& .MuiBox-root': {
		'& img': {
			width: '70px',
			height: '70px',
			flexShrink: 0,
			borderRadius: '3000px',
		},
	},
	'& .MuiPaper-root': {
		width: '296px',
		height: '236px',
		flexShrink: 0,
		background: '#164760',
		borderRadius: '16px',
	},
	'& .MuiTypography-root': {
		display: 'flex',
		color: ' #71B9DF',
		fontSize: '14px',
		fontWeight: 400,
		paddingLeft: '8px',
	},
};
