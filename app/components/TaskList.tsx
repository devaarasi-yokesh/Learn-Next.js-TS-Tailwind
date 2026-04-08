"use client";
import React from "react";

export type TaskType = {
  id: string;
  text: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export default function TaskList({ tasks, setTasks }: TaskListProps) {
  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <ul className="mt-4 w-full max-w-md">
      {tasks.map(task => (
        <li
          key={task.id}
          className="flex items-center justify-between mb-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="mr-2"
            />
            <span className={task.completed ? "line-through text-gray-400" : ""}>
              {task.text}
            </span>
          </label>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}