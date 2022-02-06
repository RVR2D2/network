import s from "./style.module.css";

const TextArea = ({ onChange, value }) => {
  return (
    <div className={s.textArea}>
      <textarea placeholder="Comments…" onChange={onChange} value={value} />
    </div>
  );
};

export default TextArea;
