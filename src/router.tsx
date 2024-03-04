import { Route, Routes } from 'react-router-dom';

import { Home } from '@/Home';
import { Layout } from '@/layouts/Layout';

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/drone" element={<Home />} />
      </Route>
    </Routes>
  );
};
