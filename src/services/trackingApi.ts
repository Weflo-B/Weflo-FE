import { BASE_URL, USER_ID } from '@/services';
import { GetTrackingData, GetTrackingDetailData } from '@/types';

export const getTracking = async (month: number, status: string) => {
  const response = await fetch(
    `${BASE_URL}/api/histories?user_id=${USER_ID}&month=${month}&order_status=${status}`,
  );

  if (!response.ok) {
    throw Error('Failed to fetch tracking data');
  }

  const data = (await response.json()) as { data: GetTrackingData };
  return data.data;
};

export const getTrackingDetail = async (historyId: number) => {
  const response = await fetch(`${BASE_URL}/api/delivery/details/${historyId}`);

  if (!response.ok) {
    throw Error('Failed to fetch tracking detail data');
  }

  const data = (await response.json()) as { data: GetTrackingDetailData };
  return data.data;
};
