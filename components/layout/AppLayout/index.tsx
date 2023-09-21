'use client';
//Styles
import { fontTheme } from '@styles/themes/font';
//MUI material
import { useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
//Componentes
import { useSelector } from 'react-redux';
import { getUsertAuth } from '@redux/slices/user/user.selectors';
import { redirect } from 'next/navigation';
import { paths } from '@utils/paths';
import CustomModal from '@components/modals/CustomModal';

import AppProvider from '@/providers/AppProvider';
import App from './App';

const AppLayout = (props: { children: any }) => {
	const theme = useTheme();
	const authStatus = useSelector(getUsertAuth);

	if (!authStatus.Logged) redirect(paths.login);

	return (
		<>
			<ThemeProvider theme={fontTheme}>
				<AppProvider>
					<App>{props.children}</App>
				</AppProvider>
			</ThemeProvider>
			<CustomModal />
		</>
	);
};

export default AppLayout;
