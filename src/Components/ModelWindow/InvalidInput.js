import Button from "./Button";
import Overrelay from "../UI/Overrelay";

import classes from "./InvalidInput.module.css";

const InvalidInput = (props) => {
  return (
    <Overrelay onTap={props.onClose}>
      <div className={classes.invalid}>
        <div className={classes["heading-name"]}>Invalid input</div>
        <p className={classes.contents}>
          Please enter a valid name & age (non empty value)
        </p>
        <Button onPass={props.onClose} />
      </div>
    </Overrelay>
  );
};

export default InvalidInput;
