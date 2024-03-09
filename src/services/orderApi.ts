import { BASE_URL } from '.';

export const getAllParts = async (userId: number) => {
  const res = await fetch(`${BASE_URL}/api/orders/${userId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch order data');
  }

  const data = await res.json();
  return data.data;
};
