import { alpha, CSSObject, InputBase, styled, Typography } from '@mui/material';
import Link from 'next/link';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import colorPalette from '@styles/color-palette';
import { device } from '@styles/breakPoints';

export interface IAppBarProps extends MuiAppBarProps {
	open?: boolean;
	drawerwidth?: number;
	onClick?: () => void;
	startSession?: () => void;
}

export const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<IAppBarProps>(({ theme, open, drawerwidth: drawerWidth }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		backgroundColor: colorPalette.backgroundBlue,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

export const appContainer: CSSObject = {
	display: 'flex',
	width: '100%',
	flexDirection: 'column',
};

export const headerContainer: CSSObject = {
	position: 'initial',
	backgroundColor: colorPalette.backgroundBlue,
	height: '92px',
	padding: '16px 20px',
	boxShadow: 'none',
	'& .MuiToolbar-root': {
		paddingLeft: '0',
		paddingRight: '0',
	},
};

export const headerGroup: CSSObject = {
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
};

export const headerSides: CSSObject = {
	display: 'flex',
	alignItems: 'center',
	gap: '1rem',
};

//LEFT SIDE
export const headerMenuBurger: CSSObject = {
	alignItems: 'center',
	marginTop: '4px',
	'& .MuiButtonBase-root': {
		marginRight: '36px',
		padding: 0,
	},
};

export const headerButton: CSSObject = {
	alignItems: 'center',
	width: '162px',
	'& .MuiButtonBase-root': {
		color: 'white !important',
		background: colorPalette.purple,
		height: '52px',
		borderRadius: '12px',
		textAlign: 'center',
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: 600,
		lineHeight: 'normal',
		'& img': {
			marginRight: '8px',
		},
	},
};

export const headerSearch: CSSObject = {
	'& .MuiFormControl-root': {
		'& .MuiInputBase-root': {
			background: colorPalette.buttonBlueStrong,
			borderRadius: '32px',
			height: '40px',
			'& .MuiInputAdornment-root': {
				'& .MuiSvgIcon-root': {
					color: colorPalette.textBlue,
				},
				'& .MuiButtonBase-root': {
					margin: '0',
					width: '28px',
					height: '28px',
					flexShrink: '0',
					backgroundColor: colorPalette.green,
					strokeWidth: '1px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginLeft: '4px',
					'& .MuiSvgIcon-root': {
						color: colorPalette.black,
					},
				},
			},
			'& .MuiInputBase-input': {
				color: colorPalette.white,
			},
		},
	},
};

export const searchBarButton: CSSObject = {
	background: colorPalette.buttonBlueStrong,
	borderRadius: '32px',
	border: 'none',
	color: colorPalette.white,
	display: 'flex',
	height: '48px',
	justifyContent: 'space-between',
	textTransform: 'capitalize',
	fontSize: '14px',
	fontWeight: 500,
	width: '327px',
	':hover': {
		backgroundColor: colorPalette.buttonBlueStrong,
		border: 'none',
	},
};

export const searchMicButton: CSSObject = {
	backgroundColor: colorPalette.green,
	border: `1px solid ${colorPalette.black}`,
	color: colorPalette.black,
	height: '38px',
	width: '38px',
};

export const headerUserAccount: CSSObject = {
	width: 'auto',
	display: 'flex',
	gap: '8px',
	'& .MuiAvatar-root': {
		width: 56,
		overflow: 'hidden',
		height: 56,
	},
	'& .MuiTypography-h6': {
		fontWeight: 600,
	},
	'& .MuiTypography-body2': {
		color: colorPalette.textBlue,
	},
	'& .MuiButtonBase-root': {
		p: 1,
		m: 1,
		margin: '8px',
		padding: '0%',
		'& .MuiSvgIcon-root': {
			color: colorPalette.textBlue,
		},
	},
};

export const Search = styled('div')(({ theme }) => ({
	// position: 'relative',
	// borderRadius: theme.shape?.borderRadius,
	// backgroundColor: alpha(theme.palette?.common.white, 0.15),
	// '&:hover': {
	// 	backgroundColor: alpha(theme.palette?.common.white, 0.25),
	// },
	// marginLeft: 0,
	// width: '100%',
	// [theme.breakpoints.up('sm')]: {
	// 	marginLeft: theme?.spacing(1),
	// 	width: 'auto',
	// },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
	// padding: theme?.spacing(0, 2),
	// height: '100%',
	// position: 'absolute',
	// pointerEvents: 'none',
	// display: 'flex',
	// alignItems: 'center',
	// justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	// color: 'inherit',
	// '& .MuiInputBase-input': {
	// 	padding: theme.spacing(1, 1, 1, 0),
	// 	// vertical padding + font size from searchIcon
	// 	paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	// 	transition: theme.transitions?.create('width'),
	// 	width: '100%',
	// 	[theme.breakpoints.up('sm')]: {
	// 		width: '12ch',
	// 		'&:focus': {
	// 			width: '20ch',
	// 		},
	// 	},
	// },
}));

const drawerWidth: number = 240;
