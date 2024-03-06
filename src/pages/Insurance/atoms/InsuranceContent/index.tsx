import React from 'react';

import styles from './InsuranceContent.module.scss';

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
        {labels?.map((text) => {
          return <span key={text}>{text}</span>;
        })}
      </div>
    </div>
  );
};

export default InsuranceContent;
