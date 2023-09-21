'use client';
import { useContext } from 'react';
import Image from 'next/image';

import { styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import { Grid, Toolbar } from '@mui/material';

import { Button } from '@components/element/Button';

import {
	headerButton,
	headerContainer,
	headerGroup,
	headerSides,
	IAppBarProps,
} from './style';

/** SVGs */
import PlayButton from '@public/svg/playButton.svg';

import { HeaderUserWidget } from './HeaderUserWidget';

import SearchBar from './SearchBar';
import { AppContext } from '@/providers/AppProvider';
import { setModalState } from '@redux/slices/modal/modal.actions';
import { getModalState } from '@redux/slices/modal/modal.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { StartSessionModal } from '@components/modals/StartSession';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<IAppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(!open && { paddingLeft: '112px !important' }),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Header = ({
	open,
	drawerwidth: drawerWidth,
	onClick,
	startSession,
}: IAppBarProps) => {
	const { sessionState, toggleOpenCurrentSession } = useContext(AppContext);
	const theme = useTheme();
	const { Oppened } = useSelector(getModalState);
	const dispatch = useDispatch();

	const handleStartSessionToogle = () => {
		dispatch(
			setModalState({
				Name: 'sessionModal',
				Oppened: !Oppened,
				Component: (
					<StartSessionModal
						// endSession={toggleEndSession}
						showCurrentSession={toggleOpenCurrentSession}
					/>
				),
			})
		);
	};

	return (
		<AppBar
			position='absolute'
			component='header'
			sx={{ ...headerContainer }}
			drawerwidth={drawerWidth}
			open={open}
		>
			<Toolbar>
				<Box sx={{ ...headerGroup }}>
					<Grid
						sx={{
							...headerSides,
							[theme.breakpoints?.down('sm')]: {
								gap: '0',
							},
						}}
						component='nav'
					>
						<Grid
							sx={{
								...headerButton,
								[theme.breakpoints.down(650)]: {
									display: 'none',
								},
							}}
						>
							{!sessionState && (
								<Button onClick={handleStartSessionToogle}>
									<Image src={PlayButton} alt='button-image' />
									{'Start Session'}
								</Button>
							)}
						</Grid>
						<Grid
							sx={{
								[theme.breakpoints.down('md')]: {
									marginLeft: '8px',
								},
							}}
						>
							<SearchBar />
						</Grid>
					</Grid>
					<Grid>
						<HeaderUserWidget
							avatarImage='JS'
							role='Medico fregon'
							userDisplayName='Jonathan Sifuentes'
						/>
					</Grid>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
