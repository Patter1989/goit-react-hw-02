import css from "./Profile.module.css"
const Profile = ({ name, tag, location, image, stats }) => {
  return (
		<div className={css.wrapper}>
			<div className={css.userWrapper}>
				<img
					className={css.img}
					src={image}
					alt='User avatar'
				/>
				<p className={css.userName}>{name}</p>
				<p className={css.userInfo}>@{tag}</p>
				<p className={css.userInfo}>{location}</p>
			</div>

			<ul className={css.socialList}>
				{Object.keys(stats).map((key) => (
					<li
						key={key}
						className={css.socialInfo}
					>
						<span className={css.socialName}>{key}</span>
						<span className={css.socialNumber}>{stats[key]}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Profile;