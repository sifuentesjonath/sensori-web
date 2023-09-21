'use client';
import { paths } from '@utils/paths';
import { redirect, useRouter } from 'next/navigation';
import React, { useState, createContext } from 'react';

const initialContext = {
	open: false,
	sessionState: false,
	drawerWidth: 240,
	toggleDrawer: () => {},
	toggleWidget: () => {},
	toggleEndSession: () => {},
	toggleOpenCurrentSession: () => {},
	toggleCloseCurrentSession: () => {},
};
export const AppContext = createContext(initialContext);

const AppProvider = (props: { children: any }) => {
	const router = useRouter();
	const drawerWidth: number = 240;
	const [open, setOpen] = useState(true);
	const [sessionState, setSessionState] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const toggleWidget = () => {
		setSessionState(!sessionState);
	};

	const toggleEndSession = () => {
		if (sessionState) setSessionState(!sessionState);
	};

	const toggleOpenCurrentSession = () => {
		router.replace(paths.currentsession);
	};

	const toggleCloseCurrentSession = () => {
		router.replace(paths.sessions);
	};

	return (
		<AppContext.Provider
			value={{
				open,
				sessionState,
				drawerWidth,
				toggleDrawer,
				toggleWidget,
				toggleEndSession,
				toggleOpenCurrentSession,
				toggleCloseCurrentSession,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppProvider;
