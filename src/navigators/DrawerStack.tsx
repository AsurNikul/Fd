import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes, Screens} from '../constants';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name={Routes.Home} component={Screens.Home} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
