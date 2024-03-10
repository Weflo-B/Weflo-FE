export const setOrderCount = (newCount: number) => {
  localStorage.setItem('orderCount', newCount.toString());
};

export const getOrderCount = () => {
  const count = localStorage.getItem('orderCount');
  if (count) {
    return count;
  } else {
    return 0;
  }
};
