import React, {useState} from 'react';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import store, {pStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import {LogBox} from 'react-native';
import {Header} from './src/components/All';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from './src/theme';
import Picker from './src/components/Picker';

const App = () => {
  LogBox.ignoreAllLogs();

  const [check, setCheck] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate persistor={pStore}>
        <SafeAreaProvider style={{flex: 1, backgroundColor: colors.black}}>
          <Header title="Nikul" />
          <Picker />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
