import { useState } from 'react';

import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import IconCancel from '@/assets/icons/dialog/cancel.svg';
import IconCompleted from '@/assets/icons/dialog/completed.svg';
import Button from '@/components/Button';
import { DefaultDialog } from '@/components/Dialog/DefaultDialog';
import { BuyerInformation } from '@/pages/TrackingDetail/atoms/Information/BuyerInformation';
import { SellerInformation } from '@/pages/TrackingDetail/atoms/Information/SellerInformation';
import { ProductInformation } from '@/pages/TrackingDetail/atoms/ProductInformation';
import { TrackingStep } from '@/pages/TrackingDetail/atoms/TrackingStep';
import { getTrackingDetail } from '@/services/trackingApi';

import styles from './TrackingDetail.module.scss';

export const TrackingDetail = () => {
  const [activeCancelModal, setActiveCancelModal] = useState(false);
  const [activeCompletedModal, setActiveCompletedModal] = useState(false);
  const navigate = useNavigate();
  const { historyId } = useParams();
  const { data } = useQuery({
    queryKey: ['TRACKING_DETAIL', historyId],
    queryFn: () => getTrackingDetail(parseInt(historyId ? historyId : '0')),
    staleTime: 300000, // 5분
  });

  if (data)
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
            <ProductInformation
              estimateDate={data.estimateDate}
              currentStatus={data.currentStatus}
              productsInfos={data.productInfos}
            />
            <div className={styles.deliveryContainer}>
              <SellerInformation sellerInfos={data.sellerInfos} />
              <BuyerInformation buyerInfos={data.buyerInfos} />
            </div>
            <TrackingStep currentStatus={data.currentStatus} pastDates={data.pastDates} />
          </div>
          {data.currentStatus === '주문대기중' && (
            <Button
              style={{ position: 'absolute', bottom: '80px', left: '1565px' }}
              onClick={() => setActiveCancelModal(true)} /* API 연결할 땐 이 로직 아님 */
            >
              주문 취소하기
            </Button>
          )}
          {data.currentStatus === '배송완료' && (
            <Button
              style={{ position: 'absolute', bottom: '80px', left: '1565px' }}
              onClick={() => setActiveCompletedModal(true)} /* API 연결할 땐 이 로직 아님 */
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
            onClick={() => {
              setActiveCancelModal(false);
              navigate('/tracking');
            }}
          />
        )}
        {activeCompletedModal && (
          <DefaultDialog
            icon={<img src={IconCompleted} alt="icon" />}
            text="교환 / 반품 접수가 완료되었어요!"
            open={activeCompletedModal}
            onClick={() => {
              setActiveCompletedModal(false);
              navigate('/tracking');
            }}
          />
        )}
      </>
    );
};
