import RightChevornProcess from '@/assets/icons/rightChevron-process.svg';

import styles from './OrderSteps.module.scss';

interface OrderStepsProps {
  acitveState: string;
  setActiveState: (state: string) => void;
  preparing: number;
  delivering: number;
  completed: number;
  confirm: number;
}

export const OrderSteps = ({
  acitveState,
  setActiveState,
  preparing,
  delivering,
  completed,
  confirm,
}: OrderStepsProps) => {
  return (
    <section className={styles.stepsContainer}>
      <div className={styles.stepsContent}>
        <button type="button" className={styles.totalCount} onClick={() => setActiveState('total')}>
          <span>전체</span>
          <span>{`${preparing + delivering + completed + confirm}건`}</span>
        </button>
        <div className={styles.stepList}>
          <button
            type="button"
            className={`${styles.step} ${acitveState === 'preparing' && styles.active}`}
            onClick={() => setActiveState('preparing')}
          >
            <span>배송준비중</span>
            <span>{`${preparing}건`}</span>
          </button>
          <img src={RightChevornProcess} alt="right-chevron-process" />
          <button
            type="button"
            className={`${styles.step} ${acitveState === 'delivering' && styles.active}`}
            onClick={() => setActiveState('delivering')}
          >
            <span>배송중</span>
            <span>{`${delivering}건`}</span>
          </button>
          <img src={RightChevornProcess} alt="right-chevron-process" />
          <button
            type="button"
            className={`${styles.step} ${acitveState === 'completed' && styles.active}`}
            onClick={() => setActiveState('completed')}
          >
            <span>배송완료</span>
            <span>{`${completed}건`}</span>
          </button>
          <img src={RightChevornProcess} alt="right-chevron-process" />
          <button
            type="button"
            className={`${styles.step} ${acitveState === 'confirm' && styles.active}`}
            onClick={() => setActiveState('confirm')}
          >
            <span>구매확정</span>
            <span>{`${confirm}건`}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
