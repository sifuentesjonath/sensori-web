import React from 'react';

import Image from 'next/image';

import List from '@mui/material/List';

import LogoSensorium from '@public/svg/Logo.svg';
import IconSensorium from '@public/svg/Logo_Icon.svg';

import { IconButton } from '@mui/material';

import { MenuListItem } from './MenuListItem';
import LogOutButton from './LogOutButton';

import { sideBarMainNavItems } from './sideBarItems';
import { DrawerHeader, Drawer, drawerWidth } from './style';

export interface ISideProps {
	open: boolean;
	drawerwidth?: number;
	onClick?: () => void;
}

const Sidebar = ({ open, drawerwidth = 240, onClick }: ISideProps) => {
	return (
		<Drawer
			variant='permanent'
			open={open}
			drawerwidth={drawerwidth}
			sx={{ top: 0 }}
		>
			<DrawerHeader>
				<IconButton
					onClick={onClick}
					sx={{
						pl: 8,
						paddingTop: '40px',
						'& .MuiTouchRipple-root': {
							display: 'none',
						},
						...(!open && {
							display: 'none',
						}),
					}}
				>
					<Image src={LogoSensorium} alt='sensorium-icon' />
				</IconButton>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					onClick={onClick}
					sx={{
						// mr: 5,
						// zIndex: theme.zIndex.drawer + 2,
						paddingLeft: '16px',
						paddingTop: '40px',
						'& .MuiTouchRipple-root': {
							display: 'none',
						},
						...(open && { display: 'none' }),
					}}
				>
					<Image src={IconSensorium} alt='sensorium-icon' />
				</IconButton>
			</DrawerHeader>
			<List
				component='nav'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					paddingTop: '40px',
					height: '100%',
					justifyContent: 'start',
				}}
			>
				{sideBarMainNavItems.map(({ id, url, icon }) => {
					return (
						<MenuListItem
							icon={icon}
							id={id}
							key={Math.random()}
							open={open}
							path={url}
						/>
					);
				})}
			</List>

			<LogOutButton open={open} />
		</Drawer>
	);
};

export default Sidebar;
