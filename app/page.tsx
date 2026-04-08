"use client";
import Task from "./components/task";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black font-sans min-h-screen">
      <Task />
    </div>
  );
}