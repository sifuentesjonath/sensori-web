import Box from '@mui/material/Box';

import useTheme from '@mui/material/styles/useTheme';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { calendarBox } from '../style';

const CalendarScreenWidthAdvice = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				...calendarBox,
				[theme.breakpoints.up('lg')]: {
					display: 'none',
				},
				[theme.breakpoints.down('lg')]: {
					pb: 3,
				},
			}}
		>
			<Alert severity='info'>
				<AlertTitle>Screen Width</AlertTitle>
				To see the sessions calendar please visit this section from a device{' '}
				<strong>with a 1200px wider screen.</strong>
			</Alert>
		</Box>
	);
};

export default CalendarScreenWidthAdvice;
