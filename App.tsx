import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import store, {pStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/utils/NavigationServices';
import {ConfirmModalProvider} from './src/components/ConfirmModalProvider';
import RootStack from './src/navigators/RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <PersistGate persistor={pStore}>
        <NavigationContainer ref={navigationRef}>
          <SafeAreaProvider>
            <ConfirmModalProvider>
              <RootStack />
            </ConfirmModalProvider>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
