/*@ts-ignore*/
import s from "./style.module.css";
import React from "react";

type PropsType = {
  message: string;
};

const DialogMessage: React.FC<PropsType> = ({ message }) => {
  return <div className={s.messagesItem}>{message}</div>;
};

export default DialogMessage;
