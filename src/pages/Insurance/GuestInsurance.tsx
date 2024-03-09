import React from 'react';

import RightChevron from '@/assets/icons/rightChevron.svg';
import Button from '@/components/Button';
import { Dummy } from '@/constants/insuranceConstants';

import styles from './GuestInsurance.module.scss';
import InsuranceDropDown from './atoms/InsuranceDropDown';

const GuestInsurance = () => {
  const handleOpenTab = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>보험</span>
        <img src={RightChevron} alt="left-chevron" />
        <span>가입자</span>
      </div>
      <div className={styles.header}>
        <div className={styles.label}>보험</div>
        <Button onClick={() => handleOpenTab('https://www.hwgeneralins.com/')}>
          보험 가입하기
        </Button>
      </div>
      <div className={styles.introduce}>
        <div className={styles.commonHeader}>
          <span>{Dummy.benefit.header}</span>
          <span>{Dummy.benefit.subHeader}</span>
        </div>
        <div className={styles.commonDivider} />
        <div className={styles.introContent}>
          {Dummy.benefit.benefitList.map((t) => {
            return <span key={t}>{t}</span>;
          })}
        </div>
        <div className={styles.introFooter}>
          <div className={styles.label}>가입문의</div>
          <div className={styles.value}>{Dummy.benefit.contactNum}</div>
          <div>|</div>
          <div className={styles.label}>업무시간</div>
          <div className={styles.value}>{Dummy.benefit.workingTime}</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.commonHeader}>
          <span>{Dummy.insuranceItem.header}</span>
          <span>{Dummy.insuranceItem.subHeader}</span>
        </div>
        <div className={styles.commonDivider} />
        <div className={styles.contentList}>
          {Dummy.insuranceItem.dropDown.map((text) => {
            return (
              <InsuranceDropDown
                key={text.header}
                header={text.header}
                content={text.content}
              ></InsuranceDropDown>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GuestInsurance;
