import './FriendListItem.css'
export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {

    return (
   <div className="list-item"   key={id}>
  <img className="avatar" src={avatar} alt="Avatar" width="48" />
            <p className="name">{ name}</p>
            <p className="status"><span>{ isOnline? "Online": "Offline"}</span></p>
</div>
    )
}