import React, { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";
import ProfileDropdown from "./components/ProfileDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  // Load profiles and activeProfile from local storage or use initial values
  const initialProfiles = JSON.parse(localStorage.getItem("profiles")) || [
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
  const [activeProfile, setActiveProfile] = useState(
    parseInt(localStorage.getItem("activeProfile")) || 0
  );

  // Function to update local storage with profiles
  const updateLocalStorage = (profiles) => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  };

  // Function to update local storage with activeProfile
  const updateActiveProfile = (index) => {
    localStorage.setItem("activeProfile", index);
  };

  // Function to add a task to the active profile
  const addTask = (text, date) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[activeProfile].tasks.push({
      text,
      completed: false,
      date, // Store the date in the task object
    });
    setProfiles(updatedProfiles);
    updateLocalStorage(updatedProfiles);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[activeProfile].tasks.splice(index, 1);
    setProfiles(updatedProfiles);
    updateLocalStorage(updatedProfiles);
  };

  // Function to toggle task completion
  const toggleTaskCompleted = (index) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[activeProfile].tasks[index].completed =
      !updatedProfiles[activeProfile].tasks[index].completed;
    setProfiles(updatedProfiles);
    updateLocalStorage(updatedProfiles);
  };

  // Function to change the active profile
  const onChangeProfile = (index) => {
    setActiveProfile(index);
    updateActiveProfile(index);
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
              date={task.date} // Pass the date to TodoList component
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
