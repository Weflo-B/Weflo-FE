import React from 'react';

import LeftChevron from '@/assets/icons/leftChevron.svg';
import styles from '@/pages/Insurance/Insurance.module.scss';

const Insurance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>보험</span>
        <img src={LeftChevron} alt="left-chevron" />
        <span>가입자</span>
      </div>
      <div className={styles.header}>
        <div className={styles.label}>보험</div>
        <div className={styles.btn}>버튼</div>
      </div>
      <div className={styles.dateContainer}>
        <div className={styles.date}>
          <span>보험 가입일</span>
          <span>2024년 1월 1일</span>
        </div>
        <div className={styles.date}>
          <span>다음 갱신일</span>
          <span>2025년 1월 1일</span>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
