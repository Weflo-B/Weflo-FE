import { Outlet, Route, Routes } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { Estimate } from '@/pages/Estimate';
import { Tracking } from '@/pages/Tracking';
import { TrackingDetail } from '@/pages/TrackingDetail';

import GuestInsurance from './pages/Insurance/GuestInsurance';
import Insurance from './pages/Insurance/Insurance';
import Order from './pages/Order';
import OrderDetail from './pages/Order/OrderDetail';

export const Router = () => {
  return (
    <Routes>
      <Route path="/test" element={<Layout />}></Route>
      <Route element={<Layout />}>
        <Route path="/insurance" element={<Outlet />}>
          <Route index element={<Insurance />} />
          <Route path="guest" element={<GuestInsurance />} />
        </Route>
        <Route path="/order" element={<Outlet />}>
          <Route index element={<Order />} />
          <Route path="detail/:droneId" element={<OrderDetail />} />
          <Route path="estimate" element={<Estimate />} />
        </Route>
        <Route path="/tracking">
          <Route index element={<Tracking />} />
          <Route path="detail/:historyId" element={<TrackingDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};
