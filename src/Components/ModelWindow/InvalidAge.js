import Overrelay from "../UI/Overrelay";
import Button from "./Button";

import classes from "./InvalidAge.module.css";
const InvalidAge = (props) => {
  return (
    <Overrelay onTap={props.onClose}>
      <div className={classes["invalid_age"]}>
        <div className={classes["heading-name_age"]}>Invalid input</div>
        <p className={classes["contents_age"]}>
          Please enter a valid age (age will be more tha 0)
        </p>
        <Button onPass={props.onClose} />
      </div>
    </Overrelay>
  );
};

export default InvalidAge;
