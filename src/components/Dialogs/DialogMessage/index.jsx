import s from './style.module.css'

const DialogMessage = ({ message }) => {
  return (
    <div className={s.messagesItem}>{message}</div>
  );
};

export default DialogMessage;
