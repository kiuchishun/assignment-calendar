"use client";

import { createContext, useContext, useState } from "react";


export const AssignmentEventsContext = createContext(null) 

export default function EventsProvider({children}:{
  children: React.ReactNode;
}){
const [assignmentEvents, setAssignmentEvents] = useState([
  { title: "英語", date: "2026-04-27" },
  { title: "数学", date: "2026-04-08" },
]);



return (
<AssignmentEventsContext.Provider value={[assignmentEvents,setAssignmentEvents]}>
    {children}
  </AssignmentEventsContext.Provider>
)
}