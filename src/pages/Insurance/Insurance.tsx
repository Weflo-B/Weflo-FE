import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';

import RightChevornProcess from '@/assets/icons/rightChevron-process.svg';
import RightChevron from '@/assets/icons/rightChevron.svg';
import TermEllipse from '@/assets/icons/termEllipse.svg';
import Button from '@/components/Button';
import { INSURANCE_SUBMIT_CONTENT } from '@/constants/insuranceConstants';
import InsuranceContent from '@/pages/Insurance/atoms/InsuranceContent';
import InsuranceProcess from '@/pages/Insurance/atoms/InsuranceProcess';
import ProgressBar from '@/pages/Insurance/atoms/ProgressBar';
import { USER_ID } from '@/services';
import { getInsruance } from '@/services/insuranceApi';
import { insuranceData } from '@/types';

import styles from './Insurance.module.scss';

const INSURACE_CONTENT = {
  header: '드론배상책임보험',
  subHeader: '다음의 상황 발생 시 즉시 보험사에 알려주세요!',
  labels: [
    '• 사고 발생의 경우: 사고 발생 시각 및 장소, 피해자의 주소와 성명, 사고 상황, 증인의 주소와 성명',
    '• 피해자에게 손해배상 청구를 받거나 관련 소송을 제기받았을 경우',
  ],
};

const INSURANCE_TERM = {
  header: '드론기체 파손 특별 약관',
  subHeader: '사고가 발생한 경우에 즉시 다음 사항을 보험사에 알려주세요!',
  labels: [
    '• 드론 식별번호, 전화번호 등 보험 목적물에 관한 사항',
    '• 소유권 확인을 위한 상황',
    '• 언제, 어디서, 어떻게 사고가 발생하였는지에 대한 상황',
  ],
};

const Insurance = () => {
  const [user, setUser] = useState<insuranceData>();

  const { data } = useQuery({
    queryKey: ['INSURANCE', 'JOINED', USER_ID],
    queryFn: () => getInsruance(USER_ID),
  });

  const today = new Date();
  const todayString = today.toISOString();

  const formatDate = (stringDate: string) => {
    const d = new Date(stringDate);
    const date = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d);

    return date;
  };

  const calculateDays = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffSec = end.getTime() - start.getTime();
    const diffDays = diffSec / (1000 * 60 * 60 * 24);
    return Math.floor(diffDays); // 몫만 반환
  };

  const handleOpenTab = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <span>보험</span>
        <img src={RightChevron} alt="left-chevron" />
        <span>가입자</span>
      </div>
      <div className={styles.header}>
        <div className={styles.label}>보험</div>
        <Button
          style={{ width: '238px' }}
          onClick={() => handleOpenTab('https://www.hwgeneralins.com/')}
        >
          보험금 청구 바로가기
        </Button>
      </div>
      <div className={styles.dateContainer}>
        <div className={styles.date}>
          <span>보험 가입일</span>
          <span>{user?.joinDate && formatDate(user.joinDate)}</span>
        </div>
        <div className={styles.date}>
          <span>다음 갱신일</span>
          <span>{user?.updateDate && formatDate(user.updateDate)}</span>
        </div>
        <ProgressBar
          progress={user?.insuranceRate || 0}
          previousDays={user?.joinDate ? calculateDays(user.joinDate, todayString) + 1 : 0}
          remainDays={user?.joinDate ? calculateDays(todayString, user.updateDate) : 0}
        />
      </div>
      <div className={styles.content}>
        <InsuranceContent
          header={INSURACE_CONTENT.header}
          subHeader={INSURACE_CONTENT.subHeader}
          labels={INSURACE_CONTENT.labels}
        />
        <InsuranceContent
          header={INSURANCE_TERM.header}
          subHeader={INSURANCE_TERM.subHeader}
          labels={INSURANCE_TERM.labels}
        />
      </div>
      <a
        className={styles.termDetail}
        href="https://www.hwgeneralins.com/upload/hmpag_upload/product/drone(2301)_03.pdf"
        target="_blank"
      >
        <img src={TermEllipse} alt="약관 자세히보기 아이콘" />
        <div className={styles.termLabel}>자세한 내용은 보험 약관 참고</div>
      </a>
      <div className={styles.process}>
        <span className={styles.processLabel}>보험급 지금 절차</span>
        <div className={styles.processContainer}>
          <InsuranceProcess index={0} />
          <img src={RightChevornProcess} alt="" />
          <InsuranceProcess index={1} />
          <img src={RightChevornProcess} alt="" />
          <InsuranceProcess index={2} />
          <img src={RightChevornProcess} alt="" />
          <InsuranceProcess index={3} />
        </div>
      </div>
      <div className={styles.submit}>
        <span className={styles.submitLabel}>보험 서류 제출</span>
        <div className={styles.submitContent}>
          {INSURANCE_SUBMIT_CONTENT.map((text) => {
            return <span key={text}>{text}</span>;
          })}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Insurance;
