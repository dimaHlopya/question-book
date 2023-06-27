import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginTemplate: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LoginTemplate;
