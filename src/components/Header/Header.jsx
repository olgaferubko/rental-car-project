import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Link } from 'react-router-dom';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header className={s.header}>
      <Link to="/" className={s.logo}>
        <img src="/Logo.svg" alt="Rental Car Logo" />
      </Link>
      <nav className={s.navList}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};




export default Header;