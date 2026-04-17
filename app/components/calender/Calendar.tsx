"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
export default function Calender() {
  const events = [{ title: "英語", date: "2026-04-27" }];
  return (
    <div>
      <FullCalendar
        locale="ja"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}
