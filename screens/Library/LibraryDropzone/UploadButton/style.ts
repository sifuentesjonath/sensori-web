import { CSSObject } from '@mui/styled-engine-sc';
import colorPalette from '@styles/color-palette';

export const uploadButton: CSSObject = {
	padding: 3,
	background: colorPalette.green,
	borderRadius: 2,
	color: colorPalette.black,
	fontWeight: 600,
	textTransform: 'capitalize',
};

export default uploadButton;
