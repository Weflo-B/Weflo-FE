import React from 'react';

import LeftChevron from '@/assets/icons/leftChevron.svg';
import InsuranceContent from '@/components/InsuranceContent';
import ProgressBar from '@/components/ProgressBar';
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
        <ProgressBar progress={40} previousDays={267} remainDays={99} />
      </div>
      <div className={styles.content}>
        <InsuranceContent
          header={'드론배상책임보험'}
          subHeader={'다음의 상황 발생 시 즉시 보험사에 알려주세요!'}
          labels={[
            '• 사고 발생의 경우: 사고 발생 시각 및 장소, 피해자의 주소와 성명, 사고 상황, 증인의 주소와 성명',
            '• 피해자에게 손해배상 청구를 받거나 관련 소송을 제기받았을 경우',
          ]}
        />
        <InsuranceContent
          header={'드론기체 파손 특별 약관'}
          subHeader={'사고가 발생한 경우에 즉시 다음 사항을 보험사에 알려주세요!'}
          labels={[
            '• 드론 식별번호, 전화번호 등 보험 목적물에 관한 사항',
            '• 소유권 확인을 위한 상황',
            '• 언제, 어디서, 어떻게 사고가 발생하였는지에 대한 상황',
          ]}
        />
      </div>
    </div>
  );
};

export default Insurance;
