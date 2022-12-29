import classes from "./Overrelay.module.css";

const Overrelay = (props) => {
  return (
    <div className={classes["over-relay"]} onClick={props.onTap}>
      {props.children}
    </div>
  );
};

export default Overrelay;
