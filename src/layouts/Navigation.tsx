import { Link, useLocation } from 'react-router-dom';

import Logo from '@/assets/logo/logo.webp';
import { NAVIGATION_MENU_LIST } from '@/constants/navigationMenuList';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.container}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <ul>
        {NAVIGATION_MENU_LIST.map((menu) => (
          <Link key={menu.title} to={menu.path}>
            <li className={location.pathname === menu.path ? styles.active : ''}>
              <img className={styles.icon} src={menu.icon} alt={menu.title} />
              <span>{menu.title}</span>
            </li>
          </Link>
        ))}
      </ul>
      <hr />
    </nav>
  );
};
