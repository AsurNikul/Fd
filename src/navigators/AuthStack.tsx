import {StatusBar} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Routes, Screens} from '../constants';

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <Stack.Navigator
        initialRouteName={Routes.LOGIN}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name={Routes.LOGIN} component={Screens.Login} />
        <Stack.Screen name={Routes.REGISTER} component={Screens.Register} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
