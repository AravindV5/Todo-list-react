import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, { text: inputText, completed: false }]);
    }
  };

  const deleteListItem = (index) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo([...newListTodo]);
  };

  const toggleCompleted = (index) => {
    const updatedList = [...listTodo];
    updatedList[index].completed = !updatedList[index].completed;
    setListTodo(updatedList);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />{" "}
        {listTodo.map((listItem, i) => (
          <Todolist
            key={i}
            index={i}
            item={listItem.text}
            completed={listItem.completed}
            toggleCompleted={toggleCompleted}
            deleteItem={deleteListItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
