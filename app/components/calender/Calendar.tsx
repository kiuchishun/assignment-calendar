"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useTasks } from "../../context/event-context";

export default function Calender() {
  const { tasks } = useTasks();
  return (
    <div className="h-full w-full p-4">
      <FullCalendar
        locale="ja"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={tasks}
        height="100%"
      />
    </div>
  );
}
