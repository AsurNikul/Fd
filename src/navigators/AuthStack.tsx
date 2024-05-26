import {StatusBar} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {AuthScr} from './screens';
import SCREENS from './route';

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
        initialRouteName={SCREENS.LOGIN}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name={SCREENS.LOGIN} component={AuthScr.Login} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
