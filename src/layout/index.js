import React from 'react';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <div className="nav"></div>
      <div className="background">
        <image />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
}
