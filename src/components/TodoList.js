import React from "react";

function Todolist({ deleteIcon, ...props }) {
  const { item, index, completed, toggleCompleted, deleteItem, date } = props; // Include the 'date' prop

  return (
    <li className={`list-item ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(index)}
        className="checkbox-style"
        style={{ marginRight: "10px" }}
      />
      <span>{item}</span>
      {date && ( // Render the date if it exists
        <span className="task-date"> ({date.toLocaleDateString()})</span>
      )}
      <span className="icons">
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={() => deleteItem(index)}
        ></i>
      </span>
    </li>
  );
}

export default Todolist;
