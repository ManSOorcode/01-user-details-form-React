// import ContainerCard from "../UI/ContainerCard";
// import UserCard from "../UI/UserCard";

// import React, { useState } from "react";

import UsersList from "./UsersList";
// import ContainerCard from "../UI/ContainerCard";

import classes from "./Users.module.css";
// import { useState } from "react";

const Users = (props) => {
  // const [elements, deletElement] = useState(props.items);

  return (
    <div className={classes.users}>
      {props.items.map((user) => (
        <UsersList
          onClick={props.onClick}
          id={user.id}
          key={user.id}
          username={user.username}
          userage={user.userage}
        />
      ))}
    </div>
  );
};

export default Users;

/*{/* <UsersList
        username={props.items[0].username}
        userage={props.items[0].userage}
      />
      <UsersList
        username={props.items[1].username}
        userage={props.items[1].userage}
      />
      <UsersList
        username={props.items[2].username}
        userage={props.items[2].userage}
      />  */
