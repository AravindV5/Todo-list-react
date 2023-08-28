import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";
import ProfileDropdown from "./components/ProfileDropdown";

function App() {
  const initialProfiles = [
    {
      name: "Chandler",
      profilePic:
        "https://preview.redd.it/what-are-your-overall-thoughts-on-chandler-bing-v0-p4ausbx0jypa1.png?auto=webp&s=222b758f8da8c68ee1c9e18b03eb056652cc9e9a",
      tasks: [],
    },
    {
      name: "Monica",
      profilePic:
        "https://hips.hearstapps.com/goodhousekeeping-uk/main/embedded/14741/monica_friends_-_best_moments_-_funniest_character_-_good_housekeeping.jpg",
      tasks: [],
    },
    {
      name: "Joey",
      profilePic:
        "https://i.pinimg.com/originals/41/82/f1/4182f162ed8d32b7b0e9cbd5f841716f.jpg",
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
      <div className="header">
        <ProfileDropdown
          profiles={profiles}
          activeProfile={activeProfile}
          onChangeProfile={onChangeProfile}
        />
      </div>

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
