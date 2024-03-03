import IconBag from '@/assets/icons/bag.svg';
import IconCheck from '@/assets/icons/check.svg';
import IconDrone from '@/assets/icons/drone.svg';
import IconMonitoring from '@/assets/icons/monitoring.svg';
import IconPaper from '@/assets/icons/paper.svg';

// TODO: 주문/배송 조회 아이콘 수정
export const NAVIGATION_MENU_LIST = [
  {
    title: '드론진단',
    path: '/drone',
    icon: IconDrone,
  },
  {
    title: '모니터링',
    path: '/monitoring',
    icon: IconMonitoring,
  },
  {
    title: '부품주문',
    path: '/order',
    icon: IconBag,
  },
  {
    title: '주문/배송 조회',
    path: '/tracking',
    icon: IconBag,
  },
  {
    title: '수리/점검',
    path: '/check',
    icon: IconCheck,
  },
  {
    title: '보험',
    path: '/insurance',
    icon: IconPaper,
  },
];
