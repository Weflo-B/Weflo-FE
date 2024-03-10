import { Link, useLocation } from 'react-router-dom';

import Logo from '@/assets/logo/logo.webp';
import { NAVIGATION_MENU_LIST } from '@/constants/navigationMenuList';
import { getOrderCount } from '@/utils/orderCount';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const location = useLocation();
  const count = getOrderCount();

  return (
    <nav className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <ul>
        {NAVIGATION_MENU_LIST.map((menu) => (
          <Link key={menu.title} to={menu.path}>
            <li className={location.pathname.startsWith(menu.path) ? styles.active : ''}>
              <img className={styles.icon} src={menu.icon} alt={menu.title} />
              <span>{menu.title}</span>
              {menu.title === '부품주문' && <div className={styles.orderCount}>{count}</div>}
            </li>
          </Link>
        ))}
      </ul>
      <hr />
    </nav>
  );
};
