import { useMutation, useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from '@/components/Button';
import { Completed } from '@/pages/Estimate/atoms/Completed';
import { USER_ID } from '@/services';
import { getEstimate, patchOrderEstimate } from '@/services/estimateApi';

import styles from './Estimate.module.scss';

export const Estimate = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { mutate } = useMutation(patchOrderEstimate, {
    onSuccess: () => {
      navigate('?completed=true');
    },
  });

  const { data } = useQuery({
    queryKey: ['ESTIMATE', USER_ID],
    queryFn: () => getEstimate(),
    staleTime: 300000, // 5분
  });

  const options = {
    weekday: 'long' as const,
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
  };

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
      {data && (
        <section className={styles.estimateContainer}>
          <div className={styles.estimateTitle}>
            <span>{data.name}</span>
            <span>주문일 {new Date(data.orderDate).toLocaleDateString('ko-KR', options)}</span>
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
                {data.productsInfo.map((item) => (
                  <tr key={item.name}>
                    <td>
                      <div>
                        <img src={item.productImage} alt={item.name} />
                        <span>{item.category}</span>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{item.salePrice.toLocaleString()}</td>
                    <td>{item.totalPrice.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.totalPrice}>총액 = {data.sumPrice.toLocaleString()}원</div>
            <Button
              style={{ marginRight: '55px' }}
              onClick={() => {
                mutate();
              }}
            >
              주문하기
            </Button>
          </div>
        </section>
      )}
    </main>
  );
};
