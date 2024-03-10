import { Outlet } from 'react-router-dom';

import { Header } from '@/layouts/Header';
import { Navigation } from '@/layouts/Navigation';

import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.rightView}>
        <Header />
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
