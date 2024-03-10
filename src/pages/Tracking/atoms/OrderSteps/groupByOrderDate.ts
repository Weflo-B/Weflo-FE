import { OrderHistory } from '@/types';

export const groupByOrderDate = (orderList: OrderHistory[]): { [key: string]: OrderHistory[] } => {
  const sortedGroupOrderList: { [key: string]: OrderHistory[] } = {};
  const groupOrderList = orderList.reduce((result: { [key: string]: OrderHistory[] }, order) => {
    const orderDateKey = order.orderDate;

    if (!result[orderDateKey]) {
      result[orderDateKey] = [];
    }

    result[orderDateKey].push(order);

    return result;
  }, {});

  Object.keys(groupOrderList)
    .sort()
    .forEach((key) => {
      sortedGroupOrderList[key] = groupOrderList[key];
    });

  return sortedGroupOrderList;
};
