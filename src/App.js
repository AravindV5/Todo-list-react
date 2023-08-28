import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ProfileDropdown from "./components/ProfileDropdown";

function App() {
  const initialProfiles = [
    {
      name: "Chandler",
      profilePic:
        "https://abuwjaawap.cloudimg.io/v7/_lgbtqnation-assets_/assets/2019/10/matthew-perry-chandler-bing-gay.jpg?auto=format&auto=compress&crop=faces&fit=crop&gravity=face&w=1200&h=805",
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
      setProfiles((prevProfiles) => {
        const updatedProfiles = [...prevProfiles];
        updatedProfiles[activeProfile].tasks.push({
          text: inputText,
          completed: false,
        });
        return updatedProfiles;
      });
    }
  };

  const deleteTask = (index) => {
    setProfiles((prevProfiles) => {
      const updatedProfiles = [...prevProfiles];
      updatedProfiles[activeProfile].tasks.splice(index, 1);
      return updatedProfiles;
    });
  };

  const toggleTaskCompleted = (index) => {
    setProfiles((prevProfiles) => {
      const updatedProfiles = [...prevProfiles];
      updatedProfiles[activeProfile].tasks[index].completed =
        !updatedProfiles[activeProfile].tasks[index].completed;
      return updatedProfiles;
    });
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
            <TodoList
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
