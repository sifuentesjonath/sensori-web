//Styles
import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const startSessionContainer: CSSObject = {
	width: '724px',
	height: '572px',
	borderRadius: '24px',
	boxShadow: '0pc 8px 52px 0px rgba(8,27,37,0.60)',
	position: 'absolute' as 'absolute',
	display: '',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	'& .MuiGrid-container': {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '2.5rem',
		background: '#EEF9FF',
		borderRadius: '24px',
		'& .MuiGrid-item': {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'inherit',
			gap: '10px',
			// '& .MuiButtonBase-root': {
			// 	minWidth: '200px',
			// 	width: '200px',
			// 	height: '60px',
			// 	justifyContent: 'start',
			// 	gap: '4px',
			// 	padding: '6px 22px',
			// 	borderRadius: '16px',
			// 	color: colorPalette.white,
			// 	textTransform: 'none',
			// 	fontSize: '16px',
			// 	fontStyle: 'normal',
			// 	fontWeight: '600',
			// 	lineHeight: 'normal',
			// 	boxShadow: 'none',
			// 	'& .MuiButton-startIcon': {
			// 		margin: 0,
			// 		'& .MuiSvgIcon-root': {
			// 			width: 'auto',
			// 			height: '32px',
			// 		},
			// 	},
			// },
			'& .MuiTypography-h3': {
				textAlign: 'center',
				fontSize: '32px',
				fontStyle: 'normal',
				fontWeight: '700',
				lineHeight: '113%',
				margin: 0,
			},
			'& .MuiTypography-body1': {
				color: colorPalette.textBlue,
				textAlign: 'center',
				fontSize: '16px',
				fontStyle: 'normal',
				fontWeight: '500',
				lineHeight: 'normal',
				margin: 0,
			},
		},
	},
	// '& .MuiButtonBase-root.MuiButton-root.MuiLoadingButton-root.MuiButton-text': {
	// 	minWidth: '0.5rem !important',
	// 	minHeight: '1rem !important',
	// 	position: 'absolute',
	// 	background: 'initial',
	// 	top: 8,
	// 	right: 12,
	// 	boxShadow: 'none',
	// 	textAling: 'center',
	// 	'&:hover,&:focus': {
	// 		color: colorPalette.black,
	// 		'& .MuiButton-endIcon': {
	// 			'& .MuiSvgIcon-root': {
	// 				color: colorPalette.buttonRed,
	// 			},
	// 		},
	// 	},
	// 	'& .MuiButton-endIcon': {
	// 		widht: '24px',
	// 		margin: '0',
	// 		'& .MuiSvgIcon-root': {
	// 			width: '1.8rem',
	// 		},
	// 	},
	// },
	// '& .MuiButtonBase-root.MuiButton-root.MuiLoadingButton-root.Mui-disabled': {
	// 	background: 'initial',
	// 	color: colorPalette.black,
	// 	border: '1px solid #2E95CB',
	// 	width: '244px',
	// 	gap: '6px',
	// },
};

// export const endSessionButton: CSSObject = {
// 	background: colorPalette.buttonRed,
// 	'&:hover,&:focus': { background: colorPalette.buttonBlueLow },
// };

// export const pauseSessionButton: CSSObject = {
// 	background: colorPalette.buttonBlack,
// 	'&:hover,&:focus': { background: colorPalette.buttonBlueLow },
// };

// export const restartSessionButton: CSSObject = {
// 	background: colorPalette.buttonBlueStrong,
// 	padding: '6px 16px !important',
// 	'&:hover,&:focus': {
// 		background: colorPalette.buttonBlueLow,
// 	},
// };

// export const showSessionButton: CSSObject = {
// 	width: '284px !important',
// 	marginTop: '12px',
// 	background: colorPalette.buttonBlueLow,
// 	color: `${colorPalette.textPurple}!important`,
// 	'&:hover,&:focus': {
// 		background: colorPalette.black,
// 	},
// };
