import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Fonts from '../../constants/fonts';
import {colors} from '../../theme';
import {HEIGHT, WIDTH} from '../../theme/commonStyle';

const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: colors.inputBorder,
    borderWidth: moderateScale(1),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    width: WIDTH / 1.1,
    backgroundColor: colors.white,
    marginBottom: HEIGHT * 0.02,
  },
  titleStyle: {
    fontSize: moderateScale(18),
    width: '95%',
    marginBottom: HEIGHT * 0.009,
    alignSelf: 'center',
  },
  textInputStyle: {
    color: colors.black,
    fontSize: moderateScale(16),
    fontFamily: Fonts.Medium,
    width: WIDTH / 1.2,
    height: moderateScale(45),
    paddingLeft: moderateScale(15),
  },
  iconStyle: {
    height: moderateScale(18),
    width: moderateScale(18),
    marginLeft: moderateScale(15),
  },
});

export default styles;
