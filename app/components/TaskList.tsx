"use client";
import { useState } from "react";
import React from "react";

export type TaskType = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export default function TaskList({ tasks, setTasks }: TaskListProps) {

  const [optionValue, setOptionValue] = useState<string>("");

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
    <>
    <label>Filter</label>
    <select name="taskType" title="taskType" value={optionValue}
      onChange={e => setOptionValue(e.target.value)}
     className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"> 
      <option value="">--Please choose an option</option>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>

    <ul className="mt-4 w-full max-w-md">
      {tasks
        .filter(task => {
          if (optionValue === "completed") return task.completed;
          if (optionValue === "pending") return !task.completed;
          return true;
        })
        .map(task => (
          <li key={task.id} className="flex items-center justify-between mb-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <label className="flex items-center cursor-pointer">
              <input  type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="mr-2" />
              <span className={task.completed ? "line-through text-gray-400" : ""}>{task.text}</span>
            </label>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">Delete</button>
          </li>
        ))}
    </ul>
  
  </>
  );
}