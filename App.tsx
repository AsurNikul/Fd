import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import store, {pStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import {LogBox} from 'react-native';
import Picker from './src/components/Picker';
import AuthStack from './src/navigators/AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <PersistGate persistor={pStore}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
