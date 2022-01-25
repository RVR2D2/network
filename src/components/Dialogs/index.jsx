import s from './style.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <h3>Dialog</h3>
        <div className={s.dialogsItemsItem}>
          <NavLink activeClassName={s.active} to='/dialogs/1'>Vadim</NavLink>
        </div>
        <div className={s.dialogsItemsItem}>
          <NavLink activeClassName={s.active} to='/dialogs/2'>Nikita</NavLink>
        </div>
        <div className={s.dialogsItemsItem}>
          <NavLink activeClassName={s.active} to='/dialogs/3'>Arsenii</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <h3>Message</h3>
        <div className={s.messagesItem}>Hello JS</div>
        <div className={s.messagesItem}>Hello Node</div>
        <div className={s.messagesItem}>Hello React</div>
      </div>
    </div>
  );
};

export default Dialogs;