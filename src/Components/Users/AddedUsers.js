import React from "react";

import Card from "../UI/Card";
import classes from "./AddUsers.module.css";

const AddedUsers = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Card ClassName={classes.input}>
      <form onSumbit={addUserHandler}>
        <label htmlFor="userName">Username :</label>
        <input id="userName" type="text" />
        <label htlFor="age">Age (Years) :</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
    // <div className="users-data">
    //   {/* <div className="user-heading">
    //     <h2>Users Data</h2>
    //   </div> */}
    //   <div className="user-data">
    //     <p>Mansoor</p>
    //     <p>
    //       24 <span>(age is correct)</span>
    //     </p>
    //   </div>
    // </div>
  );
};

export default AddedUsers;
