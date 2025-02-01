import React, { useState } from "react";

export const NewTask = (props: { addTask: (taskInputTitle: string, taskInputDescription: string) => void }) => {
  const [NewTaskInputTitle, setNewTaskInputTitle] = useState("");
  const [NewTaskInputDescription, setNewTaskInputDescription] = useState("");
  function handleSubmit() {
    props.addTask(NewTaskInputTitle, NewTaskInputDescription);
    setNewTaskInputTitle("");
    setNewTaskInputDescription("");
  }
  return (
    <div className="p-3 mt-5 w-full  rounded-2xl border-2 border-zinc-400 dark:border-zinc-600 border-dashed">
      <div className="flex items-center gap-2">
        <button onClick={handleSubmit}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 border-2 rounded-full opacity-50 hover:bg-zinc-700 hover:border-zinc-700 hover:stroke-zinc-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <input value={NewTaskInputTitle} onChange={(e) => setNewTaskInputTitle(e.target.value)} type="text" placeholder="تسک جدید..." className="w-full text-lg bg-transparent outline-none" />
      </div>
      <input value={NewTaskInputDescription} onChange={(e) => setNewTaskInputDescription(e.target.value)} type="text" placeholder="توضیحات" className="w-full mt-2 mr-8 text-sm bg-transparent outline-none" />
    </div>
  );
};
