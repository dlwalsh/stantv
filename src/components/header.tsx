import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <img className="header__logo-image" alt="Stan logo" src="/logo.svg" />
    </div>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="/tv-shows">
            TV Shows
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink className="header__nav-link" to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export { Header };
