import { OrderListData } from '@/types';

import styles from './OrderList.module.scss';

interface OrderListProps {
  orderList: OrderListData[];
}

const ORDER_STEP_KOR: { [key: string]: string } = {
  preparing: '배송 준비중',
  delivering: '배송중',
  completed: '배송 완료',
  confirm: '구매 확정',
};

export const OrderList = ({ orderList }: OrderListProps) => {
  return (
    <section className={styles.listContainer}>
      <div className={styles.orderListContainer}>
        {orderList.map((list, index) => {
          if (list.items.length > 0)
            return (
              <div key={index}>
                <div className={styles.date}>{list.date}</div>
                <div className={styles.itemList}>
                  {list.items.map((item) => (
                    <div key={item.title} className={styles.itemContainer}>
                      <div className={styles.itemInformationContainer}>
                        <img src={item.image} alt="상품 이미지" />
                        <div className={styles.itemInformation}>
                          <span className={styles.title}>{item.title}</span>
                          <span className={styles.description}>
                            {item.subTitle} | 수량 {item.count} 개
                          </span>
                          <span className={styles.state}>{ORDER_STEP_KOR[item.state]}</span>
                          <span className={styles.price}>{item.price.toLocaleString()}원</span>
                        </div>
                      </div>
                      <button>배송상세 조회</button>
                    </div>
                  ))}
                </div>
              </div>
            );
        })}
      </div>
    </section>
  );
};
