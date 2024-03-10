import { DefaultValue, atom, selector } from 'recoil';

import { getOrderCount, setOrderCount } from '@/utils/orderCount';

const orderCountState = atom({
  key: 'OrderCountState',
  default: parseInt(getOrderCount() ?? '0'),
});

export const orderCountSelector = selector({
  key: 'OrderCountSelector',
  get: ({ get }) => {
    return get(orderCountState);
  },
  set: ({ set }, newCount: number | DefaultValue) => {
    if (typeof newCount === 'number') set(orderCountState, newCount);
    setOrderCount(newCount as number);
  },
});
