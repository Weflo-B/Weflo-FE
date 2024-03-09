import { useState } from 'react';

import { useQuery } from 'react-query';

import { MonthDropdown } from '@/pages/Tracking/atoms/MonthDropdown';
import { OrderInformation } from '@/pages/Tracking/atoms/OrderInformation';
import { OrderList } from '@/pages/Tracking/atoms/OrderList';
import { OrderSteps } from '@/pages/Tracking/atoms/OrderSteps';
import { USER_ID } from '@/services';
import { getTracking } from '@/services/trackingApi';
import { GetTrackingData, OrderListData } from '@/types';

import styles from './Tracking.module.scss';
import DummyImage from './atoms/test.png';

const Dummy: OrderListData[] = [
  {
    date: '2024.02.01',
    items: [
      {
        image: DummyImage,
        title: '블레이드',
        subTitle: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
        count: 1,
        state: 'cancel',
        price: 7500,
      },
      {
        image: DummyImage,
        title: '블레이드2',
        subTitle: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
        count: 2,
        state: 'preparing',
        price: 7500,
      },
      {
        image: DummyImage,
        title: '블레이드3',
        subTitle: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
        count: 2,
        state: 'delivering',
        price: 7500,
      },
      {
        image: DummyImage,
        title: '블레이드4',
        subTitle: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
        count: 2,
        state: 'completed',
        price: 7500,
      },
    ],
  },
  {
    date: '2024.02.02',
    items: [
      {
        image: DummyImage,
        title: '블레이드5',
        subTitle: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
        count: 2,
        state: 'completed',
        price: 7500,
      },
      {
        image: DummyImage,
        title: '블레이드6',
        subTitle: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
        count: 10,
        state: 'confirm',
        price: 7500,
      },
    ],
  },
  {
    date: '2024.02.03',
    items: [
      {
        image: DummyImage,
        title: '블레이드7',
        subTitle: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
        count: 2,
        state: 'confirm',
        price: 7500,
      },
    ],
  },
];

const Dummy2 = {
  month: 3,
  paymentMonth: 4,
  paymentDate: 15,
  totalPrice: 77980,
};

export const Tracking = () => {
  const [activeStatus, setActiveStatus] = useState<string>('');
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [initialData, setInitialData] = useState<GetTrackingData>(null);
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
          <MonthDropdown month={month} setMonth={setMonth} />
        </div>
      </div>
      <div className={styles.content}>
        <OrderInformation month={month} information={Dummy2} />
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
        <OrderList
          orderList={
            activeStatus === ''
              ? Dummy
              : Dummy.map((order) => ({
                  date: order.date,
                  items: order.items.filter((item) => item.state === activeStatus),
                }))
          }
        />
      </div>
    </main>
  );
};
