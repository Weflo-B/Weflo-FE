import IconBag from '@/assets/icons/bag.svg';
import IconCheck from '@/assets/icons/check.svg';
import IconDrone from '@/assets/icons/drone.svg';
import IconMonitoring from '@/assets/icons/monitoring.svg';
import IconPaper from '@/assets/icons/paper.svg';
import IconTracking from '@/assets/icons/tracking.svg';

// TODO: 주문/배송 조회 아이콘 수정
export const NAVIGATION_MENU_LIST = [
  {
    title: '드론진단',
    path: '',
    icon: IconDrone,
  },
  {
    title: '모니터링',
    path: '',
    icon: IconMonitoring,
  },
  {
    title: '부품주문',
    path: '/order',
    icon: IconBag,
  },
  {
    title: '주문/배송 조회',
    path: `/tracking?month=${new Date().getMonth() + 1}`,
    icon: IconTracking,
  },
  {
    title: '수리/점검',
    path: '',
    icon: IconCheck,
  },
  {
    title: '보험',
    path: '/insurance',
    icon: IconPaper,
  },
];
