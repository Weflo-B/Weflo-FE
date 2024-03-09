import { BASE_URL, USER_ID } from '@/services';
import { GetEstimateData } from '@/types';

export const getEstimate = async () => {
  const response = await fetch(`${BASE_URL}/api/quotation/${USER_ID}`);

  if (!response.ok) {
    throw Error('Failed to fetch estimate data');
  }

  const data = (await response.json()) as { data: GetEstimateData };
  return data.data;
};

export const patchOrderEstimate = async () => {
  const response = await fetch(`${BASE_URL}/api/orders/${USER_ID}`);

  if (!response.ok) {
    throw Error('Failed to update estimate order data');
  }

  const data = await response.json();
  return data.isSuccess;
};
