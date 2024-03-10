/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import DownChevorn from '@/assets/icons/downChevron.svg';
import UpChevron from '@/assets/icons/upChevron.svg';
import { InsuranceDataContent } from '@/types';

import styles from './InsuranceDropDown.module.scss';

interface InsuranceDropDownProps {
  header: string;
  content: InsuranceDataContent[];
}
const index = ({ header, content }: InsuranceDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.closed} onClick={handleClick}>
        <span>{header}</span>
        <img src={isOpen ? UpChevron : DownChevorn} alt="더보기" />
      </div>
      {isOpen && (
        <div className={styles.open}>
          {content.map((item: InsuranceDataContent, index: number) => {
            return (
              <div key={index} className={styles.openList}>
                {Object.entries(item).map(([kind, values]) => {
                  return (
                    <div key={kind} className={styles.openElement}>
                      <div className={styles.header}>{kind !== '0' && kind}</div>
                      {values.map((value, i) => (
                        <div className={styles.content} key={i}>
                          {value}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default index;
