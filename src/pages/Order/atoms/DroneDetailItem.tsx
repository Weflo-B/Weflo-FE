import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { USER_ID } from '@/services';
import { getDronePart } from '@/services/orderApi';
import { DronePartDetailData } from '@/types';

import styles from './DroneDetailItem.module.scss';
import PartOnSale from './PartOnSale';

interface DroneDetailItemProps {
  droneId: number;
}

const DroneDetailItem = ({ droneId }: DroneDetailItemProps) => {
  const [droneData, setDroneData] = useState<DronePartDetailData>();

  const { data } = useQuery({
    queryKey: ['ORDER_PARTS', 'ALL', USER_ID, droneId],
    queryFn: () => getDronePart(USER_ID, droneId),
  });

  useEffect(() => {
    if (data) {
      setDroneData(data.orderParts);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img src={droneData?.droneImg} alt="드론 이미지" />
        </div>
        <div className={styles.profile}>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <div className={styles.label}>제품명</div>
              <div className={styles.value}>{droneData?.nickname}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.label}>주문일</div>
              <div className={styles.value}>{droneData?.orderDate}</div>
            </div>
          </div>
          <div className={styles.partInfo}>
            {droneData?.abnormalities.map((data, index) => {
              const isLast = index === droneData.abnormalities.length - 1;
              return (
                <div
                  className={`${styles.partContainer} ${isLast && styles.lastContainer}`}
                  key={index}
                >
                  <div className={styles.partKind}>{data.category}</div>
                  {data.partsScore.map((t, index) => {
                    return (
                      <div className={styles.partDetail} key={index}>
                        <div>
                          {t.name} ({t.score}점)
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {droneData?.productsInfo.map((part, index) => {
          return <PartOnSale part={part} key={index} />;
        })}
      </div>
    </div>
  );
};

export default DroneDetailItem;
