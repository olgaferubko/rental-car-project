import { useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';
import s from './Header.module.css';

const Header = () => {
  const { pathname } = useLocation();

  const buildLinkClass = (targetPath) => {
    return clsx(s.link, pathname === targetPath && s.active);
  };

  return (
    <header className={s.header}>
      <Link to="/" className={s.logo}>
        <img src="/Logo.svg" alt="Rental Car Logo" />
      </Link>
      <nav className={s.navList}>
        <Link to="/" className={buildLinkClass('/')}>
          Home
        </Link>
        <Link to="/catalog" className={buildLinkClass('/catalog')}>
          Catalog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
