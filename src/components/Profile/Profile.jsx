import './Profile.css';
export const Profile = ({ name, tag, location, image, action: { followers, views, likes } }) => {
  

  return (<div className="profile">
    <div className="description">
      <img
        src={image}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{ name}</p>
      <p className="tag">@{ tag}</p>
      <p className="location">{ location}</p>
    </div>


    <ul className="stats">
      <li>
        <span className="label">Followers</span>
              <span className="value">{ followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
              <span className="value">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
              <span className="value">{ likes}</span>
      </li>
    </ul>
  </div>);
}