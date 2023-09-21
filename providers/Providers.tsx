'use client';
import { ComponentWithChildrenType } from '@/types/common/react';
import { ThemeProvider } from '@mui/material';
import ReduxProvider from './ReduxProvider';

/**
 * Use this component to insert providers to main website
 */
const Providers: ComponentWithChildrenType = ({ children }) => {
	return (
		<ReduxProvider>
			{/* TODO: Provide a global theme, this is a workaround to avoid warning in console  */}
			<ThemeProvider theme={{}}>{children}</ThemeProvider>
		</ReduxProvider>
	);
};

export default Providers;
