import { BuyerInfos } from '@/types';

import styles from './Information.module.scss';

interface BuyerInformationProps {
  buyerInfos: BuyerInfos;
}

export const BuyerInformation = ({ buyerInfos }: BuyerInformationProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>배송지 정보</div>
      <div className={styles.content}>
        <div>
          <span>수신자</span>
          <span>|</span>
          <span>{buyerInfos.name}</span>
        </div>
        <div>
          <span>연락처</span>
          <span>|</span>
          <span>{buyerInfos.tel}</span>
        </div>
        <div>
          <span>배송지</span>
          <span>|</span>
          <span>{buyerInfos.address}</span>
        </div>
      </div>
    </section>
  );
};
