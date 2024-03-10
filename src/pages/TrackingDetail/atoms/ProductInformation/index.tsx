import { ProductInfos } from '@/types';

import styles from './ProductInformation.module.scss';

interface ProductInformationProps {
  estimateDate: string;
  currentStatus: string;
  productsInfos: ProductInfos;
}

export const ProductInformation = ({
  estimateDate,
  currentStatus,
  productsInfos,
}: ProductInformationProps) => {
  const options = {
    weekday: 'long' as const,
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
  };

  return (
    <section className={styles.container}>
      <div className={styles.arrivalInformation}>
        {currentStatus === '종료' || currentStatus === '구매확정' ? (
          <>
            <span>{estimateDate} 배송 완료</span>
            <span>고객님이 주문하신 상품이 배송완료되었어요.</span>
          </>
        ) : (
          <>
            <span>{new Date(estimateDate).toLocaleDateString('ko-KR', options)} 도착 예정</span>
            <span>고객님이 주문하신 상품이 배송중입니다.</span>
          </>
        )}
      </div>
      <div className={styles.product}>
        <img src={productsInfos.productImage} alt={productsInfos.name} />
        <div className={styles.productInformation}>
          <span>{productsInfos.category}</span>
          <span>
            {productsInfos.name} | 수량 {productsInfos.amount} 개
          </span>
          <span>{productsInfos.salePrice.toLocaleString()}원</span>
        </div>
      </div>
    </section>
  );
};
