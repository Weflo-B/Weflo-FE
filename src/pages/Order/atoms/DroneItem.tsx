import React from 'react';

import { PART_ORDER_LABELS } from '@/constants/orderConstants';
import styles from '@/pages/Order/atoms/DroneItem.module.scss';
import { DroneData } from '@/types';

interface DroneItemProps {
  drone: DroneData;
}

const DroneItem = ({ drone }: DroneItemProps) => {
  const tableHeader = [
    PART_ORDER_LABELS[2],
    PART_ORDER_LABELS[3],
    PART_ORDER_LABELS[4],
    PART_ORDER_LABELS[5],
  ];

  const addComma = (price: number) => {
    const returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return returnString;
  };

  return (
    <div className={styles.container} key={drone.name}>
      <div className={styles.droneHeader}>
        <div className={styles.droneProfile}>
          <img src={drone.img} alt="드론 이미지" />
          <div>{drone.name}</div>
        </div>
        <div className={styles.scoreContainer}>
          <div className={styles.score}>
            <div className={styles.label}>{PART_ORDER_LABELS[0]}</div>
            <div className={styles.value}>{drone.balanceScore}</div>
          </div>
          <div className={styles.scoreDivider} />
          <div className={styles.score}>
            <div className={styles.label}>{PART_ORDER_LABELS[1]}</div>
            <div className={styles.value}>{drone.totalScore}</div>
          </div>
        </div>
      </div>
      <div className={styles.droneInfo}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              {tableHeader.map((header) => {
                const notCenter = header === '종류' || header === '상세 정보';
                return (
                  <th className={`${notCenter ? styles.thNotCenter : ''}`} key={header}>
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {drone.dronePart.map((t) => {
              return (
                <tr key={t.kind} className={styles.tableContent}>
                  {Object.values(t).map((v, key) => {
                    const isCenter = key === 2 || key === 3;

                    // 천 원 단위로 콤마 추가
                    let price = '';
                    const isPrice = key === 2;
                    if (key === 2 && typeof v === 'number') {
                      price = addComma(v);
                    }

                    return (
                      <td className={`${isCenter ? styles.trIsCenter : ''}`} key={v}>
                        {isPrice ? price + '원' : v}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button type="button" className={styles.infoBtn}>
        상세정보
      </button>
    </div>
  );
};

export default DroneItem;
