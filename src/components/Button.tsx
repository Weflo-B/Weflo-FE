import React from 'react';

import styles from '@/components/Button.module.scss';

interface IProp {
  children: string;
}
const Button = ({ children }: IProp) => {
  return <div className={styles.button}>{children}</div>;
};

export default Button;
