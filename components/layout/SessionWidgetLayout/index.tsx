'use client';
import { AppContext } from '@/providers/AppProvider';
import SessionWidget from '@components/widgets/SessionWidget';
import React, { useContext } from 'react';

const SessionWidgetLayout = (props: { children: any }) => {
	const { sessionState } = useContext(AppContext);
	return (
		<>
			{sessionState && <SessionWidget />}
			{props.children}
		</>
	);
};

export default SessionWidgetLayout;
