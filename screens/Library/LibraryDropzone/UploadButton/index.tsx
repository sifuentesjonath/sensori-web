import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import IosShareIcon from '@mui/icons-material/IosShare';

import { useSelector, useDispatch } from 'react-redux';
import { getModalState } from '@redux/slices/modal/modal.selectors';
import { setModalState } from '@redux/slices/modal/modal.actions';

import colorPalette from '@styles/color-palette';
import uploadButton from './style';
import { UploadFileModal } from '@components/modals/UpladFile';

const UploadButton = () => {
	const { Oppened, Component } = useSelector(getModalState);
	const dispatch = useDispatch();

	const handleUploadFile = () => {
		dispatch(
			setModalState({
				Name: '',
				Oppened: !Oppened,
				Component: <UploadFileModal />,
			})
		);
	};

	return (
		<Grid item>
			<Button
				sx={{
					...uploadButton,
				}}
				startIcon={<IosShareIcon />}
				fullWidth
				size='large'
				onClick={handleUploadFile}
			>
				Upload New File
			</Button>
		</Grid>
	);
};

export default UploadButton;
