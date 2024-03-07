import React from 'react';

import { DronePartDetailData } from '@/types';

import styles from './DroneDetailItem.module.scss';

interface DroneDetailItemProps {
  drone: DronePartDetailData;
}
const DroneDetailItem = ({ drone }: DroneDetailItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img src={drone.img} alt="드론 이미지" />
        </div>
        <div className={styles.profile}>
          <div className={styles.info}>
            <div className={styles.label}>제품명</div>
            <div className={styles.value}>{drone.name}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.label}>주문일</div>
            <div className={styles.value}>{drone.orderDate}</div>
          </div>
        </div>
      </div>
      <div className={styles.content}></div>
    </div>
  );
};

export default DroneDetailItem;
