import {StyleSheet} from 'react-native';

import {moderateScale} from 'react-native-size-matters';
import {Fonts} from '../../constants';
import {colors} from '../../theme';
import {WIDTH} from '../../theme/commSty';

const styles = StyleSheet.create({
  dropdown: {
    height: moderateScale(45),
    paddingHorizontal: moderateScale(5),
    width: WIDTH / 1.2,
    color: 'black',
    fontFamily: Fonts.Regular,
    alignSelf: 'center',
    borderRadius: moderateScale(50),
    backgroundColor: colors.primary,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    // marginTop: moderateScale(5),
  },
  subDropdown: {
    width: '100%',
    fontFamily: Fonts.Regular,
    borderRadius: 5,
    paddingHorizontal: moderateScale(11),
  },
  iconStyle: {
    height: 23,
    width: 23,
    marginLeft: 12,
  },
  placeholderStyle: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.Regular,
    color: colors.inputText,
  },
  selectedTextStyle: {
    fontSize: moderateScale(16),
    color: colors.white,
    fontFamily: Fonts.Regular,
    borderColor: colors.inputBorder,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: moderateScale(12),
    fontFamily: Fonts.Regular,
    color: 'white',
  },
  itemTextStyle: {
    fontSize: moderateScale(16),
    color: colors.white,
    fontFamily: Fonts.Medium,
  },
  itemContainerStyle: {
    height: 60,
    color: colors.white,
    borderWidth: 1,
    borderBottomColor: colors.inputBorder,
    backgroundColor: colors.primary,
  },
  error: {
    color: colors.red,
    fontSize: moderateScale(11),
    fontFamily: Fonts.Medium,
    alignSelf: 'center',
    width: WIDTH / 1.39,
    marginTop: 5,
  },
  titleStyle: {
    marginBottom: moderateScale(7),
    // alignSelf: 'center',
    color: colors.inputText,
  },
});

export default styles;
