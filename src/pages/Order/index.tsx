import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';

import FloatingBtn from '@/assets/icons/floatingBtn.svg';
import { USER_ID } from '@/services';
import { getAllParts } from '@/services/orderApi';
import { DronePartData } from '@/types';

import styles from './Order.module.scss';
import DroneItem from './atoms/DroneItem';

const Order = () => {
  const [allOrders, setAllOrders] = useState<DronePartData[]>();

  const { data } = useQuery({
    queryKey: ['ORDER_PARTS', 'ALL', USER_ID],
    queryFn: () => getAllParts(USER_ID),
  });

  useEffect(() => {
    if (data) {
      setAllOrders(data.orderParts);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>부품 주문</span>
      </div>
      <div className={styles.header}>부품 주문</div>
      <div className={styles.content}>
        {allOrders &&
          allOrders.map((data) => {
            return <DroneItem key={data.id} drone={data} />;
          })}
      </div>
      <div className={styles.floatingBtnContainer}>
        <button type="button" className={styles.floatingBtn}>
          <img src={FloatingBtn} alt="플로팅 버튼" />
          <div>견적서</div>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Order;
