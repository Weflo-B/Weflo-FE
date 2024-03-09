/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';

import styles from './ProgressBar.module.scss';

interface ProgressBarProp {
  progress: number;
  previousDays: number;
  remainDays: number;
}

const ProgressBar = ({ progress, previousDays, remainDays }: ProgressBarProp) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [labelPosition, setLabelPosition] = useState('0px');

  useEffect(() => {
    // 현황 라벨 위치 계산
    if (containerRef.current && labelRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const labelWidth = labelRef.current.offsetWidth;
      const position = 36 + containerWidth * (progress / 100) - labelWidth / 3;
      setLabelPosition(`${position}px`);
    }
  }, [progress]);

  const percentageWidth = {
    width: `${progress}%`,
  };

  const labelWidth = {
    left: labelPosition,
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.progressBar} role="progressbar" style={percentageWidth}>
        <span>보험요율</span>
        <div>{`${progress}`}%</div>
      </div>
      <div className={styles.label} style={labelWidth} ref={labelRef}>
        <span>위플로우와 함께 한지 벌써 {previousDays}일째!</span>
        <span>{remainDays}일 후에 보험요율이 더 낮아져요</span>
      </div>
    </div>
  );
};

export default ProgressBar;
