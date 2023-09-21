import { CSSObject } from '@mui/material/styles';

import colorPalette from '@styles/color-palette';

export const appointmentButton: CSSObject = {
	alignItems: 'center',
	backgroundColor: colorPalette.green,
	borderRadius: '1.5rem',
	color: colorPalette.black,
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: '600',
	justifyContent: 'center',
	lineHeight: 'normal',
	padding: '12px 20px 12px 12px',
	position: 'absolute',
	right: '1vw',
	textAlign: 'center',
	textTransform: 'capitalize',
	// Does not work, fixing it would solve issue in main styling
	'.MuiButton-root:hover': {
		// '&:hover': {
		backgroundColor: colorPalette.textBlue,
		// }
	},
};
