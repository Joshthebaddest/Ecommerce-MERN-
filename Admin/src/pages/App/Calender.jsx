import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const Calender = () => {
  return (
    <div style={{ height: '650px',}}>
      <h1>Calender</h1>
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: 800 }}
      />
    </div>
  )
}

export default Calender

