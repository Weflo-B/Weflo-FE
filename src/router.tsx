import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/layouts/Layout';
import { Tracking } from '@/pages/Tracking';

import Insurance from './pages/Insurance/Insurance';

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/tracking" element={<Tracking />} />
      </Route>
    </Routes>
  );
};
