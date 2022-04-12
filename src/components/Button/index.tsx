import React from "react";
// @ts-ignore
import s from "./style.module.css";

type ButtonProps = {
  onClick: any;
  text: any;
};

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className={s.appPostButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
