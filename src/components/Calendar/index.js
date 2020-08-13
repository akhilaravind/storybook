import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './index.scss';

const Calendar = (props) => {
	const { initialValue, weekends, events, handleDateClick } = props;
	return (
		<FullCalendar
			plugins={[dayGridPlugin]}
			initialView={initialValue}
			weekends={weekends}
			events={events}
			dateClick={handleDateClick()}
		/>
	)
}

export default Calendar;