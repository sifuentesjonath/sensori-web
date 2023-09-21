'use client';

import { useContext, useState } from 'react';

/** MUI */
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';

/** Full Calendar */
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import '@/styles/fullcalendar/style.css';

/** Own components */
import { AppContext } from '@/providers/AppProvider';

import NewAppointmentButton from './NewAppointmentButton';
import AppointmentAlert from './AppointmentAlert';
import DayHeaderContent from './DayHeaderContent';
import CalendarScreenWidthAdvice from './CalendarScreenWidthAdvice';

/** Own styles */
import { calendarBox } from './style';

export const SessionsCalendar = () => {
	const theme = useTheme();
	const { open } = useContext(AppContext);

	const [appointmentAlert, setAppointmentAlert] = useState(false);

	const handleAppointmentAlert = () => {
		setAppointmentAlert(!appointmentAlert);
	};

	return (
		// TODO: Move this Box container to its own component and "fix" layout this way (???)
		<Box
			sx={{
				// TODO: fix absolute positioning offset
				height: '85vh',
				left: open && 'calc(64px + 25px)',
				position: 'absolute',
				right: open ? 'calc( 240px + 64px + 25px)' : 'calc( (64px + 25px) * 2)',
				width: '68vw',
			}}
		>
			<Box
				sx={{
					...calendarBox,
					[theme.breakpoints.down('lg')]: {
						display: 'none',
					},
				}}
			>
				<AppointmentAlert
					open={appointmentAlert}
					onClick={handleAppointmentAlert}
				/>
				<NewAppointmentButton onClick={handleAppointmentAlert} />

				<Box className='full-calendar-wrapper'>
					<FullCalendar
						plugins={[timeGridPlugin, dayGridPlugin]}
						headerToolbar={{
							left: 'title prev,today,next',
							center: 'timeGridDay,timeGridWeek,dayGridMonth,dayGridYear',
							right: '',
						}}
						initialView='timeGridWeek'
						aspectRatio={1.8}
						// SLOTS configuration
						allDaySlot={false}
						slotDuration='01:00:00'
						slotLabelFormat={{
							hour: 'numeric',
							// hour12: false,
							meridiem: 'lowercase', // The API won't display while hour12 is true
						}}
						duration={{ hours: 1 }}
						slotMinTime='08:00:00'
						slotMaxTime='18:00:00'
						expandRows // This will make hour rows to expand, if not set (default) calendar will look ugly
						dayHeaderContent={DayHeaderContent}
						nowIndicator
					/>
				</Box>
			</Box>

			{/* Require 1200px wider screen to be able to see this calendar  */}
			<CalendarScreenWidthAdvice />
		</Box>
	);
};
