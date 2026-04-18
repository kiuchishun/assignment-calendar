"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { AssignmentEventsContext } from "../context/event-context";
import { useContext } from "react";
export default function Calender() {
  const [assignmentEvents,] = useContext(AssignmentEventsContext)
  return (
    <div className="h-full w-full p-4">
      <FullCalendar
        locale="ja"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={assignmentEvents}
     height="100%"
      />
    </div>
  );
}
