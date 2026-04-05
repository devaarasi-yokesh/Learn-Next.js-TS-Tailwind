


export default function TaskList( {tasks, setTasks}: {tasks: string[], setTasks: React.Dispatch<React.SetStateAction<string[]>>}) {

const deleteTask = (index: number) => {

    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  
  }

  return (
    <div>
        {/* Display the list of tasks */}
      <ul className="mt-4 text-gray-700 dark:text-gray-300">
        {tasks.map((task, index) => (
          <span key={index} className="flex items-center">
          <input type="checkbox" title="taskCheckbox" className="mr-2" onChange={()=>deleteTask(index)} />
          <li key={index}>{task}</li>
          </span>
        ))}
      </ul>
    </div>
  );
}