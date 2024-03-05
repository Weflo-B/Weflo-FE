import React from 'react';

import styles from '@/components/Button.module.scss';

interface ButtonProp {
  children: string;
}
const Button = ({ children }: ButtonProp) => {
  return <div className={styles.button}>{children}</div>;
};

export default Button;
