'use client';
import Logo from '@components/common/Logo';
import {
	Box,
	Grid,
	Button,
	Typography,
	Stack,
	Paper,
	styled,
	Checkbox,
} from '@mui/material';
import { paths } from '@utils/paths';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getModalState } from '@redux/slices/modal/modal.selectors';
import { setModalState } from '@redux/slices/modal/modal.actions';
import React, { useContext, useEffect, useState } from 'react';
import CloseModalButton from '../CloseModal';
import {
	sessionContainer,
	endSessionButton,
	pauseSessionButton,
	restartSessionButton,
	showSessionButton,
} from '../Session/style';
import { ISessionModalProps } from '../Session';
import { AppContext } from '@/providers/AppProvider';
import { AddNoteModal } from '../AddNote';
import { mockupPatientData } from './mockupPatients';
import { scrollStyleRemoval } from '@screens/Library/style';
import colorPalette from '@styles/color-palette';
import { startSessionContainer } from './style';
import { PatientsList } from './PatientsList';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export const StartSessionModal = ({
	endSession,
	showCurrentSession,
}: ISessionModalProps) => {
	const { Oppened } = useSelector(getModalState);
	const dispatch = useDispatch();
	const currentPath = usePathname();
	const { toggleOpenCurrentSession } = useContext(AppContext);

	const [showedSessionButton, setShowedSessionButton] = useState<boolean>(
		currentPath === paths.currentsession ? false : true
	);
	const handleAssetsSession = () => alert('Set assets session button');

	const handleBtnAddNote = () => {
		dispatch(
			setModalState({
				Name: 'Add note',
				Oppened: Oppened,
				Component: <AddNoteModal />,
			})
		);
	};

	useEffect(() => {
		if (currentPath === paths.currentsession) setShowedSessionButton(false);
	}, [currentPath]);
	return (
		<Box sx={{ ...startSessionContainer }}>
			<Grid container>
				<Logo variant='blue' />
				<Grid item sx={{ paddingBottom: '16px' }}>
					<Typography>Chose a patient and an option</Typography>
				</Grid>
				<Grid item>
					<PatientsList />
				</Grid>
				<Grid item>
					<Button
						type='button'
						sx={{ ...endSessionButton }}
						variant='contained'
						color='primary'
						// startIcon={<StopIcon />}
						onClick={showCurrentSession}
					>
						Start Session
					</Button>
					<Button
						type='button'
						sx={{ ...pauseSessionButton }}
						variant='contained'
						color='primary'
						// startIcon={<Image src={PauseIcon} alt={'start icon'} />}
						onClick={handleAssetsSession}
					>
						Set assests
					</Button>
					<Button
						type='button'
						sx={{ ...restartSessionButton }}
						variant='contained'
						color='primary'
						// startIcon={<RefreshIcon sx={{ color: colorPalette.green }} />}
						onClick={handleBtnAddNote}
					>
						Add Note
					</Button>
				</Grid>
			</Grid>
			<CloseModalButton />
		</Box>
	);
};
