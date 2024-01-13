import {FriendListItem} from "./FriendListItem"
export const FriendList = ({ friends } ) => {
    return (
        <ul className="friend-list">
     {friends.map(value=>(
	<li key={value.id}>
		<FriendListItem friend={value} />
            </li>
            ))}
</ul>
    );
}