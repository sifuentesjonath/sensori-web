import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

import colorPalette from '@styles/color-palette';
import {
	Grid,
	Modal,
	useTheme,
	Menu,
	MenuItem,
	CssBaseline,
	Popover,
} from '@mui/material';
import { headerSides, headerUserAccount } from './style';
import { useState } from 'react';
import { SettingsModal } from '@components/modals/SettingsModal';
import Notifications, {
	INotificationsProps,
} from '@components/element/Notifications';
import EmailNotifications, {
	IEmailNotificationsProps,
} from '@components/element/EmailNotifications';
import { mockupNotifications, mockupEmails, mockupOptions } from './mockup';
import { useSelector, useDispatch } from 'react-redux';
import { getModalState } from '@redux/slices/modal/modal.selectors';
import { setModalState } from '@redux/slices/modal/modal.actions';
interface HeaderUserWidgetProps {
	userDisplayName: string;
	role: string;
	notifications?: INotificationsProps;
	emailNotifications?: IEmailNotificationsProps;
	avatarImage: string;
}

export const HeaderUserWidget = ({
	notifications = { notifications: mockupNotifications },
	emailNotifications = { emails: mockupEmails },
	role,
	userDisplayName,
	avatarImage,
}: HeaderUserWidgetProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [userSelectOpened, setUserSelectOpened] = useState<boolean>(false);
	const { Oppened, Component } = useSelector(getModalState);
	const dispatch = useDispatch();

	const handleEngineToogle = () => {
		dispatch(
			setModalState({
				Name: '',
				Oppened: !Oppened,
				Component: <SettingsModal />,
			})
		);
	};

	const handleSelectToogle = () => {
		setUserSelectOpened(!userSelectOpened);
	};

	const ITEM_HEIGHT = 48;

	const theme = useTheme();
	return (
		<>
			<CssBaseline />
			<Grid sx={{ ...headerSides }} component='nav'>
				<Grid
					sx={{
						[theme.breakpoints.down(940)]: {
							display: 'none',
						},
					}}
				>
					<Notifications {...notifications} />
					<EmailNotifications {...emailNotifications} />
					<IconButton
						onClick={handleEngineToogle}
						sx={{
							color: colorPalette.textBlue,
						}}
					>
						<SettingsOutlinedIcon />
					</IconButton>
				</Grid>
				<Grid sx={{ ...headerUserAccount }} className='account-container'>
					<Box
						sx={{
							[theme.breakpoints.down(464)]: {
								display: 'none',
							},
						}}
					>
						<Avatar>{avatarImage}</Avatar>
					</Box>
					<Box
						sx={{
							[theme.breakpoints.down('lg')]: {
								display: 'none',
							},
						}}
					>
						<Typography variant='h6'>{userDisplayName}</Typography>
						<Typography variant='body2'>{role}</Typography>
					</Box>
					<Box>
						<IconButton onClick={handleSelectToogle}>
							<ExpandCircleDownOutlinedIcon />
							<Menu
								anchorEl={anchorEl}
								open={userSelectOpened}
								onClose={handleSelectToogle}
								sx={{
									'& .MuiMenu-paper': {
										right: '46px',
										top: '80px !important',
										left: '80% !important',
									},
									[theme.breakpoints.down('md')]: {
										'& .MuiMenu-paper': {
											right: '20px',
											top: '80px!important',
											left: '40%!important',
										},
									},
								}}
							>
								{mockupOptions.map((option) => (
									<MenuItem
										key={option}
										selected={option === 'Pyxis'}
										onClick={handleSelectToogle}
									>
										{option}
									</MenuItem>
								))}
							</Menu>
						</IconButton>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
