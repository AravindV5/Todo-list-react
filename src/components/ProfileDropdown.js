import React from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function ProfileDropdown({ profiles, activeProfile, onChangeProfile }) {
  const [profile, setProfile] = React.useState(profiles[0]);
  const [profileList, showProfileList] = React.useState(false);
  const handleProfileSelect = (val) => {
    console.log(val, "val");
    setProfile(profiles[val]);
    showProfileList(!profileList);
  };
  // console.log(profileList);
  return (
    <div className="custom-profile-select">
      <div className="active-profile">
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={() => showProfileList(!profileList)}
        />
        <img className="profile-picture" src={profile.profilePic} />
        <p>{profile.name}</p>
      </div>
      {profileList &&
        profiles.map((val, index) => {
          return (
            val.name !== profile.name && (
              <div
                className="profile-selction-div"
                onClick={() => handleProfileSelect(index)}
                key={index}
                value={index}
              >
                <img
                  className="profile-picture"
                  src={val.profilePic}
                  // alt="image not found"
                />
                <p>{val.name}</p>
              </div>
            )
          );
        })}
    </div>
    // <select
    //   value={activeProfile}
    //   onChange={(e) => onChangeProfile(parseInt(e.target.value))}
    // >
    //   {profiles.map((profile, index) => (
    //     <option src="./joey.jpg" key={index} value={index}>
    //       {profile.name}
    //     </option>
    //   ))}
    // </select>
  );
}

export default ProfileDropdown;
