import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { ThemeProvider } from '@mui/material/styles';
import { ButtonTheme } from '@styles/themes/button';

import dragNDropButton from './style';

const DragNDropButton = () => {
	return (
		<Grid item>
			{/* 
          If ThemeProvider is used in a way that wraps all the LibraryScreen
          the "regular" button is not displayed as is purposed, so, fix
          ButtonTheme by "expanding" defaultTheme or continue ussing this
          way when creating a dashed button
      */}
			<ThemeProvider theme={ButtonTheme}>
				<Button
					variant='dashed'
					sx={{
						...dragNDropButton,
					}}
					fullWidth
				>
					<CloudUploadIcon />
					Drag and Drop Your Files
				</Button>
			</ThemeProvider>
		</Grid>
	);
};

export default DragNDropButton;
