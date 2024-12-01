import "./appHeader.scss";
import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="app_header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <a NavLink exact activeStyle={{ color: "#9f0013" }} to="/">
              Characters
            </a>
          </li>
          <li>
            <a NavLink exact activeStyle={{ color: "#9f0013" }} to="/comics">
              Comics
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
