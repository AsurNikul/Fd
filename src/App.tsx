import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {pStore} from './redux/store';
import Splash from './screens/Splash';
import RootStack from './navigators/RootStack';

type Props = {};

const App = (props: Props) => {
  const [splash, setSplash] = React.useState<boolean>(false);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setSplash(true);
    }, 2500);
    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={pStore} loading={null}>
          {!splash ? <Splash /> : <RootStack />}
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
