import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"
const FriendList = ({friends}) => {
  return (
		<ul className={css.friendList}>
			{friends.map((friend) => (
				<li key={friend.name}>
					<FriendListItem
            name={friend.name}
            image={friend.avatar}
            isOnline={friend.isOnline}
          />
				</li>
			))}
		</ul>
	);
};



export default FriendList;

