import './FriendListItem.css'
import clsx from "clsx";
export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
    // const statusClasses = ["status"];
    // if (isOnline) {
    //     statusClasses.push("online");
    // } else {
    //      statusClasses.push("offline");
    // }
    // console.log(statusClasses.join(" "));
    const statusClasses = clsx("status", {
        "online": isOnline,
        "offline": !isOnline
    });

    return (
   <div className="list-item"   key={id}>
  <img className="avatar" src={avatar} alt="Avatar" width="48" />
            <p className="name">{ name}</p>
            {/* <p className={statusClasses.join(" ")}><span>{ isOnline? "Online": "Offline"}</span></p> */}
            <p className={statusClasses}><span>{ isOnline? "Online": "Offline"}</span></p>
</div>
    )
}