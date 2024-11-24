import "./appHeader.scss";
import { Link } from "react-router-dom";

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
            <a Link to="/">
              Characters
            </a>
          </li>
          <li>
            <a Link to="/comics">
              Comics
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
