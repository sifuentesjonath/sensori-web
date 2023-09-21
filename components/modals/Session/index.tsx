//React
import React, { useEffect, useState } from 'react';
//Styles
import colorPalette from '@styles/color-palette';
//MUI core componentes
import { Box, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import StopIcon from '@mui/icons-material/Stop';
import RefreshIcon from '@mui/icons-material/Refresh';
//Components
import Logo from '@components/common/Logo';
import { Button } from '@components/element/Button';
import {
	endSessionButton,
	pauseSessionButton,
	restartSessionButton,
	sessionContainer,
	showSessionButton,
} from './style';
import Image from 'next/image';
import PauseIcon from '@public/svg/pause.svg';
import OpenInFullIcon from '@public/svg/expand.svg';
import CloseModalButton from '../CloseModal';
import { usePathname } from 'next/navigation';
import { paths } from '@utils/paths';

export interface ISessionModalProps {
	endSession?: () => void;
	showCurrentSession?: () => void;
}

export const SessionModal = ({
	endSession,
	showCurrentSession,
}: ISessionModalProps) => {
	const currentPath = usePathname();
	const [showedSessionButton, setShowedSessionButton] = useState<boolean>(
		currentPath === paths.currentsession ? false : true
	);
	const handlePauseSession = () => alert('Pause session button');
	const handleRestartSession = () => alert('Restart session button');

	useEffect(() => {
		if (currentPath === paths.currentsession) setShowedSessionButton(false);
	}, [currentPath]);
	return (
		<Box sx={{ ...sessionContainer }}>
			<Grid container>
				<Logo variant='blue' />
				<Grid item>
					<Button
						startIcon={
							<RadioButtonCheckedIcon sx={{ color: colorPalette.buttonRed }} />
						}
						sx={{}}
						disabled
						type='button'
						variant='outlined'
						color='info'
					>
						Session In Progress
					</Button>
				</Grid>
				<Grid item sx={{ paddingBottom: '16px' }}>
					<Typography variant='h3'>A session is already running</Typography>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
						pretium eros placerat sed.{' '}
					</Typography>
				</Grid>
				<Grid item>
					<Button
						type='button'
						sx={{ ...endSessionButton }}
						variant='contained'
						color='primary'
						startIcon={<StopIcon />}
						onClick={endSession}
					>
						End Session
					</Button>
					<Button
						type='button'
						sx={{ ...pauseSessionButton }}
						variant='contained'
						color='primary'
						startIcon={<Image src={PauseIcon} alt={'start icon'} />}
						onClick={handlePauseSession}
					>
						Pause Session
					</Button>
					<Button
						type='button'
						sx={{ ...restartSessionButton }}
						variant='contained'
						color='primary'
						startIcon={<RefreshIcon sx={{ color: colorPalette.green }} />}
						onClick={handleRestartSession}
					>
						Restart Session
					</Button>
					{showedSessionButton && (
						<Button
							type='button'
							sx={{ ...showSessionButton }}
							variant='contained'
							color='primary'
							startIcon={<Image src={OpenInFullIcon} alt={'open full icon'} />}
							onClick={showCurrentSession}
							// TODO: Create the new Session page and route.
						>
							Show Session In Progress
						</Button>
					)}
				</Grid>
			</Grid>
			<CloseModalButton />
		</Box>
	);
};
