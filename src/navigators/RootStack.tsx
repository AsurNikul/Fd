import React from 'react';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const RootStack = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.main.authDetails?.isAuthenticated,
  );
  return <>{isAuthenticated ? <MainStack /> : <AuthStack />}</>;
};

export default RootStack;
