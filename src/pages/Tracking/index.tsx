import { useState } from 'react';

import { OrderInformation } from '@/pages/Tracking/atoms/OrderInformation';
import { OrderList } from '@/pages/Tracking/atoms/OrderList';
import { OrderSteps } from '@/pages/Tracking/atoms/OrderSteps';
import { OrderListData } from '@/types';

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
        state: 'preparing',
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
  const [acitveState, setActiveState] = useState<string>('total');

  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <span>주문/배송조회</span>
        <span>주문 / 배송조회</span>
      </div>
      <div className={styles.content}>
        <OrderInformation information={Dummy2} />
        <OrderSteps
          acitveState={acitveState}
          setActiveState={setActiveState}
          preparing={Dummy.reduce(
            (acc, order) => acc + order.items.filter((item) => item.state === 'preparing').length,
            0,
          )}
          delivering={Dummy.reduce(
            (acc, order) => acc + order.items.filter((item) => item.state === 'delivering').length,
            0,
          )}
          completed={Dummy.reduce(
            (acc, order) => acc + order.items.filter((item) => item.state === 'completed').length,
            0,
          )}
          confirm={Dummy.reduce(
            (acc, order) => acc + order.items.filter((item) => item.state === 'confirm').length,
            0,
          )}
        />
        <OrderList
          orderList={
            acitveState === 'total'
              ? Dummy
              : Dummy.map((order) => ({
                  date: order.date,
                  items: order.items.filter((item) => item.state === acitveState),
                }))
          }
        />
      </div>
    </main>
  );
};
