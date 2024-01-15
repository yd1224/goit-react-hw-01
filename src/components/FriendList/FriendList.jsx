import { FriendListItem } from "../FriendListItem/FriendListItem"
import css from './FriendList.module.css';
export const FriendList = ({ friends } ) => {
    return (
        <ul className={css.friendList}>
     {friends.map(value=>(
	<li key={value.id}>
		<FriendListItem friend={value} />
            </li>
            ))}
</ul>
    );
}