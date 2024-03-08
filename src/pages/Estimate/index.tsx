import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from '@/components/Button';
import { Completed } from '@/pages/Estimate/atoms/Completed';

import Test from '../Tracking/atoms/test.png';

import styles from './Estimate.module.scss';

const Dummy = [
  {
    image: Test,
    product: '블레이드',
    description: 'DJI 아바타 드론 블레이드 프로펠러 교체용 경량 날개 팬 프로펠러 액세서리',
    count: 2,
    price: 8800,
  },
  {
    image: Test,
    product: '블레이드',
    description: 'EVO Lite 플러스 프로펠러 오리지널 액세서리 블레이드 프로펠러',
    count: 1,
    price: 40450,
  },
  {
    image: Test,
    product: '모터',
    description: '13T 드론 브러시리스 모터 멀티 쿼드 RC A2212 1000KV',
    count: 1,
    price: 15830,
  },
  {
    image: Test,
    product: 'ESC',
    description: 'DJI Agras 드론 ESC 모듈 T30 T10 T40 T20P',
    count: 1,
    price: 15830,
  },
];

export const Estimate = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTotalPrice(Dummy.reduce((acc, item) => acc + item.count * item.price, 0));
  }, []);

  if (searchParams.get('completed')) return <Completed />;

  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.pageDescription}>
          <span>부품 주문</span>
          <span>견적서</span>
        </div>
        <span className={styles.title}>견적서</span>
      </div>
      <section className={styles.estimateContainer}>
        <div className={styles.estimateTitle}>
          <span>{`파블로 항공`}</span>
          <span>주문일 {`2024년 1월 1일`}</span>
        </div>
        <div className={styles.estimateInformationContainer}>
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>세부내용</th>
                <th>수량</th>
                <th>단가</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              {Dummy.map((item) => (
                <tr key={item.description}>
                  <td>
                    <div>
                      <img src={item.image} alt={item.product} />
                      <span>{item.product}</span>
                    </div>
                  </td>
                  <td>{item.description}</td>
                  <td>{item.count}</td>
                  <td>{item.price.toLocaleString()}</td>
                  <td>{(item.count * item.price).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.totalPrice}>총액 = {totalPrice.toLocaleString()}원</div>
          <Button style={{ marginRight: '55px' }} onClick={() => navigate('?completed=true')}>
            주문하기
          </Button>
        </div>
      </section>
    </main>
  );
};
