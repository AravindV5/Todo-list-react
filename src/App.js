import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";
import ProfileDropdown from "./components/ProfileDropdown";

function App() {
  const initialProfiles = [
    {
      name: "Chandler",
      tasks: [],
    },
    {
      name: "Monica",
      tasks: [],
    },
    {
      name: "Joey",
      tasks: [],
    },
  ];

  const [profiles, setProfiles] = useState(initialProfiles);
  const [activeProfile, setActiveProfile] = useState(0);

  const addTask = (inputText) => {
    if (inputText.trim() !== "") {
      const updatedProfiles = [...profiles];
      updatedProfiles[activeProfile].tasks.push({
        text: inputText,
        completed: false,
      });
      setProfiles(updatedProfiles);
    }
  };

  const deleteTask = (index) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[activeProfile].tasks.splice(index, 1);
    setProfiles(updatedProfiles);
  };

  const toggleTaskCompleted = (index) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[activeProfile].tasks[index].completed =
      !updatedProfiles[activeProfile].tasks[index].completed;
    setProfiles(updatedProfiles);
  };

  const onChangeProfile = (index) => {
    setActiveProfile(index);
  };

  return (
    <div className="main-container">
      <header className="header">
        <ProfileDropdown
          profiles={profiles}
          activeProfile={activeProfile}
          onChangeProfile={onChangeProfile}
        />
      </header>

      <div className="center-container">
        <TodoInput addList={addTask} />

        <div className="tasks">
          {profiles[activeProfile].tasks.map((task, index) => (
            <Todolist
              key={index}
              item={task.text}
              completed={task.completed}
              toggleCompleted={() => toggleTaskCompleted(index)}
              deleteItem={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
