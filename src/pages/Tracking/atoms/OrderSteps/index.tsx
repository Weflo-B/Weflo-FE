import RightChevornProcess from '@/assets/icons/rightChevron-process.svg';

import styles from './OrderSteps.module.scss';

interface OrderStepsProps {
  activeStatus: string;
  setActiveStatus: (state: string) => void;
  preparing: number;
  delivering: number;
  completed: number;
  confirm: number;
}

export const OrderSteps = ({
  activeStatus,
  setActiveStatus,
  preparing,
  delivering,
  completed,
  confirm,
}: OrderStepsProps) => {
  return (
    <section className={styles.stepsContainer}>
      <div className={styles.stepsContent}>
        <button type="button" className={styles.totalCount} onClick={() => setActiveStatus('')}>
          <span>전체</span>
          <span>{`${preparing + delivering + completed + confirm}건`}</span>
        </button>
        <div className={styles.stepList}>
          <button
            type="button"
            className={`${styles.step} ${activeStatus === '배송준비중' && styles.active}`}
            onClick={() => setActiveStatus('배송준비중')}
          >
            <span>배송준비중</span>
            <span>{`${preparing}건`}</span>
          </button>
          <img src={RightChevornProcess} alt="right-chevron-process" />
          <button
            type="button"
            className={`${styles.step} ${activeStatus === '배송중' && styles.active}`}
            onClick={() => setActiveStatus('배송중')}
          >
            <span>배송중</span>
            <span>{`${delivering}건`}</span>
          </button>
          <img src={RightChevornProcess} alt="right-chevron-process" />
          <button
            type="button"
            className={`${styles.step} ${activeStatus === '배송완료' && styles.active}`}
            onClick={() => setActiveStatus('배송완료')}
          >
            <span>배송완료</span>
            <span>{`${completed}건`}</span>
          </button>
          <img src={RightChevornProcess} alt="right-chevron-process" />
          <button
            type="button"
            className={`${styles.step} ${activeStatus === '구매확정' && styles.active}`}
            onClick={() => setActiveStatus('구매확정')}
          >
            <span>구매확정</span>
            <span>{`${confirm}건`}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
