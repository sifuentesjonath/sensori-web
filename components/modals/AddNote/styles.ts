import { CSSObject } from '@mui/material';
import colorPalette from '@styles/color-palette';

export const addNoteModal: CSSObject = {
	width: '724px',
	height: '682px',
	borderRadius: '24px',
	boxShadow: '0pc 8px 52px 0px rgba(8,27,37,0.60)',
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: colorPalette.backgroundModal,
	border: '2px solid #000',
	padding: '24px',
	'& .MuiTypography-root': {
		position: 'absolute',
		width: 'fit-content',
		top: '32px',
		left: '32px',
	},
	'& .MuiGrid-container': {
		width: '100%',
		height: '100%',
		paddingTop: '20px',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '2.5rem',
		background: '#EEF9FF',
		borderRadius: '24px',
	},
};
