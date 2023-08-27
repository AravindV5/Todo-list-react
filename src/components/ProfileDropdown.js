import React from "react";

function ProfileDropdown({ profiles, activeProfile, onChangeProfile }) {
  return (
    <select
      value={activeProfile}
      onChange={(e) => onChangeProfile(parseInt(e.target.value))}
    >
      {profiles.map((profile, index) => (
        <option key={index} value={index}>
          {profile.name}
        </option>
      ))}
    </select>
  );
}

export default ProfileDropdown;
