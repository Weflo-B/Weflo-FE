import { HTTP_URL } from '.';

export const getInsruance = async (userId: number) => {
  const res = await fetch(`${HTTP_URL}//api/insurance/${userId}`);
  const data = res.json();
  return data;
};
