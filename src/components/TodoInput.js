import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="input-container">
      <div className="header-add-button">
        <h1 className="app-heading">All Tasks</h1>

        <button
          className="add-btn"
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          + Add new task
        </button>
      </div>
      <input
        type="text"
        className="input-box-todo"
        placeholder="Add a new task inside 'All' category"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        //onKeyDown={handleEnterPress}
      />
    </div>
  );
}

export default TodoInput;
