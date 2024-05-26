import {moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../../src/constants';
import {colors} from '../../../src/theme';

const styles = StyleSheet.create({
  btnStyle: {
    width: '91%',
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: moderateScale(15),
    height: moderateScale(55),
    backgroundColor: colors.primary,
  },
  btnTextStyle: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.SemiBold,
    textAlign: 'center',
    color: '#ffff',
  },
});

export default styles;
