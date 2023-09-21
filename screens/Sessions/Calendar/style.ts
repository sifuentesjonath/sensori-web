import { CSSObject } from '@mui/material/styles';

import colorPalette from '@styles/color-palette';

export const calendarBox: CSSObject = {
	backgroundColor: colorPalette.buttonBlueStrong,
	borderRadius: 6,
	my: 3,
	overflowY: 'auto',
	pt: 3,
	px: 3,

	/**
	 * With aspectRatio property on FullCalendar component it might not benecessary
	 * to use this since there's not supposed to be overflow.
	 */
	'&::-webkit-scrollbar': {
		width: '0.4em',
	},
	'&::-webkit-scrollbar-track': {
		boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
		webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: 'rgba(0,0,0,.1)',
		outline: '1px solid slategrey',
	},
};
