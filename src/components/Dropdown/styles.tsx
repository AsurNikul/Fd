import {StyleSheet} from 'react-native';

import {moderateScale} from 'react-native-size-matters';
import {Fonts} from '../../constants';
import {colors} from '../../theme';
import {WIDTH} from '../../theme/commSty';

const styles = StyleSheet.create({
  dropdown: {
    height: moderateScale(45),
    borderWidth: 0.9,
    paddingHorizontal: moderateScale(5),
    width: '90%',
    color: 'black',
    fontFamily: Fonts.Regular,
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#ffff',
    borderColor: colors.silver,
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
    color: colors.silver,
  },
  selectedTextStyle: {
    fontSize: moderateScale(16),
    color: 'black',
    fontFamily: Fonts.Regular,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: moderateScale(12),
    fontFamily: Fonts.Regular,
    color: 'black',
  },
  itemTextStyle: {
    fontSize: moderateScale(16),
    color: colors.black,
    fontFamily: Fonts.Medium,
  },
  itemContainerStyle: {
    height: 60,
    color: 'black',
    borderWidth: 0.2,
  },
  error: {
    color: colors.red,
    fontSize: moderateScale(11),
    fontFamily: Fonts.Medium,
    marginTop: 5,
    alignSelf: 'center',
    width: WIDTH / 1.15,
  },
  titleStyle: {
    marginBottom: moderateScale(7),
    // alignSelf: 'center',
    color: colors.border,
  },
});

export default styles;
