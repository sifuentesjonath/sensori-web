import { useState } from 'react';
import {
	IconButton,
	Badge,
	Popover,
	Typography,
	useTheme,
	Link,
	Divider,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import colorPalette from '@styles/color-palette';

export interface IEmailNotificationsProps {
	emails: {
		id: number;
		from: string;
		message: string;
		date: string;
	}[];
}

const EmailNotifications = ({
	emails = [{ id: 0, from: '', message: '', date: '' }],
}: IEmailNotificationsProps) => {
	const [emailNotificationOpened, setEmailNotificationOpened] =
		useState<boolean>(false);
	const theme = useTheme();

	return (
		<IconButton
			size='large'
			aria-label='show 4 new mails'
			color='inherit'
			onClick={() => setEmailNotificationOpened(!emailNotificationOpened)}
		>
			<Badge badgeContent={emails.length} color='error'>
				<EmailOutlinedIcon />
				<Popover
					open={emailNotificationOpened}
					sx={{
						'& .MuiPaper-root.MuiPopover-paper': {
							background: colorPalette.white,
							top: '76px !important',
							right: '0',
							width: '400px',
							left: 'calc(100% - 806px) !important',
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
								left: 'calc(100% - 606px) !important',
							},
						},
					}}
				>
					{emails.map((email) => {
						return (
							<Link href={'#'} id={`${email.id}`}>
								<Typography>{`${email.from}: ${email.message} ${email.date}`}</Typography>
								<Divider />
							</Link>
						);
					})}
				</Popover>
			</Badge>
		</IconButton>
	);
};

export default EmailNotifications;
