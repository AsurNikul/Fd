import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';
import {getAuth} from '../redux';
import AuthStack from './AuthStack';
import Splash from '../screens/Splash';

const RootStack = () => {
  const isAuthenticated = useSelector(getAuth);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return (
    <>
      {showSplash ? (
        <Splash />
      ) : (
        <>{isAuthenticated?.token ? <MainStack /> : <AuthStack />}</>
      )}
    </>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
