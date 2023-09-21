/**React */
import React from 'react';
/**Redux */
import { useDispatch, useSelector } from 'react-redux';
import { getModalState } from '@redux/slices/modal/modal.selectors';
import { setModalState } from '@redux/slices/modal/modal.actions';
/**Mui Material */
import { Button, Stack, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
/**Styles */
import colorPalette from '@styles/color-palette';
/**Components */
import { AddNoteModal } from '@components/modals/AddNote';

const SessionNote = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const { Oppened } = useSelector(getModalState);

	const handleBtnAddNote = () => {
		dispatch(
			setModalState({
				Name: 'Add note',
				Oppened: !Oppened,
				Component: <AddNoteModal />,
			})
		);
	};

	return (
		<Stack
			direction='row'
			justifyContent='center'
			alignItems='cneter'
			sx={{ [theme.breakpoints.down(600)]: { height: '2em' } }}
		>
			<Button
				variant='outlined'
				startIcon={<AddIcon />}
				sx={{
					borderColor: colorPalette.green,
					color: colorPalette.white,
					textTransform: 'none',
				}}
				onClick={handleBtnAddNote}
			>
				{'Note'}
			</Button>
		</Stack>
	);
};

export default SessionNote;
