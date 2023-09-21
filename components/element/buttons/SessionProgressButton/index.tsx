/**React */
import React, { useContext } from 'react';
/**Redux */
import { SessionModal } from '@components/modals/Session';
import { setModalState } from '@redux/slices/modal/modal.actions';
import { getModalState } from '@redux/slices/modal/modal.selectors';
import { useSelector, useDispatch } from 'react-redux';
/**Context */
import { AppContext } from '@/providers/AppProvider';
/**Styles */
import colorPalette from '@styles/color-palette';
import { purpleButton } from '@styles/cssObjects/buttons';
/**Components */
import { Button, CSSObject } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

interface IOppenSessionProgressButton {
	sx?: CSSObject;
}

export const OpenSessionProgressButton = ({
	sx,
}: IOppenSessionProgressButton) => {
	const { toggleOpenCurrentSession, toggleEndSession } = useContext(AppContext);

	const { Oppened } = useSelector(getModalState);
	const dispatch = useDispatch();

	const handleStartSessionToogle = () => {
		dispatch(
			setModalState({
				Name: 'sessionModal',
				Oppened: !Oppened,
				Component: (
					<SessionModal
						endSession={toggleEndSession}
						showCurrentSession={toggleOpenCurrentSession}
					/>
				),
			})
		);
	};
	return (
		<Button
			sx={{
				...purpleButton,
				...sx,
				height: '52px',
			}}
			startIcon={
				<RadioButtonCheckedIcon
					fontSize='large'
					sx={{
						color: colorPalette.green,
					}}
				/>
			}
			onClick={handleStartSessionToogle}
		>
			{'Session In Progress'}
		</Button>
	);
};
