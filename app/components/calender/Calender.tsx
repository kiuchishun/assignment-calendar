"use client";
import { DayPicker } from "react-day-picker";
export default function Calender() {
  return (
    <div className="p-4 max-w-xl mx-auto bg-white  ">
      <DayPicker mode="single"></DayPicker>
    </div>
  );
}
