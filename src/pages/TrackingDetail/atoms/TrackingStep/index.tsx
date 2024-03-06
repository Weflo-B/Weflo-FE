import IconArrived from '@/assets/icons/order/arrived.svg';
import IconDelivery from '@/assets/icons/order/delivery.svg';
import IconReceived from '@/assets/icons/order/received.svg';
import IconRoute from '@/assets/icons/order/route.svg';
import RightChevornProcess from '@/assets/icons/rightChevron-process.svg';

import styles from './TrackingStep.module.scss';

const DELIVERING_STEP = [
  { id: 'start', step: '배송시작', image: IconDelivery },
  { id: '2', step: '잡화처리', image: IconReceived },
  { id: '3', step: '간선상차', image: IconDelivery },
  { id: '4', step: '간선하차', image: IconRoute },
  { id: 'arrived', step: '배송완료', image: IconArrived },
];

interface TrackingStepProps {
  product: {
    arrivalDate: string;
    startDate: string;
    image: string;
    name: string;
    description: string;
    count: number;
    price: number;
    step: string;
  };
}

export const TrackingStep = ({ product }: TrackingStepProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.stepList}>
          {DELIVERING_STEP.map((item, index) => (
            <>
              <div className={`${styles.stepBox} ${product.step === item.id && styles.active}`}>
                <div className={styles.description}>
                  <span className={styles.step}>{item.step}</span>
                  {item.id === 'start' && <span className={styles.date}>{product.startDate}</span>}
                  {item.id === 'arrived' && (
                    <span className={styles.date}>{product.arrivalDate}</span>
                  )}
                </div>
                <img src={item.image} alt={item.step} />
              </div>
              {index !== DELIVERING_STEP.length - 1 && (
                <img src={RightChevornProcess} alt="rightChevron" />
              )}
            </>
          ))}
        </div>
        <span>
          * 배송 추적 서비스를 통해 제공받는 정보로 실 배송 현황과 차이가 있을 수 있습니다.
        </span>
      </div>
    </section>
  );
};
