import { useParams } from 'react-router-dom';

import RightChevron from '@/assets/icons/rightChevron.svg';

import styles from './OrderDetail.module.scss';
import DroneDetailItem from './atoms/DroneDetailItem';

const OrderDetail = () => {
  const { droneId } = useParams();
  const numDroneId = Number(droneId);

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>부품 주문</span>
        <img src={RightChevron} alt="left-chevron" />
        <span>드론이름</span> {/* API 연결할 때 드론 데이터 받아오면 이름으로 변경 예정*/}
      </div>
      <div className={styles.header}>드론이름</div>
      <DroneDetailItem droneId={numDroneId} />
    </div>
  );
};

export default OrderDetail;
