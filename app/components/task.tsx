"use client";
import { useState } from "react";
import TaskList from "./TaskList";






export default function Task() {

  const [inputValue, setInputValue] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const displayTask = () => {
    setInputValue((document.querySelector("input") as HTMLInputElement).value);
    setTasks([...tasks, (document.querySelector("input") as HTMLInputElement).value]);
    // tasks.push((document.querySelector("input") as HTMLInputElement).value);
    document.querySelector("input")!.value = "";
  }

  

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <input type="text"  placeholder="Type something..." className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={displayTask}>Submit
      </button>

      <TaskList tasks={tasks} setTasks={setTasks} />

      
    </div>
  );
}