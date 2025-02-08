import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {convertPersianToEnglishNumbers} from "../utils/persianNumberToEnglish";
const PersianDatePicker = () => {
  const [dateTime, setDateTime] = useState<string[] | null>(null);
  
  // Function to handle date selection
  const handleChange = (date: DateObject | null) => {
    if (date) {
      console.log(convertPersianToEnglishNumbers(date.format("YYYY/MM/DD HH:mm")).split(" "));
      setDateTime(convertPersianToEnglishNumbers(date.format("YYYY/MM/DD HH:mm")).split(" ")); // Convert DateObject to string
    } else {
      setDateTime(null);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-xl shadow-lg bg-white">
      <label className="text-lg font-semibold text-gray-700">تاریخ و ساعت را انتخاب کنید:</label>
      <DatePicker
        onChange={handleChange} // ✅ Use the fixed function
        calendar={persian} // ✅ Persian calendar
        locale={persian_fa} // ✅ Persian localization
        format="YYYY/MM/DD HH:mm"
        minDate={new Date()} // Prevent selecting past dates
        plugins={[<TimePicker key="timepicker" format="HH:mm" mStep={5} />]} // ✅ Use the TimePicker correctly in the plugin array
        className="p-2 border rounded-md w-64 text-center"
      />
      {dateTime && <p className="text-md font-medium text-gray-800">تاریخ انتخاب‌شده: {dateTime}</p>}
    </div>
  );
};

export default PersianDatePicker;
