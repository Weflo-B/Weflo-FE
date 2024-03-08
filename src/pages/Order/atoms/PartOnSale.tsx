import React from 'react';

import priceSale from '@/assets/icons/priceSale.svg';
import { PartOnSaleData } from '@/types';

import styles from './PartOnSale.module.scss';

interface PartOnSaleProps {
  part: PartOnSaleData;
}
const PartOnSale = ({ part }: PartOnSaleProps) => {
  const addComma = (price: number) => {
    const returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return returnString;
  };

  return (
    <>
      {Object.entries(part).map(([kind, content], index) => {
        return (
          <div className={styles.container} key={index}>
            <div className={styles.header}>
              <div className={styles.date}>{content.arrivalDate} 도착 예정</div>
              <img src={content.img} alt="드론 부품 이미지" className={styles.partImg} />
              <div className={styles.content}>
                <div className={styles.partName}>{kind}</div>
                <div className={styles.partDetail}>{content.detail}</div>
              </div>
            </div>
            <div className={styles.price}>
              <div className={styles.salePrice}>
                <div className={styles.label}>시장가</div>
                <div className={styles.value}>
                  <div className={styles.text}>{addComma(content.salePrice)}원</div>
                  <img className={styles.saleImg} src={priceSale} alt="세일 표시" />
                </div>
              </div>
              <div className={styles.wefloPrice}>
                <div className={styles.label}>위플로 가격</div>
                <div className={styles.value}>{addComma(content.wefloPrice)}원</div>
                <div className={styles.num}>({content.num}개)</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PartOnSale;
