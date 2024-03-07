import React from 'react';

import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { droneId } = useParams();
  return <div>OrderDetail</div>;
};

export default OrderDetail;
