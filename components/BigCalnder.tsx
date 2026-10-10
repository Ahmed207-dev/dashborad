"use client";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalnder = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const onChange = (selected: View) => {
    setView(selected);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700, padding: "10px" }}
        views={["work_week", "day"]}
        view={view}
        onView={onChange}
        min={new Date(2026, 9, 7, 8, 0, 0)}
        max={new Date(2026, 9, 7, 17, 0, 0)}
      />
    </div>
  );
};

export default BigCalnder;
