import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { auth } from '@auth/firebaseApp';
import { useRouter } from 'next/navigation';
import { paths } from '@utils/paths';
import { useDispatch, useSelector } from 'react-redux';
import { resetUserState } from '@redux/slices/user/user.actions';
import { getUsertAuth } from '@redux/slices/user/user.selectors';

import colorPalette from '@styles/color-palette';

interface LogOutButtonProps {
	open: boolean;
}

const LogOutButton = ({ open }: LogOutButtonProps) => {
	const router = useRouter();
	const authState = useSelector(getUsertAuth);
	const dispatch = useDispatch();

	const handleLogout = () => {
		auth.signOut();
		dispatch(resetUserState({ Email: '', Logged: false, Rol: null }));
		console.log(authState);

		setTimeout(() => {
			router.replace(paths.login);
		}, 1000);
	};
	return (
		<Button
			startIcon={<LogoutOutlinedIcon />}
			sx={{
				color: colorPalette.textBlue,
				pl: open ? 0 : 2,
			}}
			onClick={handleLogout}
		>
			{open ? 'Logout' : ''}
		</Button>
	);
};

export default LogOutButton;
