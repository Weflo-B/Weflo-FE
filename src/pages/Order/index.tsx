import React from 'react';

import { Outlet } from 'react-router-dom';

import DroneImg from '@/assets/icons/droneImg.svg';
import FloatingBtn from '@/assets/icons/floatingBtn.svg';
import { DroneData } from '@/types';

import styles from './Order.module.scss';
import DroneItem from './atoms/DroneItem';

const Order = () => {
  const Dummy: DroneData[] = [
    {
      img: DroneImg,
      name: 'Test 1',
      id: 1,
      balanceScore: 70,
      totalScore: 100,
      dronePart: [
        {
          kind: '블레이드',
          detail: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
          price: 8800,
          num: 1,
        },
        {
          kind: '모터',
          detail: '13T 드론 브러시리스 모터 멀티 쿼드 RC A2212 1000KV',
          price: 15830,
          num: 1,
        },
        {
          kind: 'ESC',
          detail: 'DJI Agras 드론 ESC 모듈 T30 T10 T40 T20P',
          price: 174300,
          num: 2,
        },
      ],
    },
    {
      img: DroneImg,
      name: 'Test 1',
      id: 2,
      balanceScore: 70,
      totalScore: 100,
      dronePart: [
        {
          kind: '블레이드',
          detail: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
          price: 8800,
          num: 1,
        },
        {
          kind: '모터',
          detail: '13T 드론 브러시리스 모터 멀티 쿼드 RC A2212 1000KV',
          price: 15830,
          num: 1,
        },
        {
          kind: 'ESC',
          detail: 'DJI Agras 드론 ESC 모듈 T30 T10 T40 T20P',
          price: 174300,
          num: 2,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>부품 주문</span>
      </div>
      <div className={styles.header}>부품 주문</div>
      <div className={styles.content}>
        {Dummy.map((data) => {
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
