import React from "react";

import AddedUsers from "./Components/Users/AddedUsers";

function App() {
  const users = [
    { name: "Mansoor", age: "18" },
    { name: "danish", age: "60" },
    { name: "rithik", age: "100" },
  ];
  return (
    <div>
      <AddedUsers />;
    </div>
  );
}

export default App;
