// @ts-ignore
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name = "vadim", id = 1 }) => {
  return (
    <div className={s.dialogsItemsItem}>
      <NavLink to={`dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
