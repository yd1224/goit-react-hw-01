import css from './FriendListItem.module.css'
// import clsx from "clsx";
export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
    // const statusClasses = ["status"];
    // if (isOnline) {
    //     statusClasses.push("online");
    // } else {
    //      statusClasses.push("offline");
    // }
    // console.log(statusClasses.join(" "));
  
    // const statusClasses = clsx(css.status, {
    //     [css.online]: isOnline,
    //      [css.offline]: !isOnline
    // });
    const statusClass = isOnline ? css.online : css.offline;
    return (
   <div className={css.listItem}   key={id}>
  <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{ name}</p>
            {/* <p className={statusClasses.join(" ")}><span>{ isOnline? "Online": "Offline"}</span></p> */}
            {/* <p className={statusClasses}><span>{ isOnline? "Online": "Offline"}</span></p> */}
                   <p className={statusClass}><span>{ isOnline? "Online": "Offline"}</span></p>
</div>
    )
}