import css from "../FriendList/FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ image, name, isOnline }) => {
	return (
		<div className={css.friendWrapper}>
			<img
				className={css.friendImg}
				src={image}
				alt='Avatar'
				width='100'
			/>
			<p className={css.friendName}>{name}</p>
      <p className={clsx(css.friendStatus, {
        [css.friendStatusOn]: isOnline === true,
        [css.friendStatusOff]: isOnline === false,
      })}
        >{isOnline ? "Online" : "Offline"}</p>
		</div>
	);
};

export default FriendListItem;
