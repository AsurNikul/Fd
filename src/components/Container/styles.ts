import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    alignItems: 'center',
  },
  keyboardView: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: verticalScale(20),
  },
});

export default styles;
