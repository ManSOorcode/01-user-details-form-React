import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onPass}>
      Okay
    </button>
  );
};

export default Button;
