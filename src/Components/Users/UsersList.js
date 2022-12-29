import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["user-name"]}>{props.username}</div>
      <div className={classes["user-age"]}>({props.userage} year old)</div>
    </div>
  );
};

export default UsersList;
