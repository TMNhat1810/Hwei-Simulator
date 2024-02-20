import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HweiSim } from '../pages/HweiSim';
import Layout from '../layout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/hwei-sim" element={<HweiSim />} />
        </Route>
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </BrowserRouter>
  );
}
