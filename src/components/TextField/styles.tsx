import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {HEIGHT, WIDTH} from '../../theme';
import {colors} from '../../theme';
import {Fonts} from '../../constants';

const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: colors.black,
    borderBottomWidth: moderateScale(0.8),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    width: WIDTH / 1.12,
  },
  inputTextContainerStyle: {
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
    paddingHorizontal: moderateScale(10),
  },
  miniTextInputStyle: {
    color: colors.black,
    fontSize: moderateScale(16),
    fontFamily: Fonts.Medium,
    width: WIDTH / 1.3,
    height: moderateScale(45),
    paddingLeft: moderateScale(15),
  },
  titleStyle: {
    fontSize: moderateScale(18),
    width: '89%',
    marginBottom: HEIGHT * 0.009,
    alignSelf: 'center',
  },
  textInputStyle: {
    color: colors.black,
    fontSize: moderateScale(14),
    fontFamily: Fonts.Medium,
    height: moderateScale(45),
    paddingHorizontal: moderateScale(15),
  },
  iconStyle: {
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: colors.pastelGrey,
  },
  RightIconStyle: {
    height: 22,
    width: 22,
    marginLeft: moderateScale(-40),
  },
});

export default styles;
