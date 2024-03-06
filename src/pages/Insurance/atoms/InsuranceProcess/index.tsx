import React from 'react';

import icon1 from '@/assets/icons/process1.svg';
import icon2 from '@/assets/icons/process2.svg';
import icon3 from '@/assets/icons/process3.svg';
import icon4 from '@/assets/icons/process4.svg';
import { INSURACE_PROCESS_CONTENT } from '@/constants/insuranceConstants';

import styles from './InsuranceProcess.module.scss';

interface InsuranceProcessProp {
  index: number;
}

const icons = [icon1, icon2, icon3, icon4];

const InsuranceProcess = ({ index }: InsuranceProcessProp) => {
  const widthStyle = index === 2 ? { width: '355px' } : {};

  return (
    <div className={styles.processElement} style={widthStyle}>
      <div className={styles.label}>
        <span>{index + 1}</span>
        <span>{INSURACE_PROCESS_CONTENT[index]}</span>
      </div>
      <img className={styles.icon} src={icons[index]} alt="" />
    </div>
  );
};

export default InsuranceProcess;
