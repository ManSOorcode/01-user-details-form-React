import classes from "./Button.module.css";

const Button = ({ onPass }) => {
  // console.log(onPass());
  return (
    <button className={classes.button} onClick={onPass}>
      Okay
    </button>
  );
};

export default Button;
