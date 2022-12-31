import { getUUID } from "../../Utils/getUUID";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import NewUserData from "./NewUserData";

const AddedUsers = (props) => {
  // let i = 0;
  const newUserDataHandler = (userData) => {
    const userDataObject = {
      ...userData,
      id: getUUID(),
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
