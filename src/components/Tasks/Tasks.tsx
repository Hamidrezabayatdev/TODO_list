import React, { useState } from "react";
import { NewTask } from "./NewTask";
import { ITask } from "./ITask";
import { ShowTasks } from "./ShowTasks";
export const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  function addTask(taskInputTitle: string, taskInputDescription: string) {
    setTasks([...tasks, { id: tasks.length + 1, title: taskInputTitle, description: taskInputDescription }]);
  }
  return (
    <div className="w-full mt-20">
      <div className="text-2xl font-bold">تسک های امروز</div>
      <div className="opacity-50">3 تسک رو باید انجام بدی</div>
      <NewTask addTask={addTask} />
      <ShowTasks tasks={tasks} />
    </div>
  );
};
