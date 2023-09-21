import { CSSObject, Theme, styled } from '@mui/material/styles';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';

import colorPalette from '@styles/color-palette';
import { ISideProps } from '.';

export const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	justifyContent: 'space-between',
	padding: '0.8rem 0',
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
	justifyContent: 'space-between',
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 25px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 25px)`,
	},
});

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	// '& img': {},
	...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})<ISideProps>(({ theme, open, drawerwidth }) => ({
	width: drawerwidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	position: 'absolute',
	'& .MuiPaper-root': {
		backgroundColor: colorPalette.backgroundBlue,
		justifyContent: 'space-between',
		height: '100%',
		borderRight: `1px solid ${colorPalette.buttonBlue}`,
		padding: '0.8rem 0',
	},
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

export const listItem: CSSObject = {
	'& .MuiListItemButton-root': {
		border: 1,
		borderColor: colorPalette.backgroundBlue,
		'& .MuiListItemIcon-root': {
			color: colorPalette.textBlue,
		},
		'& .MuiListItemText-root': {
			color: colorPalette.textBlue,
			'& .MuiTypography-root': {
				fontWeight: 600,
			},
		},
	},
	'& .MuiListItemButton-root.Mui-selected': {
		borderColor: colorPalette.textBlue,
		'& .MuiListItemIcon-root': {
			color: colorPalette.white,
		},
		'& .MuiListItemText-root': {
			color: colorPalette.white,
		},
	},
};

export const logOutButton: CSSObject = {
	'& .MuiButton': {
		color: colorPalette.textBlue,
	},
};
