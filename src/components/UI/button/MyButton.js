import classes from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{ borderColor: props.color, color: props.color }}
      className={classes.btn}
    >
      {children}
    </button>
  );
};

export default MyButton;
