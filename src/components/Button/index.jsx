import s from "./style.module.css";

const Button = ({ onClick, text }) => {
  return (
    <button className={s.appPostButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
