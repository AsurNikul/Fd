import React, {createRef, useState} from 'react';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import store, {pStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import {
  Button,
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Typography from './src/components/Typo';
import PrimaryBtn from './src/components/button';
import Check from './src/components/CheckBox';
import {ChooseImg, Header, ImagePickerSheet} from './src/components/All';
import {ActionSheetRef} from 'react-native-actions-sheet';
import DropDown from './src/components/Dropdown';
import CustomDrop from './src/components/Dropdown/SDropdown';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Sheet from './src/components/Sheet';
import TextField from './src/components/TextField';
import {colors, commonSty} from './src/theme';
import {PickerData} from './src/constants/data';
import {moderateScale} from 'react-native-size-matters';
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
