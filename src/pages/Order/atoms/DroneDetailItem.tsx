import { DronePartDetailData } from '@/types';

import styles from './DroneDetailItem.module.scss';
import PartOnSale from './PartOnSale';

interface DroneDetailItemProps {
  drone: DronePartDetailData;
}

const DroneDetailItem = ({ drone }: DroneDetailItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img src={drone?.droneImg} alt="드론 이미지" />
        </div>
        <div className={styles.profile}>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <div className={styles.label}>제품명</div>
              <div className={styles.value}>{drone?.nickname}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.label}>주문일</div>
              <div className={styles.value}>{drone?.orderDate}</div>
            </div>
          </div>
          <div className={styles.partInfo}>
            {drone?.abnormalities.map((data, index) => {
              const isLast = index === drone.abnormalities.length - 1;
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
        {drone?.productsInfo.map((part, index) => {
          return <PartOnSale part={part} key={index} />;
        })}
      </div>
    </div>
  );
};

export default DroneDetailItem;
