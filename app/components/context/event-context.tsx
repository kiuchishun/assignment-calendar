"use client";

import { Task } from "@/types/task";
import { createContext, useState } from "react";

type TaskContext = {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  updateTask: (updateTaskId: string, updateTask: Task) => void;

  deleteTask: (deleteTaskId: string) => void;
};
export const TaskContext = createContext<TaskContext|null>(null);

export default function EventsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "さんぷる1",
      title: "英語",
      date: "2026-04-27",
      scheduleType: "single",
    },
    {
      id: "サンプル2",
      title: "数学",
      date: "2026-04-08",
      scheduleType: "single",
    },
  ]);

  const addTask = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (deleteTaskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== deleteTaskId));
  };

  const updateTask = (updateTaskId: string, updateTask: Task) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updateTaskId ? { ...task, updateTask } : task,
      ),
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
