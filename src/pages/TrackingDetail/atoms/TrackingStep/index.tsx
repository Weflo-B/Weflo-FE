import React from 'react';

import IconArrived from '@/assets/icons/order/arrived.svg';
import IconDelivery from '@/assets/icons/order/delivery.svg';
import IconReceived from '@/assets/icons/order/received.svg';
import IconRoute from '@/assets/icons/order/route.svg';
import RightChevornProcess from '@/assets/icons/rightChevron-process.svg';
import { PastDates } from '@/types';

import styles from './TrackingStep.module.scss';

const DELIVERING_STEP = [
  { step: '배송시작', image: IconDelivery },
  { step: '잡화처리', image: IconReceived },
  { step: '간선상차', image: IconDelivery },
  { step: '간선하차', image: IconRoute },
  { step: '배송완료', image: IconArrived },
];

interface TrackingStepProps {
  currentStatus: string;
  pastDates: PastDates[];
}

export const TrackingStep = ({ currentStatus, pastDates }: TrackingStepProps) => {
  const options = {
    weekday: 'long' as const,
    month: 'long' as const,
    day: 'numeric' as const,
  };

  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.stepList}>
          {DELIVERING_STEP.map((item, index) => (
            <React.Fragment key={item.step}>
              <div className={`${styles.stepBox} ${currentStatus === item.step && styles.active}`}>
                <div className={styles.description}>
                  <span className={styles.step}>{item.step}</span>
                  {pastDates[index] && (
                    <span className={styles.date}>
                      {new Date(pastDates[index].date).toLocaleDateString('ko-KR', options)}
                    </span>
                  )}
                </div>
                <img src={item.image} alt={item.step} />
              </div>
              {index !== DELIVERING_STEP.length - 1 && (
                <img src={RightChevornProcess} alt="rightChevron" />
              )}
            </React.Fragment>
          ))}
        </div>
        <span>
          * 배송 추적 서비스를 통해 제공받는 정보로 실 배송 현황과 차이가 있을 수 있습니다.
        </span>
      </div>
    </section>
  );
};
