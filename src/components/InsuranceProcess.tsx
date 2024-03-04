import React from 'react';

import icon1 from '@/assets/icons/process1.svg';
import icon2 from '@/assets/icons/process2.svg';
import icon3 from '@/assets/icons/process3.svg';
import icon4 from '@/assets/icons/process4.svg';
import styles from '@/components/InsuranceProcess.module.scss';

interface IProp {
  index: number;
}

const icons = [icon1, icon2, icon3, icon4];
const contents = ['서류 접수', '접수증 교부', '보험금 지급여부 결정', '보험금 지급'];

const InsuranceProcess = ({ index }: IProp) => {
  const widthStyle = index === 2 ? { width: '355px' } : {};

  return (
    <div className={styles.processElement} style={widthStyle}>
      <div className={styles.label}>
        <span>{index + 1}</span>
        <span>{contents[index]}</span>
      </div>
      <img className={styles.icon} src={icons[index]} alt="" />
    </div>
  );
};

export default InsuranceProcess;
