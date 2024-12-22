import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Fonts from '../../constants/fonts';
import {colors} from '../../theme';
import {HEIGHT, WIDTH} from '../../theme/commSty';

const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: colors.inputBorder,
    borderWidth: moderateScale(1),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(25),
    width: WIDTH / 1.2,
  },
  titleStyle: {
    fontSize: moderateScale(18),
    width: '89%',
    marginBottom: HEIGHT * 0.009,
    alignSelf: 'center',
  },
  textInputStyle: {
    color: colors.white,
    fontSize: moderateScale(14),
    fontFamily: Fonts.Medium,
    width: WIDTH / 1.2,
    height: moderateScale(45),
    paddingLeft: moderateScale(20),
  },
  iconStyle: {
    height: 25,
    width: 25,
    marginLeft: 12,
  },
  RightIconStyle: {
    height: 22,
    width: 22,
    marginLeft: moderateScale(-40),
  },
});

export default styles;
