import colorPalette from '@styles/color-palette';
import { createTheme, outlinedInputClasses } from '@mui/material';

// TODO remove, folder styles/themes.
export const loginTheme = createTheme({
	components: {
		MuiGrid: {
			styleOverrides: {
				root: {
					backgroundColor: colorPalette.backgroundBlue,
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: 'white',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'--TextField-brandBorderColor': colorPalette.gray,
					'--TextField-brandBorderHoverColor': colorPalette.gray,
					'--TextField-brandBorderFocusedColor': colorPalette.gray,
					backgroundColor: 'white',
					borderRadius: '4px',
					width: '328px',

					'.MuiInputLabel-root': {
						fontWeight: 'bold',
					},

					'& label.Mui-focused': {
						color: 'var(--TextField-brandBorderFocusedColor)',
						marginTop: '8px',
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: 'var(--TextField-brandBorderColor)',
				},
				root: {
					[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
						borderColor: 'var(--TextField-brandBorderHoverColor)',
					},
					[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
						borderColor: 'var(--TextField-brandBorderFocusedColor)',
					},
				},
			},
		},
	},
});
