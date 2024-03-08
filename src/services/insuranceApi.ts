import { HTTP_URL } from '.';

export const getInsruance = async (userId: number) => {
  const res = await fetch(`${HTTP_URL}/api/insurance/${userId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch insurance data');
  }
  const data = await res.json();
  return data.data;
};
