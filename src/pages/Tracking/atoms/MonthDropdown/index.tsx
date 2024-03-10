/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import IconDropdown from '@/assets/icons/dropdown.svg';
import { GetTrackingData } from '@/types';

import styles from './MonthDropdown.module.scss';

interface MonthDropdownProps {
  month: number;
  setInitialData: (data: GetTrackingData | null) => void;
}

export const MonthDropdown = ({ month, setInitialData }: MonthDropdownProps) => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        type="button"
        className={styles.contentContainer}
        onClick={() => setActiveDropdown((prev) => !prev)}
      >
        <div className={styles.month}>{month}월</div>
        <img
          src={IconDropdown}
          alt="dropdown"
          className={`${activeDropdown && styles.activeButton}`}
        />
      </button>
      {activeDropdown && (
        <div className={styles.boxContainer}>
          <ul>
            {Array.from({ length: 12 }, (_, index) => (
              <li
                key={index}
                className={`${month === index + 1 && styles.activeMonth}`}
                onClick={() => {
                  //setMonth(index + 1);
                  navigate(`/tracking?month=${index + 1}`);
                  setInitialData(null);
                  setActiveDropdown(false);
                }}
              >
                {index + 1}월
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
