import React from 'react';

// Authentication Stack
export const AuthScr = {
  Login: React.lazy(() => import('../screens/Auth/Login')),
  Register: React.lazy(() => import('../screens/Auth/Register')),
};
