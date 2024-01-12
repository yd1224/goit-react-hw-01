export const FriendListItem = ({ friend:{avatar,name, isOnline, id} } ) => {

    return (
   <div className={id}>
  <img className="avatar" src={avatar} alt="Avatar" width="48" />
            <p className="name">{ name}</p>
            <p className="status">{ isOnline? "Online": "Offline"}</p>
</div>
    )
}