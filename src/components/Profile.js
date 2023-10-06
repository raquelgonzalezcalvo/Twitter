import "../styles/layout/Profile.scss";

const Profile = ({ profile }) => {
  const parseDescription = () => {
    if (profile.description) {
      const descriptionwithbreaklines = profile.description.replace(
        /\n/g,
        "<br/>"
      );
      return { __html: descriptionwithbreaklines };
    }
  };

  return (
    <section className="main__header">
      <header>
        <h1 className="header__title">
          <span className="header__account">{profile.user}</span>
          <span className="header__tweets">{profile.tweets}</span>
        </h1>

        <img src={profile.banner} alt={`Banner de ${profile.user}`} />

        <div className="header__content">
          <div className="header__profile-image">
            <img
              src={profile.logo}
              alt={`Imagen de perfil de ${profile.user}`}
            />
          </div>

          <div className="header__actions">
            <button className="header__follow-btn">Siguiendo</button>
          </div>

          <div className="header__account-info">
            <span className="header__acount-title">{profile.user}</span>
            <span className="header__acount-username">{profile.username}</span>
            <span className="header__acount-follow">Te sigue</span>
          </div>

          <h2
            className="header__account-description"
            dangerouslySetInnerHTML={parseDescription()}
          ></h2>

          <div className="header__account-data">
            <span className="header__account-region">{profile.region}</span>
            <a className="header__account-link" href={profile.webLink}>
              {profile.webText}
            </a>
            <span className="header__account-date">
              Se unió en {profile.date}
            </span>
          </div>

          <div className="header__followers-info">
            <span className="header__following">
              <span className="header__followers-number">
                {profile.following}
              </span>{" "}
              Siguiendo
            </span>
            <span className="header__followers">
              <span className="header__followers-number">
                {profile.followers}
              </span>{" "}
              Seguidores
            </span>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Profile;
