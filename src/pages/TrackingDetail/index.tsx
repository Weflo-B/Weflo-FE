import { useState } from 'react';

import IconCancel from '@/assets/icons/dialog/cancel.svg';
import IconCompleted from '@/assets/icons/dialog/completed.svg';
import Button from '@/components/Button';
import { DefaultDialog } from '@/components/Dialog/DefaultDialog';
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
  step: 'arrived',
};

export const TrackingDetail = () => {
  const [activeCancelModal, setActiveCancelModal] = useState(false);
  const [activeCompletedModal, setActiveCompletedModal] = useState(false);

  return (
    <>
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
          <Button
            style={{ position: 'absolute', bottom: '80px', left: '1565px' }}
            onClick={() => setActiveCancelModal(true)}
          >
            주문 취소하기
          </Button>
        )}
        {Dummy.step === 'arrived' && (
          <Button
            style={{ position: 'absolute', bottom: '80px', left: '1565px' }}
            onClick={() => setActiveCompletedModal(true)}
          >
            교환/반품하기
          </Button>
        )}
      </main>
      {activeCancelModal && (
        <DefaultDialog
          icon={<img src={IconCancel} alt="icon" />}
          text="주문이 취소되었습니다!"
          open={activeCancelModal}
          onClick={() => setActiveCancelModal(false)}
        />
      )}
      {activeCompletedModal && (
        <DefaultDialog
          icon={<img src={IconCompleted} alt="icon" />}
          text="교환 / 반품 접수가 완료되었어요!"
          open={activeCompletedModal}
          onClick={() => setActiveCompletedModal(false)}
        />
      )}
    </>
  );
};
