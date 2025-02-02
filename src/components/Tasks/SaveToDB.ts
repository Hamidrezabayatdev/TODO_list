import { ITask } from "./ITask";

export function saveToDB (tasks: ITask[], doneTasks: ITask[]) {
  fetch("https://todo-list-dce98-default-rtdb.firebaseio.com/tasks.json", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tasks, doneTasks }),
  })
    .then((response) => {
      console.log("Saved to DB", response);
    })
    .catch((error) => {
      console.error("Error saving to DB:", error);
    });
}