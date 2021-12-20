import classes from "./MyTextInput.module.css";

const MyTextInput = (props) => {
  return <input type="text" className={classes.input} {...props} />;
};

export default MyTextInput;
