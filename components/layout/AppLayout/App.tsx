'use client';
import React, { ReactNode, useContext } from 'react';
import { AppContext } from '@/providers/AppProvider';
import { Box, CSSObject, CssBaseline } from '@mui/material';
import colorPalette from '@styles/color-palette';
import Logo from '@components/common/Logo';
import Header from '@components/common/Header';
import Sidebar from '@components/common/Sidebar';
import { usePathname } from 'next/navigation';
import { paths } from '@utils/paths';

const appStyle: CSSObject = {
	height: '100vh',
	width: '100vw',
	position: 'relative',
	backgroundColor: colorPalette.backgroundBlue,
	overflowY: 'auto',
};

const App = (props: { children: any }) => {
	const currentPath = usePathname();
	const { open, sessionState, toggleWidget, toggleDrawer, drawerWidth } =
		useContext(AppContext);

	if (currentPath === paths.currentsession) {
		return (
			<Box
				sx={{
					width: '100vw',
					height: '100vh',
					overflow: 'scroll',
					overflowY: 'scroll',
					overflowX: 'scroll',
					position: 'fixed',
					backgroundColor: colorPalette.backgroundBlue,
					padding: '1em',
				}}
			>
				<CssBaseline />
				{props.children}
			</Box>
		);
	}

	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
			<CssBaseline />
			<Box
				sx={{
					width: '100vw',
					position: 'fixed',
					backgroundColor: colorPalette.backgroundBlue,
				}}
			>
				<>
					<Header
						open={open}
						drawerwidth={drawerWidth}
						onClick={toggleDrawer}
						// startSession={toggleWidget}
					/>
					<Sidebar
						open={open}
						drawerwidth={drawerWidth}
						onClick={toggleDrawer}
					/>
					<Box
						sx={{
							...appStyle,
							left: open ? drawerWidth : 'calc(64px + 25px)',
						}}
					>
						{props.children}
					</Box>
				</>
			</Box>
		</Box>
	);
};

export default App;
