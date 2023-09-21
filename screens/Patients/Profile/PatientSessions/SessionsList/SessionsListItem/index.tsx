/**Mui Material */
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Divider, useTheme } from '@mui/material';
/**Styles */
import colorPalette from '@styles/color-palette';
//Components
import SessionNote from './SessionNote';
import SessionMetadata, { ISessionMetadata } from './SessionMetadata';

export interface ISessionListItemProps {
	file: ISessionMetadata;
}

const SessionListItem = ({ file }: ISessionListItemProps) => {
	const theme = useTheme();
	return (
		<>
			<ListItem>
				<ListItemAvatar>
					<Avatar
						sx={{
							border: `1px solid ${colorPalette.textBlue}`,
							backgroundColor: 'inherit',
						}}
					>
						<BarChartIcon
							sx={{
								color: colorPalette.green,
							}}
						/>
					</Avatar>
				</ListItemAvatar>
				<ListItemText>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'
						sx={{ [theme.breakpoints.down(660)]: { gap: 2 } }}
					>
						<SessionMetadata {...file} />
						{/* TODO: Define more else doing with this component */}
						<SessionNote />
					</Stack>
				</ListItemText>
			</ListItem>
			<Divider
				sx={{ borderColor: colorPalette.textBlue, width: '100%' }}
				variant='fullWidth'
			/>
		</>
	);
};

export default SessionListItem;
