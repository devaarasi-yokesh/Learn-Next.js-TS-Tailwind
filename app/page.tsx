"use client";
import { useState } from "react";
import Task from "./components/task";

export default function Home() {

  const [inputValue, setInputValue] = useState("");

  const displayTask = () => {
    setInputValue((document.querySelector("input") as HTMLInputElement).value);
    document.querySelector("input")!.value = "";
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <input type="text"  placeholder="Type something..." className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={displayTask}>Submit
      </button>

      <p className="mt-4 text-gray-700 dark:text-gray-300">You typed: {inputValue}</p>
      
      <Task task={inputValue} />
    </div>
  );
}
