import { CSSObject } from '@emotion/react';
import colorPalette from '@styles/color-palette';

export const filterHeader: CSSObject = {
	fontWeight: 500,
	fontSize: '14px',
	color: colorPalette.middleGray,
	pl: 1,
};

export const filterHeaderVoiceSearch: CSSObject = {
	color: colorPalette.green,
};

export const chipList: CSSObject = {
	display: 'flex',
	justifyContent: 'flex-start',
	flexWrap: 'wrap',
	listStyle: 'none',
	p: 0.5,
	m: 0,
};

export const inactiveChipListItem: CSSObject = {
	'& .MuiChip-root': {
		backgroundColor: 'transparent',
		border: `1px solid ${colorPalette.textBlue}`,
	},
	'& .MuiChip-label': {
		color: colorPalette.textBlue,
		fontSize: '12px',
		fontWeight: 600,
		textTransform: 'capitalize',
	},
};

export const activeChipListItem: CSSObject = {
	'& .MuiChip-root': {
		backgroundColor: colorPalette.green,
		border: undefined,
	},
	'& .MuiChip-label': {
		color: colorPalette.black,
		fontSize: '12px',
		fontWeight: 600,
		textTransform: 'capitalize',
	},
};
