import React from 'react';

import { Outlet } from 'react-router-dom';

import styles from './Order.module.scss';

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>부품 주문</span>
      </div>
      <div className={styles.header}>부품 주문</div>
      <div className={styles.content}></div>
      <Outlet />
    </div>
  );
};

export default Order;
