import styles from './OrderInformation.module.scss';

interface OrderInformationProps {
  information: { month: number; paymentMonth: number; paymentDate: number; totalPrice: number };
}

export const OrderInformation = ({ information }: OrderInformationProps) => {
  return (
    <section className={styles.historyContainer}>
      <div className={styles.title}>
        <div className={styles.orderTitle}>{information.month}월의 주문 내역</div>
        <div className={styles.orderDescription}>
          <span className={styles.dueDate}>결제 예정일 | </span>
          <span>{`${information.paymentMonth}월 ${information.paymentDate}일`}</span>
        </div>
      </div>
      <div className={styles.totalPrice}>{`${information.totalPrice.toLocaleString()}원`}</div>
    </section>
  );
};
