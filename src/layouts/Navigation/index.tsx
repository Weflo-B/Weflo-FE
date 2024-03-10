import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Logo from '@/assets/logo/logo.webp';
import { NAVIGATION_MENU_LIST } from '@/constants/navigationMenuList';
import { orderCountSelector } from '@/states/orderCount';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const location = useLocation();
  const count = useRecoilValue(orderCountSelector);

  return (
    <nav className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={Logo} alt="logo" />
      </Link>
      <ul>
        {NAVIGATION_MENU_LIST.map((menu) => {
          if (menu.path === '')
            return (
              <li
                key={menu.title}
                className={
                  menu.path !== '' && location.pathname.startsWith(menu.path) ? styles.active : ''
                }
              >
                <img className={styles.icon} src={menu.icon} alt={menu.title} />
                <span>{menu.title}</span>
              </li>
            );

          return (
            <Link key={menu.title} to={menu.path}>
              {menu.title === '주문/배송 조회' ? (
                <li className={menu.path.includes(location.pathname) ? styles.active : ''}>
                  <img className={styles.icon} src={menu.icon} alt={menu.title} />
                  <span>{menu.title}</span>
                </li>
              ) : (
                <li
                  className={
                    menu.path !== '' && location.pathname.startsWith(menu.path) ? styles.active : ''
                  }
                >
                  <img className={styles.icon} src={menu.icon} alt={menu.title} />
                  <span>{menu.title}</span>
                  {menu.title === '부품주문' && <span className={styles.orderCount}>{count}</span>}
                </li>
              )}
            </Link>
          );
        })}
      </ul>
      <hr />
    </nav>
  );
};
