const Header = () => {
  return (
    <header className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <a href="/" className="nav__logo">
            <img src="./icons/logo.svg" alt="mainLogo" />
          </a>
          <div className="nav__search">
            <input type="text" placeholder="Найти..." />
          </div>
          <div className="nav__photo">
            <span>Константин</span>
            <img src="./icons/photo.svg" alt="photoUser" />
          </div>
          <div className="nav__user">
            <img src="./icons/user.svg" alt="iconUser" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
