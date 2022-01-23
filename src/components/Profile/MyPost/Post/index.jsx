import s from './style.module.css'
import user from '../../../../assets/user.webp'

const Post = () => {
	return (
		<div className={s.post}>
			<img src={user} alt=""/>
			<div className={s.contentPost}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis et
				facilis fugit illum neque nisi obcaecati quod sapiente sunt?
			</div>
			<button>❤️</button>
		</div>
	);
};

export default Post;