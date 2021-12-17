import classes from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return (
    <div className={classes.error}>
      <h2>{props.errorMessage}</h2>
    </div>
  );
};
export default ErrorMessage;
