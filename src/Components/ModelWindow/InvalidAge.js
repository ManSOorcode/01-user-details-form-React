import Overrelay from "../UI/Overrelay";
import Button from "./Button";

import classes from "./InvalidAge.module.css";
const InvalidAge = (props) => {
  if (!props.onOpen) {
    return null;
  }
  return (
    <Overrelay onTap={props.onClose}>
      <div className={classes["invalid-age"]}>
        <div className={classes["heading-name-age"]}>Invalid input</div>
        <p className={classes["contents-age"]}>
          Please enter a valid age (age will be more tha 0)
        </p>
        <Button onPass={props.onClose} />
      </div>
    </Overrelay>
  );
};

export default InvalidAge;
