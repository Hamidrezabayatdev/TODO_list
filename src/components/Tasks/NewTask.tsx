import { useState, useRef } from "react";
import PersianDatePicker from "../DatePickerComponent";
import { SelectCategories } from "./SelectCategories";
interface NewTaskProps {
  addTask: (taskInputTitle: string, taskInputDescription: string, taskInputCategories: string[]) => void;
}
export const NewTask = (props: NewTaskProps) => {
  const [NewTaskInputTitle, setNewTaskInputTitle] = useState("");
  const [NewTaskInputDescription, setNewTaskInputDescription] = useState("");
  const [NewTaskInputCategories, setNewTaskInputCategories] = useState<string[]>([]);
  function handleSubmit() {
    props.addTask(NewTaskInputTitle, NewTaskInputDescription, NewTaskInputCategories);
    setNewTaskInputTitle("");
    setNewTaskInputDescription("");
    setNewTaskInputCategories([]);
  }
  const NewTaskInputTitleRef = useRef<HTMLInputElement>(null);
  const NewTaskInputDescriptionRef = useRef<HTMLInputElement>(null);
  return (
    <div className="p-3 mt-5 w-full flex flex-col gap-2 sm:flex-row sm:items-center justify-between rounded-2xl border-2 border-zinc-400 dark:border-zinc-600 border-dashed">
      <div>
        <div className="flex items-center gap-2">
          <button onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 border-2 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-100 hover:border-zinc-700 dark:hover:border-zinc-100 hover:stroke-zinc-50 dark:hover:stroke-zinc-700 transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
          <input
            ref={NewTaskInputTitleRef}
            value={NewTaskInputTitle}
            onChange={(e) => setNewTaskInputTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") NewTaskInputDescriptionRef.current?.focus();
            }}
            type="text"
            placeholder="تسک جدید..."
            className="w-full text-lg bg-transparent outline-none"
          />
        </div>
        <input
          ref={NewTaskInputDescriptionRef}
          value={NewTaskInputDescription}
          onChange={(e) => setNewTaskInputDescription(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
              NewTaskInputTitleRef.current?.focus();
            }
          }}
          type="text"
          placeholder="توضیحات"
          className="w-full mt-2 mr-8 text-sm bg-transparent outline-none"
        />
      </div>
      <div>
        <SelectCategories setNewTaskInputCategories={setNewTaskInputCategories} />
      </div>
      {/* <PersianDatePicker /> */}
    </div>
  );
};
