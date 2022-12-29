import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import NewUserData from "./NewUserData";

const AddedUsers = (props) => {
  const newUserDataHandler = (userData) => {
    const userDataObject = {
      ...userData,
      id: Math.random().toString(),
    };

    props.onAddedUsersData(userDataObject);
  };
  return (
    <Card ClassName={classes.input}>
      <NewUserData onUserData={newUserDataHandler} />
    </Card>
  );
};

export default AddedUsers;
