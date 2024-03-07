import styles from './ProductInformation.module.scss';

interface ProductInformationProps {
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

export const ProductInformation = ({ product }: ProductInformationProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.arrivalInformation}>
        <span>{product.arrivalDate} 도착 예정</span>
        <span>고객님이 주문하신 상품이 배송중입니다.</span>
      </div>
      <div className={styles.product}>
        <img src={product.image} alt={product.name} />
        <div className={styles.productInformation}>
          <span>{product.name}</span>
          <span>
            {product.description} | 수량 {product.count} 개
          </span>
          <span>{product.price.toLocaleString()}원</span>
        </div>
      </div>
    </section>
  );
};
