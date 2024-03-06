import Button from '@/components/Button';
import { ProductInformation } from '@/pages/TrackingDetail/atoms/ProductInformation';
import { TrackingStep } from '@/pages/TrackingDetail/atoms/TrackingStep';

import TestImg from '../Tracking/atoms/test.png';

import styles from './TrackingDetail.module.scss';

const Dummy = {
  arrivalDate: '2월 28일 수요일',
  startDate: '2월 24일 월요일',
  image: TestImg,
  name: '블레이드',
  description: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
  count: 1,
  price: 7500,
  step: 'start',
};

export const TrackingDetail = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.pageDescription}>주문/배송조회</span>
        <div className={styles.titleInnerContainer}>
          <span className={styles.title}>주문 / 배송조회</span>
        </div>
      </div>
      <div className={styles.content}>
        <ProductInformation product={Dummy} />
        <TrackingStep product={Dummy} />
      </div>
      {Dummy.step === 'prepare' && (
        <Button style={{ position: 'absolute', bottom: '80px', left: '1565px' }}>
          주문 취소하기
        </Button>
      )}
      {Dummy.step === 'arrived' && (
        <Button style={{ position: 'absolute', bottom: '80px', left: '1565px' }}>
          교환/반품하기
        </Button>
      )}
    </main>
  );
};
