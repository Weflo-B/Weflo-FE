import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { Tracking } from '@/pages/Tracking';

// ui 확인 위해 임시 라우팅 -> 로그인에 따른 처리는 나중에 할 예정
// import Insurance from './pages/Insurance/Insurance';
import GuestInsurance from './pages/Insurance/GuestInsurance';

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/insurance" element={<Insurance />} /> */}
        <Route path="/insurance" element={<GuestInsurance />} />
        <Route path="/tracking" element={<Tracking />} />
      </Route>
    </Routes>
  );
};
