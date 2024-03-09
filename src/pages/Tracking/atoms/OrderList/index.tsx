import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import { groupByOrderDate } from '@/pages/Tracking/atoms/OrderSteps/groupByOrderDate';
import { OrderHistory } from '@/types';

import styles from './OrderList.module.scss';

interface OrderListProps {
  orderList: OrderHistory[];
}

export const OrderList = ({ orderList }: OrderListProps) => {
  const groupOrderList = groupByOrderDate(orderList);

  return (
    <section className={styles.listContainer}>
      <div className={styles.orderListContainer}>
        {Object.keys(groupOrderList).map((date) => (
          <div key={date}>
            <div className={styles.date}>{date}</div>
            <div className={styles.itemList}>
              {groupOrderList[date].map((item) => (
                <div
                  key={item.id}
                  className={`${styles.itemContainer} ${item.status === '주문취소' && styles.cancel}`}
                >
                  <div className={styles.itemInformationContainer}>
                    <img src={item.productImage} alt="상품 이미지" />
                    <div className={styles.itemInformation}>
                      <span className={styles.title}>{item.category}</span>
                      <span className={styles.description}>
                        {item.name} | 수량 {item.amount} 개
                      </span>
                      <span className={styles.state}>{item.status}</span>
                      <span className={styles.price}>{item.salePrice.toLocaleString()}원</span>
                    </div>
                  </div>
                  {item.status !== '주문취소' && (
                    <Link to="detail">
                      <Button style={{ height: 'fit-content', padding: '20px 46px' }}>
                        배송상세 조회
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
