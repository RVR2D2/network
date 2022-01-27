import s from './style.module.css';
import DialogItem from './DialogItem';
import DialogMessage from './DialogMessage';

const Dialogs = ({ dialogs, messages }) => {
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <h3>Dialog</h3>
        {dialogs &&
          dialogs.map((item) => (
            <DialogItem key={item.id} name={item.name} id={item.id} />
          ))
        }
      </div>
      <div className={s.messages}>
        <h3>Message</h3>
        {messages &&
          messages.map((item) => (
            <DialogMessage key={item.id} message={item.message} />
          ))
        }
      </div>
    </div>
  );
};

export default Dialogs;