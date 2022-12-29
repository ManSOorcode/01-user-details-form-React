import React, { useState } from "react";

import AddedUsers from "./Components/Users/AddedUsers";
import Users from "./Components/Users/Users";

function App() {
  const users = [
    { id: "01", username: "Mansoor", userage: "18" },
    { id: "02", username: "danish", userage: "60" },
    { id: "03", username: "rithik", userage: "100" },
  ];

  const [usersData, setUsersData] = useState(users);

  const upComingNewUserDataHandler = (userData) => {
    setUsersData((prevData) => {
      return [userData, ...prevData];
    });
  };

  return (
    <div>
      <AddedUsers onAddedUsersData={upComingNewUserDataHandler} />
      <Users items={usersData} />
    </div>
  );
}

export default App;
