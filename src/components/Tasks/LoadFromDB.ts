import { ITask } from "../../types/ITask";
interface loadFromDBProps {
  setTasks: (tasks: ITask[]) => void;
  setDoneTasks: (tasks: ITask[]) => void;
}
export function loadFromDB({ setTasks, setDoneTasks }: loadFromDBProps) {
  fetch("https://todo-list-dce98-default-rtdb.firebaseio.com/tasks.json")
    .then((response) => response.json())
    .then((data) => {
      let { tasks, doneTasks } = data;
      if (tasks === undefined) {
        tasks = [];
      }
      if (doneTasks === undefined) {
        doneTasks = [];
      }
      console.log(tasks, doneTasks);
      setTasks(tasks);
      setDoneTasks(doneTasks);
    })
    .catch((error) => {
      console.error("Error loading from DB:", error);
    });
}
