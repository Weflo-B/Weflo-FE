import React from 'react';

import DownChevorn from '@/assets/icons/downChevron.svg';
import RightChevron from '@/assets/icons/rightChevron.svg';
import Button from '@/components/Button';
import styles from '@/pages/Insurance/GuestInsurance.module.scss';

const GuestInsurance = () => {
  const insuranceDropdown = ['가입안내', '상품안내', '보상안내', '알아두실 사항'];

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
      <div className={styles.introduce}>
        <div className={styles.commonHeader}>
          <span>위플로 X 한화손해보험</span>
          <span>드론배상책임보험, 위플로와 함께하세요!</span>
        </div>
        <div className={styles.commonDivider} />
        <div className={styles.introContent}>
          <span>• 하나, 위플로 진단 서비스와 함께할수록 보험요율이 감소해요!</span>
          <span>• 둘, 드론기체파손 특별약관으로 기체 보험과 배상 책임 보험을 동시에~</span>
          <span>• 셋, 드론 진단부터 보험 청구까지, 간편하게 관리하세요!</span>
        </div>
        <div className={styles.introFooter}>
          <div className={styles.label}>가입문의</div>
          <div className={styles.value}>01234-5678</div>
          <div>|</div>
          <div className={styles.label}>업무시간</div>
          <div className={styles.value}>평일 AM 09:00 ~ PM 06:00</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.commonHeader}>
          <span>드론 배상 책임 보험</span>
          <span>
            드론 운항 중 발생하는 배상 책임 위험에 대해 집중적으로 보장해드립니다.<br></br>상업용
            드론은 2020년 항공 사업법 개정 및 드론법 제정에 따라 의무적으로 보험에 가입하여야
            합니다.
          </span>
        </div>
        <div className={styles.commonDivider} />
        <div className={styles.contentList}>
          {insuranceDropdown.map((t, key) => {
            return (
              <div className={styles.listElement} key={key}>
                <span>{t}</span>
                <img src={DownChevorn} alt="더보기" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GuestInsurance;
