import s from './style.module.css';
import user from '../../../../assets/user.webp';

const Post = ({ message, like }) => {
  return (
    <>
      <div className={s.post}>
        <img src={user} alt='' />
        <div className={s.contentPost}>
          {message}
        </div>
      
      </div>
      <button>❤️ | {like}</button>
    </>
  );
};

export default Post;