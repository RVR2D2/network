import s from './style.module.css';
import Post from "./Post";

const MyPost = () => {
	return (
		<div className={s.appPost}>
			<h3>my post</h3>
			<div className={s.appNewPost}>
				<textarea placeholder='Comments…' ></textarea>
				<button className={s.appPostButton}>Send</button>
			</div>
			<div>
				<Post/>
			</div>
		</div>
	);
};

export default MyPost;