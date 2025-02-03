import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="datepicker-container">
      <label>Select a Date:</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} // Prevents selecting past dates
        // isClearable
        // showYearDropdown
        // scrollableMonthYearDropdown
      />
      {selectedDate && <p>Selected Date: {format(selectedDate, "dd/MM/yyyy")}</p>}
    </div>
  );
};

export default MyDatePicker;
