import { Outlet, Route, Routes } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { Tracking } from '@/pages/Tracking';
import { TrackingDetail } from '@/pages/TrackingDetail';

import GuestInsurance from './pages/Insurance/GuestInsurance';
import Insurance from './pages/Insurance/Insurance';
import Order from './pages/Order';
import OrderDetail from './pages/Order/OrderDetail';
import OrderEstimate from './pages/Order/OrderEstimate';

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/insurance" element={<Outlet />}>
          <Route index element={<Insurance />} />
          <Route path="guest" element={<GuestInsurance />} />
        </Route>
        <Route path="/order" element={<Outlet />}>
          <Route index element={<Order />} />
          <Route path="detail" element={<OrderDetail />} />
          <Route path="estimate" element={<OrderEstimate />} />
        </Route>
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/tracking/detail" element={<TrackingDetail />} />
      </Route>
    </Routes>
  );
};
