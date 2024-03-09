import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Logo from '@/assets/logo/logo.webp';
import { NAVIGATION_MENU_LIST } from '@/constants/navigationMenuList';
import { orderCountState } from '@/recoil/orderCountState';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const location = useLocation();
  const orderCount = useRecoilValue(orderCountState);

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
              {menu.title === '부품주문' && <div className={styles.orderCount}>{orderCount}</div>}
            </li>
          </Link>
        ))}
      </ul>
      <hr />
    </nav>
  );
};
