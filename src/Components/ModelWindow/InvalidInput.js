import Button from "./Button";
import Overrelay from "../UI/Overrelay";

import classes from "./InvalidInput.module.css";

const InvalidInput = ({ onOpen, onClose }) => {
  // console.log(!onOpen());
  // console.log(onClose());
  // if (!onOpen()) null;

  return (
    <Overrelay onTap={onClose}>
      <div className={classes.invalid}>
        <div className={classes["heading-name"]}>Invalid input</div>
        <p className={classes.contents}>
          Please enter a valid name & age (non empty value)
        </p>
        <Button onPass={onClose} />
      </div>
    </Overrelay>
  );
};

export default InvalidInput;
