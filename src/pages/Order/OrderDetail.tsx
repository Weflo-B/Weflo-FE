import React from 'react';

import { useParams } from 'react-router-dom';

import DroneImg from '@/assets/icons/droneImg.svg';
import RightChevron from '@/assets/icons/rightChevron.svg';
import { DronePartDetailData } from '@/types';

import styles from './OrderDetail.module.scss';
// eslint-disable-next-line import/no-unresolved
import DroneDetailItem from './atoms/DroneDetailItem';

const OrderDetail = () => {
  const { droneId } = useParams();
  // API 연결할 때 상세 화면에서 새로 호출 -> 이전 화면에서 받아올 필요 x

  // 일단 더미 데이터로 구현
  const Dummy: DronePartDetailData = {
    img: DroneImg,
    name: 'Test 1',
    id: 0,
    orderDate: '2024년 1월 1일',
    arrivalDate: '2024년 1월 10일',
    currentPart: [
      {
        블레이드: [
          { name: '구동부1', score: 56 },
          { name: '구동부2', score: 58 },
        ],
      },
      { 모터: [{ name: '구동부4', score: 58 }] },
      { ESC: [{ name: '구동부2', score: 58 }] },
    ],
    salePart: [
      {
        블레이드: {
          detail: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
          salePrice: 8800,
          wefloPrice: 7500,
          num: 2,
        },
      },
      {
        모터: {
          detail: '13T 드론 브러시리스 모터 멀티 쿼드 RC A2212 1000KV',
          salePrice: 8800,
          wefloPrice: 7500,
          num: 1,
        },
      },
      {
        ESC: {
          detail: 'DJI Agras 드론 ESC 모듈 T30 T10 T40 T20P',
          salePrice: 8800,
          wefloPrice: 7500,
          num: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>부품 주문</span>
        <img src={RightChevron} alt="left-chevron" />
        <span>드론이름</span> {/* API 연결할 때 드론 데이터 받아오면 이름으로 변경 예정*/}
      </div>
      <div className={styles.header}>드론이름</div>
      <DroneDetailItem drone={Dummy} />
    </div>
  );
};

export default OrderDetail;
