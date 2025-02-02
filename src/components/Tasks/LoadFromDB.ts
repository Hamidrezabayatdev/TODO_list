import { ITask } from "./ITask";
interface loadFromDBProps {
  setTasks: (tasks: ITask[]) => void;
  setDoneTasks: (tasks: ITask[]) => void;
}
export function loadFromDB({ setTasks, setDoneTasks }: loadFromDBProps) {
  fetch("https://todo-list-dce98-default-rtdb.firebaseio.com/tasks.json")
    .then((response) => response.json())
    .then((data) => {
      const { tasks, doneTasks } = data;
      console.log(tasks, doneTasks);
      setTasks(tasks);
      setDoneTasks(doneTasks);
    })
    .catch((error) => {
      console.error("Error loading from DB:", error);
    });
}