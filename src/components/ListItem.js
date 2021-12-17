import { forwardRef } from "react";
import classes from "./ListItem.module.css";

const ListItem = forwardRef((props, ref) => {
  return (
    <div onClick={props.onClick} ref={ref} className={classes["list-item"]}>
      <img src={props.imageUrl} />
      <h3
        className={classes.content}
      >{`${props.prefix} ${props.name} ${props.lastName}`}</h3>
      <p className={classes.content}>{`${props.title}`}</p>
    </div>
  );
});

export default ListItem;
