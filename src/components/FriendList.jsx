import {FriendListItem} from "./FriendListItem"
export const FriendList = ({ friends } ) => {
    // console.log(friends[0]);
    return (
        <ul className="friend-list">
	{/* Кількість li залежить від кількості об'єктів в масиві */}

            {friends.map(value=>(
	<li key={value.id}>
		<FriendListItem friend={value} />
            </li>
            ))}
</ul>
    );
}