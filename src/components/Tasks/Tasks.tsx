import { useEffect, useState } from "react";
import { NewTask } from "./NewTask";
import { ITask } from "../../types/ITask";
import { ShowTasks } from "./ShowTasks";
import { ShowDoneTasks } from "./ShowDoneTasks";
import { saveToDB } from "./SaveToDB";
import { loadFromDB } from "./LoadFromDB";
import { categories } from "../../types/Categories";

interface TasksProps {
  selectedCategory: string;
  setIsMenuOpen: (isOpen: boolean) => void
}
export const Tasks = ({ selectedCategory, setIsMenuOpen }: TasksProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [doneTasks, setDoneTasks] = useState<ITask[]>([]);
  let categoryTasks = tasks;
  let categoryDoneTasks = doneTasks;
  if (categories.some((category) => category.value === selectedCategory)) {
    categoryTasks = tasks.filter((task) => task.categories?.includes(selectedCategory));
    categoryDoneTasks = doneTasks.filter((task) => task.categories?.includes(selectedCategory));
  }
  // load tasks
  useEffect(() => {
    const loadTasks = async () => {
      try {
        await loadFromDB({ setTasks, setDoneTasks });
      } catch (error) {
        console.error("Error loading tasks from DB:", error);
      }
    };
    loadTasks();
  }, []);
  // save tasks
  useEffect(() => {
    const saveTasks = async () => {
      if (tasks.length > 0) {
        try {
          await saveToDB(tasks, doneTasks);
        } catch (error) {
          console.error("Error saving tasks to DB:", error);
        }
      }
    };
    saveTasks();
  }, [tasks, doneTasks]);

  function addTask(taskInputTitle: string, taskInputDescription: string, taskInputCategories: string[], taskDate: string | null, taskTime: string | null) {
    setTasks([...tasks, { id: Date.now(), title: taskInputTitle, description: taskInputDescription, categories: taskInputCategories, date: taskDate, time: taskTime }]);
  }
  function editTask(taskId: number, taskTitle: string, taskDescription: string, taskInputCategories: string[]) {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, title: taskTitle, description: taskDescription, categories: taskInputCategories } : task)));
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
    <div className="w-full mt-5 md:mt-20">
      <div className="flex items-center gap-5">
        <svg className="cursor-pointer md:hidden size-8" onClick={() => setIsMenuOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div>
          <div className="text-2xl font-bold">تسک های امروز</div>
          <div className={`opacity-50 ${tasks.length > 0 ? "" : "hidden"}`}>{tasks.length} تسک رو باید انجام بدی</div>
        </div>
      </div>
      <NewTask addTask={addTask} />
      <div className={`${tasks.length > 0 ? "bg-zinc-200/25 dark:bg-zinc-700/25" : ""} rounded-2xl`}>
        <ShowTasks tasks={categoryTasks} taskDelete={taskDelete} editTask={editTask} doTask={doTask} />
      </div>
      <div className="mt-5 text-2xl font-bold">تسک های انجام شده</div>
      <div className="opacity-50">{doneTasks.length > 0 ? `${doneTasks.length} تسک رو باید انجام بدی` : "هیچ تسکی انجام نشده"}</div>
      <div className="bg-zinc-200/25 dark:bg-zinc-700/25 rounded-2xl">
        <ShowDoneTasks doneTasks={categoryDoneTasks} taskDelete={taskDelete} doTask={doTask} />
      </div>
    </div>
  );
};
