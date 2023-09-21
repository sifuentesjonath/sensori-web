import { CSSObject } from '@mui/styled-engine-sc';
import colorPalette from '@styles/color-palette';

export const dragNDropButton: CSSObject = {
	padding: 3,
	alignItems: 'center',
	borderRadius: 2,
	color: colorPalette.green,
	display: 'flex',
	flexDirection: 'column',
	fontWeight: 600,
	textTransform: 'capitalize',
};

export default dragNDropButton;
