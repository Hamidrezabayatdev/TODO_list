import { ITask } from "./ITask";

interface ShowDoneTasksProps {
  doneTasks: ITask[];
  taskDelete: (taskId: number, doneOrTasks: string) => void;
  doTask: (task: ITask, isDone: boolean) => void;
}
export const ShowDoneTasks = ({ doneTasks, taskDelete, doTask }: ShowDoneTasksProps) => {
  return (
    <div>
      {doneTasks.map((task, index) => (
        <div key={index} className="p-4 w-full mt-4 flex items-center justify-between rounded-2xl border-[1px] border-zinc-400 dark:border-zinc-600">
          <div className="flex items-center w-full gap-4">
            <div className="w-1 h-16 -mr-4 bg-zinc-500 rounded-l-lg rounded-bl-lg"></div>
            <input className="size-6 -mr-1 rounded-2xl" type="checkbox" name="taskDone" id={index.toString()} checked={doneTasks.includes(task)} onChange={(e) => doTask(task, e.target.checked)} />
            <div className="w-full">
              <div className="text-lg font-bold" key={index}>
                <input className="w-full outline-none" value={task.title} type="text" readOnly />
              </div>
              <div className={`text-sm opacity-75 ${task.description === "" ? "hidden" : ""}`} key={index}>
                <input className="w-full outline-none" value={task.description} type="text" readOnly />
              </div>
            </div>
          </div>
          {/* delete icon */}
          <div className="group p-1 hover:bg-current rounded-md">
            <svg onClick={() => taskDelete(task.id, "done")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 group-hover:stroke-zinc-50 dark:group-hover:stroke-zinc-700 transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};
