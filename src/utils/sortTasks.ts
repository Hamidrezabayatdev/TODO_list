import jalali from "jalali-moment"; // Persian calendar support
import { ITask } from "../types/ITask";
export const sortTasks = (tasks: ITask[]) => {
  const todayDate = jalali().locale("fa").format("YYYY/MM/DD"); // Get today's Jalali date

  return tasks.sort((a, b) => {
    // 1️⃣ Handle null dates (nulls come after today but before past/future dates)
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1; // Null comes after today
    if (!b.date) return -1;

    // 2️⃣ Compare with today
    if (a.date === todayDate && b.date !== todayDate) return -1;
    if (b.date === todayDate && a.date !== todayDate) return 1;

    // 3️⃣ Handle past and future dates
    if (a.date !== todayDate && b.date !== todayDate) {
      if (a.date < todayDate && b.date >= todayDate) return 1; // Past dates go last
      if (b.date < todayDate && a.date >= todayDate) return -1;
      if (a.date !== b.date) return a.date.localeCompare(b.date); // Sort future dates normally
    }

    // 4️⃣ Handle null times (null times go last)
    if (!a.time && !b.time) return 0;
    if (!a.time) return 1;
    if (!b.time) return -1;

    // 5️⃣ Compare times (HH:mm format)
    return a.time.localeCompare(b.time);
  });
};
