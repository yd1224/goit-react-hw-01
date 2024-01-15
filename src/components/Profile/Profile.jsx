import css from './Profile.module.css';
import { ImProfile } from "react-icons/im";
export const Profile = ({ name, tag, location, image, action: { followers, views, likes } }) => {
  

  return (<div className={css.profile}>
    <div className={css.description}>
      <img
        src={image}
        alt="User avatar"
        className={css.avatar}
        width="50"
        height="50"
      />
      <p className={css.name}>{ name}</p>
      <p className={css.tag}>@{ tag}</p>
      <p className={css.location}>{ location}</p>
    </div>


    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
              <span className={css.value}>{ followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
              <span className={css.value}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.value}>{likes}</span>

      </li>
      <ImProfile size="14" />
    </ul>
  </div>);
}