import {
	IconButton,
	Badge,
	Popover,
	Typography,
	useTheme,
	Divider,
} from '@mui/material';
import Link from 'next/link';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import React, { useState } from 'react';
import colorPalette from '@styles/color-palette';

export interface INotificationsProps {
	notifications: {
		id: number;
		message: string;
		date: string;
	}[];
}

const Nofitications = ({
	notifications = [{ id: 0, message: '', date: '' }],
}: INotificationsProps) => {
	const [notificationOpened, setNotificationOpened] = useState<boolean>(false);
	const idNotification = notificationOpened ? 'simple-popover' : undefined;
	const theme = useTheme();

	return (
		<IconButton
			size='large'
			aria-label='show 17 new notifications'
			color='inherit'
			onClick={() => setNotificationOpened(!notificationOpened)}
		>
			<Badge badgeContent={notifications.length} color='error'>
				<NotificationsOutlinedIcon aria-describedby={idNotification} />
				<Popover
					id={idNotification}
					open={notificationOpened}
					onClose={() => setNotificationOpened(!notificationOpened)}
					sx={{
						'& .MuiPaper-root.MuiPopover-paper': {
							background: colorPalette.white,
							top: '76px !important',
							right: '0',
							width: '400px',
							left: 'calc(100% - 856px) !important',
							'& a': {
								textDecoration: 'none',
								color: colorPalette.textBlue,
								'& .MuiTypography-root': {
									padding: '8px',
								},
							},
						},
						[theme.breakpoints.down('lg')]: {
							'& .MuiPaper-root.MuiPopover-paper': {
								left: 'calc(100% - 656px) !important',
							},
						},
					}}
				>
					{/* //TODO: Create map whit notifications array. */}
					{notifications.map((notification) => {
						return (
							<Link href={'#'} id={`${notification.id}`}>
								<Typography>{`${notification.message} ${notification.date}`}</Typography>
								<Divider />
							</Link>
						);
					})}
				</Popover>
			</Badge>
		</IconButton>
	);
};

export default Nofitications;
