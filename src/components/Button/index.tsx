import React from "react";
// @ts-ignore
import s from "./style.module.css";

type ButtonProps = {
  onClick: any;
  text: any;
  disabled: any;
};

const Button: React.FC<ButtonProps> = ({ disabled, onClick, text }) => {
  return (
    <button className={s.appPostButton} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
