import { useNavigate } from 'react-router-dom';

import { PART_ORDER_LABELS } from '@/constants/orderConstants';
import styles from '@/pages/Order/atoms/DroneItem.module.scss';
import { DronePartData } from '@/types';

interface DroneItemProps {
  drone: DronePartData;
}

const DroneItem = ({ drone }: DroneItemProps) => {
  const droneId = drone.id;
  const tableHeader = [
    PART_ORDER_LABELS[2],
    PART_ORDER_LABELS[3],
    PART_ORDER_LABELS[4],
    PART_ORDER_LABELS[5],
  ];

  const navigator = useNavigate();

  const addComma = (price: number) => {
    const returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return returnString;
  };

  return (
    <div className={styles.container} key={drone.nickname}>
      <div className={styles.droneHeader}>
        <div className={styles.droneProfile}>
          <img src={drone.droneImg} alt="드론 이미지" />
          <div>{drone.nickname}</div>
        </div>
        <div className={styles.scoreContainer}>
          <div className={styles.score}>
            <div className={styles.label}>{PART_ORDER_LABELS[0]}</div>
            <div className={styles.value}>{drone.balanceScore}</div>
          </div>
          <div className={styles.scoreDivider} />
          <div className={styles.score}>
            <div className={styles.label}>{PART_ORDER_LABELS[1]}</div>
            <div className={styles.value}>{drone.totalScore}</div>
          </div>
        </div>
      </div>
      <div className={styles.droneInfo}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              {tableHeader.map((header) => {
                const notCenter = header === '종류' || header === '상세 정보';
                return (
                  <th className={`${notCenter ? styles.thNotCenter : ''}`} key={header}>
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {drone.productsInfo.map((t) => {
              return (
                <tr key={t.category} className={styles.tableContent}>
                  {Object.values(t).map((v, key) => {
                    const isCenter = key === 5 || key === 6;

                    if (key === 0 || key === 3 || key === 4) {
                      return;
                    }

                    // 천 원 단위로 콤마 추가
                    let price = '';
                    const isPrice = key === 5;
                    if (isPrice && typeof v === 'number') {
                      price = addComma(v);
                    }

                    return (
                      <td className={`${isCenter ? styles.trIsCenter : ''}`} key={v}>
                        {isPrice ? price + '원' : v}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className={styles.infoBtn}
        onClick={() => navigator(`/order/detail/${droneId}`)}
      >
        상세정보
      </button>
    </div>
  );
};

export default DroneItem;
