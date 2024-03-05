import React from 'react';

import styles from '@/components/InsuranceContent.module.scss';

interface InsuranceContentProp {
  header: string;
  subHeader: string;
  labels: string[];
}
const InsuranceContent = ({ header, subHeader, labels }: InsuranceContentProp) => {
  return (
    <div className={styles.insuranceContent}>
      <div className={styles.contentHeader}>
        <span>{header}</span>
        <span>{subHeader}</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.contentElement}>
        {labels?.map((text, key) => {
          return <span key={key}>{text}</span>;
        })}
      </div>
    </div>
  );
};

export default InsuranceContent;
