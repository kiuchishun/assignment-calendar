"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { TaskContext } from "../context/event-context";
import { useContext } from "react";
export default function Calender() {
  const taskContext = useContext(TaskContext);
  if (!taskContext) {
    throw new Error("TaskContext must be used within EventsProvider");
  }
  const { tasks } = taskContext;
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
