import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import RightChevron from '@/assets/icons/rightChevron.svg';
import { USER_ID } from '@/services';
import { getDronePart } from '@/services/orderApi';
import { DronePartDetailData } from '@/types';

import styles from './OrderDetail.module.scss';
import DroneDetailItem from './atoms/DroneDetailItem';

const OrderDetail = () => {
  const { droneId } = useParams();
  const numDroneId = Number(droneId);

  const [droneData, setDroneData] = useState<DronePartDetailData>();

  const { data } = useQuery({
    queryKey: ['ORDER_PARTS', 'ALL', USER_ID, numDroneId],
    queryFn: () => getDronePart(USER_ID, numDroneId),
  });

  useEffect(() => {
    if (data) {
      setDroneData(data.orderParts);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>부품 주문</span>
        <img src={RightChevron} alt="left-chevron" />
        <span>드론이름</span>
      </div>
      <div className={styles.header}>{droneData?.nickname}</div>
      <DroneDetailItem drone={droneData!} />
    </div>
  );
};

export default OrderDetail;
