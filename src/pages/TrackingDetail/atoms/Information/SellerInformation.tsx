import { SellerInfos } from '@/types';

import styles from './Information.module.scss';

interface SellerInformationProps {
  sellerInfos: SellerInfos;
}
export const SellerInformation = ({ sellerInfos }: SellerInformationProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>택배사 상세</div>
      <div className={styles.content}>
        <div>
          <span>택배사</span>
          <span>|</span>
          <span>{sellerInfos.deliveryCompany}</span>
        </div>
        <div>
          <span>전화번호</span>
          <span>|</span>
          <span>{sellerInfos.deliveryTel}</span>
        </div>
        <div>
          <span>송장번호</span>
          <span>|</span>
          <span>{sellerInfos.invoiceNumber}</span>
        </div>
        <div>
          <span>판매자</span>
          <span>|</span>
          <span>{sellerInfos.seller}</span>
        </div>
      </div>
    </section>
  );
};
