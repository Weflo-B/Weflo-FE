import priceSale from '@/assets/icons/priceSale.svg';
import { PartOnSaleData } from '@/types';

import styles from './PartOnSale.module.scss';

interface PartOnSaleProps {
  part: PartOnSaleData;
}
const PartOnSale = ({ part }: PartOnSaleProps) => {
  const addComma = (price: number) => {
    const returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return returnString;
  };

  const formatDate = (stringDate: string) => {
    const d = new Date(stringDate);
    const date = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d);

    return date;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.date}>{formatDate(part.estimateDate)} 도착 예정</div>
        <img src={part.productImage} alt="드론 부품 이미지" className={styles.partImg} />
        <div className={styles.content}>
          <div className={styles.partName}>{part.category}</div>
          <div className={styles.partDetail}>{part.name}</div>
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.salePrice}>
          <div className={styles.label}>시장가</div>
          <div className={styles.value}>
            <div className={styles.text}>{addComma(part.price)}원</div>
            <img className={styles.saleImg} src={priceSale} alt="세일 표시" />
          </div>
        </div>
        <div className={styles.wefloPrice}>
          <div className={styles.label}>위플로 가격</div>
          <div className={styles.value}>{addComma(part.salePrice)}원</div>
          <div className={styles.num}>({part.amount}개)</div>
        </div>
      </div>
    </div>
  );
};

export default PartOnSale;
