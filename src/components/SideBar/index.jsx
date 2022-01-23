import s from './style.module.css'

const SideBar = () => {
	return (
		<nav className={s.appNav}>
			<div>
				<a href="#" className={s.active}>Profile</a>
			</div>
			<div>
				<a href="#">Message</a>
			</div>
			<div>
				<a href="#">News</a>
			</div>
			<div>
				<a href="#">Music</a>
			</div>
			<div>
				<a href="#">Settings</a>
			</div>
		</nav>
	);
};

export default SideBar;
