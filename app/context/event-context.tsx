"use client";

import { SingleTask, Task, NewWeeklyTask } from "@/types/task";
import { createContext, useState, useContext } from "react";

type TaskContext = {
  tasks: Task[];
  addSingleTask: (newTask: SingleTask) => void;
  addWeeklyTask: (newWeeklyTask: NewWeeklyTask) => void;
  updateTask: (updateTaskId: string, updateTask: Task) => void;

  deleteTask: (deleteTaskId: string) => void;
};
export const TaskContext = createContext<TaskContext | null>(null);

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

  const addSingleTask = (newTask: {
    title: string;
    date: string;
    memo?: string;
  }) => {
    setTasks((prev) => [
      ...prev,
      {
        ...newTask,
        id: crypto.randomUUID(),
        scheduleType: "single",
      },
    ]);
  };

  const addWeeklyTask = (newWeeklyTask: NewWeeklyTask) => {
    setTasks((prev) => [
      ...prev,
      {
        ...newWeeklyTask,
        id: crypto.randomUUID(),
        scheduleType: "weekly",
      },
    ]);
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
    <TaskContext.Provider
      value={{ tasks, addSingleTask, addWeeklyTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const taskContext = useContext(TaskContext);
  if (!taskContext) {
    throw new Error("TaskContext must be used within EventsProvider");
  }
  return taskContext;
}
