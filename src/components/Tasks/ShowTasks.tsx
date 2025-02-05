import { useState } from "react";
import { ITask } from "./ITask";
import { SelectCategories } from "./SelectCategories";
import { categories } from "./Categories";
import { useScreenWidth } from "../../Contexts/ScreenWitdhContext";
interface ShowTasksProps {
  tasks: ITask[];
  taskDelete: (taskId: number, doneOrTasks: string) => void;
  editTask: (taskId: number, taskTitle: string, taskDescription: string, taskInputCategories: string[]) => void;
  doTask: (task: ITask, isDone: boolean) => void;
}
export const ShowTasks = ({ tasks, taskDelete, editTask, doTask }: ShowTasksProps) => {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(0);
  const [editingTaskTitle, setEditingTaskTitle] = useState("");
  const [editingTaskDescription, setEditingTaskDescription] = useState("");
  const [editingTaskCategories, setEditingTaskCategories] = useState<string[]>([]);
  const startEditing = (task: ITask) => {
    setEditingTaskId(task.id);
    setEditingTaskTitle(task.title);
    setEditingTaskDescription(task.description);
    setEditingTaskCategories(task.categories);
  };
  const screenWidth = useScreenWidth();
  function saveTaskEdit(taskId: number) {
    editTask(taskId, editingTaskTitle, editingTaskDescription, editingTaskCategories);
    setEditingTaskId(null);
  }
  return (
    <div>
      {tasks.length === 0 ? (
        <div className="mx-auto hidden md:block">
          <img className="mx-auto size-72 object-contain" src="/src/assets/noTasks.png" alt="" />
          <p className="text-2xl text-center text-zinc-600 dark:text-zinc-100">چه کارهایی امروز برای انجام داری؟</p>
          <p className="text-xl text-center mt-1 text-zinc-600 dark:text-zinc-100 opacity-75">میتونی الان تسک‌هاتو اینجا بنویسی و برنامه ریزی رو شروع کنی!</p>
        </div>
      ) : (
        <div>
          {tasks.map((task, index) => (
            <div key={index} className="mt-4 p-4 rounded-2xl border-[1px] border-zinc-400 dark:border-zinc-600">
              <div key={index} className="flex items-center justify-between rounded-2xl ">
                <div className="flex items-center w-full gap-4 ml-3">
                  <div className="w-1 h-16 -mr-4 bg-zinc-500 rounded-l-lg rounded-bl-lg"></div>
                  <input className="size-6 -mr-1 rounded-2xl" type="checkbox" name="taskDone" id={index.toString()} checked={false} onChange={(e) => doTask(task, e.target.checked)} />
                  <div className="w-full">
                    <div className="text-lg font-bold" key={index}>
                      <input
                        className={`w-full p-0.5 px-2 outline-none rounded-2xl ${editingTaskId === task.id ? "bg-zinc-300/75 dark:bg-zinc-700/75" : ""}`}
                        placeholder="تسک"
                        value={editingTaskId === task.id ? editingTaskTitle : task.title}
                        onChange={(e) => setEditingTaskTitle(e.target.value)}
                        type="text"
                        readOnly={editingTaskId !== task.id}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveTaskEdit(task.id);
                        }}
                      />
                    </div>
                    <div className={`text-sm opacity-75 mt-0.5 ${editingTaskId === task.id ? "" : task.description === "" ? "hidden" : ""}`} key={index}>
                      <input
                        className={`w-full text-wrap p-0.5 px-2 outline-none rounded-2xl ${editingTaskId === task.id ? "bg-zinc-300/75 dark:bg-zinc-700/75" : ""}`}
                        placeholder="توضیحات"
                        value={editingTaskId === task.id ? editingTaskDescription : task.description}
                        onChange={(e) => setEditingTaskDescription(e.target.value)}
                        type="text"
                        readOnly={editingTaskId !== task.id}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            saveTaskEdit(task.id);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-0.5 sm:gap-4">
                  {/* categories big */}
                  <div className={`${editingTaskId !== task.id && screenWidth > 640 ? "" : "hidden"} flex items-center gap-1`}>
                    {task.categories?.map((category, index) => (
                      <div className="text-sm text-nowrap bg-zinc-200 dark:bg-zinc-700 rounded-2xl p-0.5 px-1 opacity-75 mt-0.5" key={index}>
                        {categories.find((cat) => cat.value === category)?.label}
                      </div>
                    ))}
                  </div>
                  {/* categories edit big */}
                  <div className={`${editingTaskId === task.id && screenWidth > 1024 ? "" : "hidden"} w-full lg:w-60 xl:w-80`}>
                    <SelectCategories setTaskInputCategories={setEditingTaskCategories} val={editingTaskId === task.id ? editingTaskCategories : task.categories ? task.categories : []} />
                  </div>
                  {/* edit and delete icons */}
                  <div className="flex sm:gap-2">
                    {/* edit icon*/}
                    <div className="group p-1 hover:bg-current rounded-md">
                      <svg onClick={() => startEditing(task)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 group-hover:stroke-zinc-50 dark:group-hover:stroke-zinc-700 transition-all ${editingTaskId === task.id ? "hidden" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                      <svg onClick={() => saveTaskEdit(task.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 group-hover:stroke-zinc-50 dark:group-hover:stroke-zinc-700 transition-all ${editingTaskId === task.id ? "" : "hidden"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    {/* delete icon*/}
                    <div className="group p-1 hover:bg-current rounded-md">
                      <svg onClick={() => taskDelete(task.id, "tasks")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 group-hover:stroke-zinc-50 dark:group-hover:stroke-zinc-700 transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* categories small */}
              <div className={`${editingTaskId !== task.id && screenWidth < 640 ? "" : "hidden"} flex justify-center items-center gap-1 mx-auto`}>
                {task.categories?.map((category, index) => (
                  <div className="text-sm text-nowrap bg-zinc-200 dark:bg-zinc-700 rounded-2xl p-0.5 px-1 opacity-75 mt-0.5" key={index}>
                    {categories.find((cat) => cat.value === category)?.label}
                  </div>
                ))}
              </div>
              {/* categories edit small */}
              <div className={`${editingTaskId === task.id && screenWidth < 1024 ? "" : "hidden"} mr-10 `}>
                <SelectCategories setTaskInputCategories={setEditingTaskCategories} val={editingTaskId === task.id ? editingTaskCategories : task.categories ? task.categories : []} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
