import {StyleSheet} from 'react-native';
import Fonts from '../../constants/fonts';
import {moderateScale} from 'react-native-size-matters';
import {colors, commonSty} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    alignSelf: 'center',
  },
  img: {height: moderateScale(25), width: moderateScale(25)},
  txt: {
    fontSize: moderateScale(19),
    color: colors.black,
    fontFamily: Fonts.SemiBold,
  },
  rightIcon: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  countContainer: {
    position: 'absolute',
    backgroundColor: colors.navyBlue,
    height: moderateScale(18),
    width: moderateScale(18),
    borderRadius: moderateScale(8),
    ...commonSty.center,
    top: moderateScale(10),
    right: moderateScale(10),
  },
});

export default styles;
