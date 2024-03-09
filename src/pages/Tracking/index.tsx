import { useState } from 'react';

import { useQuery } from 'react-query';

import { MonthDropdown } from '@/pages/Tracking/atoms/MonthDropdown';
import { OrderInformation } from '@/pages/Tracking/atoms/OrderInformation';
import { OrderList } from '@/pages/Tracking/atoms/OrderList';
import { OrderSteps } from '@/pages/Tracking/atoms/OrderSteps';
import { USER_ID } from '@/services';
import { getTracking } from '@/services/trackingApi';
import { GetTrackingData } from '@/types';

import styles from './Tracking.module.scss';

export const Tracking = () => {
  const [activeStatus, setActiveStatus] = useState<string>('');
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [initialData, setInitialData] = useState<GetTrackingData | null>(null);
  const { data } = useQuery({
    queryKey: ['TRACKING', USER_ID, month, activeStatus],
    queryFn: () => getTracking(month, activeStatus),
    staleTime: 300000, // 5분
    onSuccess: (fetchedData) => {
      if (!initialData) {
        setInitialData(fetchedData);
      }
    },
  });

  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.pageDescription}>주문/배송조회</span>
        <div className={styles.titleInnerContainer}>
          <span className={styles.title}>주문 / 배송조회</span>
          <MonthDropdown month={month} setMonth={setMonth} setInitialData={setInitialData} />
        </div>
      </div>
      <div className={styles.content}>
        {initialData && <OrderInformation month={month} sumPrice={initialData.sumPrice} />}
        {initialData && (
          <OrderSteps
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
            preparing={
              initialData.orderStatuses
                .filter((sta) => sta.statusName.replace(' ', '') === '배송준비중')
                .map((sta) => sta.amount)[0] ?? 0
            }
            delivering={
              initialData.orderStatuses
                .filter((sta) => sta.statusName.replace(' ', '') === '배송중')
                .map((sta) => sta.amount)[0] ?? 0
            }
            completed={
              initialData.orderStatuses
                .filter((sta) => sta.statusName.replace(' ', '') === '배송완료')
                .map((sta) => sta.amount)[0] ?? 0
            }
            confirm={
              initialData.orderStatuses
                .filter((sta) => sta.statusName.replace(' ', '') === '구매확정')
                .map((sta) => sta.amount)[0] ?? 0
            }
          />
        )}
        {data && (
          <OrderList
            orderList={data.orderHistories.filter((history) => history.status !== '주문대기중')}
          />
        )}
      </div>
    </main>
  );
};
