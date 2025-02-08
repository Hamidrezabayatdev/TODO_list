import { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { convertPersianToEnglishNumbers } from "../utils/persianNumberToEnglish";
import { set } from "date-fns";
interface PersianDatePickerProps {
  setNewTaskDate: (date: string | null) => void;
  setNewTaskTime: (time: string | null) => void;
}
const PersianDatePicker = ({ setNewTaskDate, setNewTaskTime }: PersianDatePickerProps) => {
  const [dateTime, setDateTime] = useState<string[] | null>(null);
  // ✅ Ensure state changes are reflected in parent component
  useEffect(() => {
    console.log(dateTime);
    if (dateTime) {
      setNewTaskDate(dateTime[0]);
      setNewTaskTime(dateTime[1]);
    } else {
      setNewTaskDate(null);
      setNewTaskTime(null);
    }
  }, [dateTime, setNewTaskDate, setNewTaskTime]); // Runs whenever dateTime changes
  // Function to handle date selection
  const handleChange = (date: DateObject | null) => {
    if (date) {
      const convertedDate = convertPersianToEnglishNumbers(date.format("YYYY/MM/DD HH:mm")).split(" ");
      setDateTime(convertedDate); // ✅ This updates state asynchronously
    } else {
      setDateTime(null);
    }
  };
  return (
    <div className="bg-white">
      {/* <label className="text-lg font-semibold text-zinc-700">تاریخ و ساعت را انتخاب کنید:</label> */}
      <DatePicker
        value={dateTime?.join(" ")}
        onChange={handleChange} // ✅ Use the fixed function
        calendar={persian} // ✅ Persian calendar
        locale={persian_fa} // ✅ Persian localization
        format="YYYY/MM/DD HH:mm"
        minDate={new Date()} // Prevent selecting past dates
        plugins={[<TimePicker key="timepicker" format="HH:mm" mStep={5} />]} // ✅ Use the TimePicker correctly in the plugin array
        placeholder="انتخاب تاریخ و ساعت"
      />
      {/* {dateTime && <p className="text-md font-medium text-gray-800">تاریخ انتخاب‌شده: {dateTime}</p>} */}
    </div>
  );
};

export default PersianDatePicker;
