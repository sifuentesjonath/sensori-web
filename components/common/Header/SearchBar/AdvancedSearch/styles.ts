import { CSSObject } from '@emotion/react';

import colorPalette from '@styles/color-palette';

/**
 * The apparent code duplication here is due to the MUI selectors
 * if we were not using them there not would be necessity of code duplication
 * so:
 * !!! IF YOU MODIFY  advancedSearchContainer MAKE SURE YOU ALSO MODIFY
 * advancedSearchContainerVoiceSearch !!!
 */
export const advancedSearchContainer: CSSObject = {
	'& .MuiPaper-root': {
		backgroundColor: colorPalette.backgroundModal,
		minWidth: '428px',
		maxWidth: '428px',
		maxHeight: '90vh',
		minHeight: '90vh',
		borderRadius: '24px',
	},
	'& .MuiDialogContent-root': {
		flex: 'none',
		p: 1,
	},
};
export const advancedSearchContainerVoiceSearch: CSSObject = {
	'& .MuiPaper-root': {
		backgroundColor: colorPalette.voiceSearchBackground,
		minWidth: '428px',
		maxWidth: '428px',
		maxHeight: '90vh',
		minHeight: '90vh',
		borderRadius: '24px',
	},
	'& .MuiDialogContent-root': {
		flex: 'none',
		p: 1,
	},
};
