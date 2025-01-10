import {moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../../src/constants';
import {colors} from '../../../src/theme';

const styles = StyleSheet.create({
  btnStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnTextStyle: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.SemiBold,
    textAlign: 'center',
    color: '#ffff',
  },
});

export default styles;
