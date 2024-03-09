import styles from './OrderInformation.module.scss';

interface OrderInformationProps {
  month: number;
  sumPrice: number;
}

export const OrderInformation = ({ month, sumPrice }: OrderInformationProps) => {
  const today = new Date();

  return (
    <section className={styles.historyContainer}>
      <div className={styles.title}>
        <div className={styles.orderTitle}>{month}월의 주문 내역</div>
        <div className={styles.orderDescription}>
          {month > today.getMonth() + 1 && <span className={styles.dueDate}>결제 예정일 | </span>}
          {month === today.getMonth() + 1 && (
            <span className={styles.dueDate}>
              {today.getDate() < 15 ? '결제 완료일 | ' : '결제 예정일 | '}
            </span>
          )}
          {month < today.getMonth() + 1 && <span className={styles.dueDate}>결제 완료일 | </span>}
          <span>{`${month + 1 > 12 ? 1 : month + 1}월 ${15}일`}</span>
        </div>
      </div>
      <div className={styles.totalPrice}>{`${sumPrice.toLocaleString()}원`}</div>
    </section>
  );
};
