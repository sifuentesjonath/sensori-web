import { createTheme } from '@mui/material';
import colorPalette from '../color-palette';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		dashed: true;
	}
}

export const ButtonTheme = createTheme({
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					'&.MuiButton-containedPrimary': {
						height: '2.6rem',
						background: `${colorPalette.green}`,
						border: '1px solid #a12727',
						borderRadius: '16px',
						borderStyle: 'none',
					},
					'&.MuiButton-containedSecondary': {
						height: '2.6rem',
						border: '1px solid #a12727',
						borderRadius: '16px',
						background: `${colorPalette.green}`,
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent',
						'background-clip': 'text',
						'text-fill-color': 'transparent',
					},
					'&.MuiButton-outlinedPrimary': {
						height: '2.6rem',
						border: '1px solid #a12727',
						borderRadius: '16px',
						background: `${colorPalette.green}`,
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent',
						'background-clip': 'text',
						'text-fill-color': 'transparent',
					},
					'&.MuiButton-textPrimary': {
						height: '2.6rem',
						borderRadius: '16px',
						background: `${colorPalette.green}`,
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent',
						'background-clip': 'text',
						'text-fill-color': 'transparent',
					},
				},
			},
			variants: [
				{
					props: { variant: 'dashed' },
					style: {
						textTransform: 'none',
						border: `2px dashed ${colorPalette.green}`,
					},
				},
			],
		},
	},
});
