import { useNavigate } from 'react-router-dom';

import IconCompleted from '@/assets/icons/order-completed.svg';
import Button from '@/components/Button';

import styles from './Completed.module.scss';

export const Completed = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <div>주문 완료</div>
      <img src={IconCompleted} alt="주문 완료" />
      <Button
        onClick={() => {
          navigate('/tracking');
        }}
      >
        주문 배송조회
      </Button>
    </main>
  );
};
