import React from 'react';

import RightChevron from '@/assets/icons/rightChevron.svg';
import Button from '@/components/Button';
import InsuranceContent from '@/components/InsuranceContent';
import styles from '@/pages/Insurance/GuestInsurance.module.scss';

const GuestInsurance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>보험</span>
        <img src={RightChevron} alt="left-chevron" />
        <span>가입자</span>
      </div>
      <div className={styles.header}>
        <div className={styles.label}>보험</div>
        <Button>보험 가입하기</Button>
      </div>
      {/* <InsuranceContent
        header={'위플로 X 한화손해보험'}
        subHeader={'드론배상책임보험, 위플로와 함께하세요!'}
        labels={[ 
          '• 하나, 위플로 진단 서비스와 함께할수록 보험요율이 감소해요!',
          '• 둘, 드론기체파손 특별약관으로 기체 보험과 배상 책임 보험을 동시에~',
          '• 셋, 드론 진단부터 보험 청구까지, 간편하게 관리하세요!',
        ]}
      ></InsuranceContent> */}
    </div>
  );
};

export default GuestInsurance;
