import Paper, { PaperProps } from '@mui/material/Paper';
import colorPalette from '@styles/color-palette';

interface IDiaglogContainerProps extends PaperProps {
	isVoiceSearch: boolean;
}

const DialogContainer = ({
	isVoiceSearch,
	children,
}: IDiaglogContainerProps) => {
	// const { isVoiceSearch } = props

	return (
		<Paper
			sx={{
				backgroundColor: isVoiceSearch
					? colorPalette.voiceSearchBackground
					: colorPalette.backgroundModal,
				maxWidth: '428px',
				maxHeight: '90vh',
				minHeight: '90vh',
			}}
		>
			{children}
		</Paper>
	);
};

export default DialogContainer;
