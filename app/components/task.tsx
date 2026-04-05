



export default function Task({ task }: { task: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p className="mt-4 text-gray-700 dark:text-gray-300">Work on Day 1 Plan : {task}</p>
    </div>
  );
}