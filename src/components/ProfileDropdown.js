import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function ProfileDropdown({ profiles, activeProfile, onChangeProfile }) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleProfileSelect = (index) => {
    onChangeProfile(index);
    setShowDropdown(false);
  };

  return (
    <div className="custom-profile-select">
      <div
        className="active-profile"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <FontAwesomeIcon icon={faAngleDown} />
        <img
          className="profile-picture"
          src={profiles[activeProfile].profilePic}
          alt={profiles[activeProfile].name}
        />
        <p>{profiles[activeProfile].name}</p>
      </div>

      {showDropdown && (
        <div className="profile-dropdown">
          {profiles.map(
            (profile, index) =>
              index !== activeProfile && (
                <div
                  className="profile-selection"
                  key={index}
                  onClick={() => handleProfileSelect(index)}
                >
                  <img
                    className="profile-picture"
                    src={profile.profilePic}
                    alt={profile.name}
                  />
                  <p>{profile.name}</p>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
