import { useEffect, useState } from "react";
import { NewTask } from "./NewTask";
import { ITask } from "./ITask";
import { ShowTasks } from "./ShowTasks";
import { ShowDoneTasks } from "./ShowDoneTasks";
export const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [doneTasks, setDoneTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const savedDoneTasks = JSON.parse(localStorage.getItem("doneTasks") || "[]");
    setTasks(savedTasks);
    setDoneTasks(savedDoneTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    if (doneTasks.length > 0) {
      localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
    }
  }, [doneTasks]);
  function addTask(taskInputTitle: string, taskInputDescription: string) {
    setTasks([...tasks, { id: Date.now(), title: taskInputTitle, description: taskInputDescription }]);
  }
  function editTask(taskId: number, taskTitle: string, taskDescription: string) {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, title: taskTitle, description: taskDescription } : task)));
  }
  function taskDelete(taskId: number, doneOrTasks: string) {
    if (doneOrTasks === "done") {
      setDoneTasks(doneTasks.filter((task) => task.id !== taskId));
    } else {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  }
  function doTask(toBeDonetask: ITask, isDone: boolean) {
    if (isDone) {
      setTasks(tasks.filter((task) => task.id !== toBeDonetask.id));
      setDoneTasks([...doneTasks, toBeDonetask]);
    } else {
      setTasks([...tasks, toBeDonetask]);
      setDoneTasks(doneTasks.filter((task) => task.id !== toBeDonetask.id));
    }
  }
  return (
    <div className="w-full mt-20">
      <div className="text-2xl font-bold">تسک های امروز</div>
      <div className={`opacity-50 ${tasks.length > 0 ? "" : "invisible"}`}>{tasks.length} تسک رو باید انجام بدی</div>
      <NewTask addTask={addTask} />
      <div className={`${tasks.length > 0 ? "bg-zinc-200/25 dark:bg-zinc-700/25" : ""} rounded-2xl`}>
        <ShowTasks tasks={tasks} taskDelete={taskDelete} editTask={editTask} doTask={doTask} />
      </div>
      <div className="mt-5 text-2xl font-bold">تسک های انجام شده</div>
      <div className="opacity-50">{doneTasks.length > 0 ? `${doneTasks.length} تسک رو باید انجام بدی` : "هیچ تسکی انجام نشده"}</div>
      <div className="bg-zinc-200/25 dark:bg-zinc-700/25 rounded-2xl">
        <ShowDoneTasks doneTasks={doneTasks} taskDelete={taskDelete} doTask={doTask} />
      </div>
    </div>
  );
};
