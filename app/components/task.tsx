"use client";
import { useState } from "react";
import TaskList, { TaskType } from "./TaskList";
import useLocalStorage from "./LocalStorage";

export default function Task() {
  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks, loaded] = useLocalStorage<TaskType[]>("tasks", []);

  const addTask = () => {
    if (!inputValue.trim()) {
      alert("Please enter a task before submitting.");
      return;
    }

    setTasks(prev => [
      ...prev,
      { id: Date.now(), text: inputValue, completed: false }
    ]);
  
    

    setInputValue("");
  };

if(!loaded){
    return (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500">Loading...</p>
        </div>
      );
}

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 dark:bg-black font-sans min-h-screen">
      <form
        onSubmit={e => {
          e.preventDefault();
          addTask();
        }}
        className="flex flex-col items-center w-full max-w-md"
      >
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className={`w-full px-4 py-2 mb-4 rounded-md text-white ${
            inputValue.trim()
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        >
          Add Task
        </button>
      </form>

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
