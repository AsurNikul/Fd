import {Platform, StyleSheet} from 'react-native';
import Fonts from '../../constants/fonts';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: moderateScale(10),
    paddingBottom: moderateScale(15),
  },
  smallContainer: {
    width: '15%',
    alignItems: 'center',
  },
  bigContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {height: 25, width: 25},
  txt: {
    fontSize: moderateScale(19),
    color: colors.black,
    fontFamily: Fonts.SemiBold,
  },
});

export default styles;
