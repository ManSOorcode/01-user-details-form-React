import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div
      id={props.id}
      className={classes.container}
      onClick={() => props.onClick(props.id)}
    >
      <div className={classes["user-name"]}>{props.username}</div>
      <div className={classes["user-age"]}>({props.userage} year old)</div>
    </div>
  );
};

export default UsersList;
