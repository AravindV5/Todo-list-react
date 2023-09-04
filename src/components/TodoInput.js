import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    if (inputText.trim() === "") {
      return; // Prevent adding empty tasks
    }

    props.addList(inputText, selectedDate); // Pass selectedDate to the addList function
    setInputText("");
    setSelectedDate(null); // Clear selectedDate after adding the task
  };

  return (
    <div className="input-container">
      <div className="header-add-button">
        <h1 className="app-heading">All Tasks</h1>

        {/* Add the date picker */}
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
          dateFormat="MM/dd/yyyy"
          className="date-picker" // Add a class for styling
        />

        {/* Add a button to add tasks */}
        <button className="add-btn" onClick={handleAddTask}></button>
      </div>
      <input
        type="text"
        className="input-box-todo"
        placeholder="Add a new task inside 'All' category"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
}

export default TodoInput;
