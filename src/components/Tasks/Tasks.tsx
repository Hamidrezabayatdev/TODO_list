import  { useState } from "react";
import { NewTask } from "./NewTask";
import { ITask } from "./ITask";
import { ShowTasks } from "./ShowTasks";
export const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  function addTask(taskInputTitle: string, taskInputDescription: string) {
    setTasks([...tasks, { id: tasks.length + 1, title: taskInputTitle, description: taskInputDescription }]);
  }
  function editTask (taskId: number, taskTitle: string, taskDescription: string) {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, title: taskTitle, description: taskDescription } : task)));
  }
  function taskDelete (taskId: number) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }
  return (
    <div className="w-full mt-20">
      <div className="text-2xl font-bold">تسک های امروز</div>
      <div className="opacity-50">3 تسک رو باید انجام بدی</div>
      <NewTask addTask={addTask} />
      <ShowTasks tasks={tasks} taskDelete={taskDelete} editTask={editTask}/>
    </div>
  );
};
