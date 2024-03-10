import { useState } from 'react';

import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import IconCancel from '@/assets/icons/dialog/cancel.svg';
import IconCompleted from '@/assets/icons/dialog/completed.svg';
import Button from '@/components/Button';
import { DefaultDialog } from '@/components/Dialog/DefaultDialog';
import { RadioButtonDialog } from '@/components/Dialog/RadioButtonDialog';
import { BuyerInformation } from '@/pages/TrackingDetail/atoms/Information/BuyerInformation';
import { SellerInformation } from '@/pages/TrackingDetail/atoms/Information/SellerInformation';
import { ProductInformation } from '@/pages/TrackingDetail/atoms/ProductInformation';
import { TrackingStep } from '@/pages/TrackingDetail/atoms/TrackingStep';
import { getTrackingDetail, patchDeliveryStatus } from '@/services/trackingApi';

import styles from './TrackingDetail.module.scss';

export const TrackingDetail = () => {
  const [activeCancelModal, setActiveCancelModal] = useState(false);
  const [activeCompletedModal, setActiveCompletedModal] = useState(false);
  const navigate = useNavigate();
  const [activeExchangeReturnModal, setActiveExchangeReturnModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const { historyId } = useParams();

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(event.target.value);
  };

  const { data: productData } = useQuery({
    queryKey: ['TRACKING_DETAIL', historyId],
    queryFn: () => getTrackingDetail(parseInt(historyId ? historyId : '0')),
    staleTime: 300000, // 5분
  });

  const { mutate } = useMutation(patchDeliveryStatus, {
    onSuccess: (data) => {
      if (data.deliveryDetailStatus === '주문취소') {
        setActiveCancelModal(true);
      } else {
        setActiveExchangeReturnModal(false);
        setActiveCompletedModal(true);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  if (productData)
    return (
      <>
        <main className={styles.container}>
          <div className={styles.titleContainer}>
            <span className={styles.pageDescription}>주문/배송조회</span>
            <span className={styles.title}>주문 / 배송조회</span>
          </div>
          <div className={styles.content}>
            <ProductInformation
              estimateDate={productData.estimateDate}
              currentStatus={productData.currentStatus}
              productsInfos={productData.productInfos}
            />
            <div className={styles.deliveryContainer}>
              <SellerInformation sellerInfos={productData.sellerInfos} />
              <BuyerInformation buyerInfos={productData.buyerInfos} />
            </div>
            <TrackingStep
              currentStatus={productData.currentStatus}
              pastDates={productData.pastDates}
            />
            <div>
              {productData.currentStatus === '배송시작' && (
                <Button
                  style={{ float: 'right' }}
                  onClick={() => {
                    mutate({
                      historyId: parseInt(historyId ? historyId : '0'),
                      status: '주문취소',
                    });
                  }}
                >
                  주문 취소하기
                </Button>
              )}
              {productData.currentStatus === '종료' && (
                <Button
                  style={{ float: 'right' }}
                  onClick={() => setActiveExchangeReturnModal(true)}
                >
                  교환/반품하기
                </Button>
              )}
            </div>
          </div>
        </main>
        <DefaultDialog
          icon={<img src={IconCancel} alt="icon" />}
          text="주문이 취소되었습니다!"
          open={activeCancelModal}
          onClick={() => {
            setActiveCancelModal(false);
            navigate('/tracking');
          }}
        />
        <RadioButtonDialog
          text="교환 / 반품 접수"
          open={activeExchangeReturnModal}
          selectedStatus={selectedStatus}
          handleStatusChange={handleStatusChange}
          onCloseClick={() => {
            setActiveExchangeReturnModal(false);
          }}
          onConfirmClick={() => {
            if (selectedStatus !== '') {
              mutate({
                historyId: parseInt(historyId ? historyId : '0'),
                status: selectedStatus,
              });
            }
          }}
        />
        <DefaultDialog
          icon={<img src={IconCompleted} alt="icon" />}
          text="교환 / 반품 접수가 완료되었어요!"
          open={activeCompletedModal}
          onClick={() => {
            setActiveCompletedModal(false);
            navigate('/tracking');
          }}
        />
      </>
    );
};
