import { useState } from "react";
import { NewTask } from "./NewTask";
import { ITask } from "./ITask";
import { ShowTasks } from "./ShowTasks";
import { ShowDoneTasks } from "./ShowDoneTasks";
export const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [doneTasks, setdoneTasks] = useState<ITask[]>([]);
  function addTask(taskInputTitle: string, taskInputDescription: string) {
    setTasks([...tasks, { id: Date.now(), title: taskInputTitle, description: taskInputDescription }]);
  }
  function editTask(taskId: number, taskTitle: string, taskDescription: string) {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, title: taskTitle, description: taskDescription } : task)));
  }
  function taskDelete(taskId: number, doneOrTasks: string) {
    if (doneOrTasks === "done") {
      setdoneTasks(doneTasks.filter((task) => task.id !== taskId));
    } else {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  }
  function doTask(toBeDonetask: ITask, isDone: boolean) {
    if (isDone) {
      setTasks(tasks.filter((task) => task.id !== toBeDonetask.id));
      setdoneTasks([...doneTasks, toBeDonetask]);
    } else {
      setTasks([...tasks, toBeDonetask]);
      setdoneTasks(doneTasks.filter((task) => task.id !== toBeDonetask.id));
    }
  }
  return (
    <div className="w-full mt-20">
      <div className="text-2xl font-bold">تسک های امروز</div>
      <div className="opacity-50">3 تسک رو باید انجام بدی</div>
      <NewTask addTask={addTask} />
      <ShowTasks tasks={tasks} taskDelete={taskDelete} editTask={editTask} doTask={doTask} />
      <div className="text-2xl font-bold">تسک های انجام شده</div>
      <div className="opacity-50">3 تسک رو انجام دادی</div>
      <ShowDoneTasks doneTasks={doneTasks} taskDelete={taskDelete} doTask={doTask} />
    </div>
  );
};
