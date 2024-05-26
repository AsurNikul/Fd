import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Fonts from '../../constants/fonts';
import {colors} from '../../theme';
import {HEIGHT} from '../../theme/commSty';

const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    borderColor: colors.black,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    height: moderateScale(45),
  },
  titleStyle: {
    fontSize: moderateScale(18),
    width: '89%',
    marginBottom: HEIGHT * 0.009,
    alignSelf: 'center',
  },
  textInputStyle: {
    paddingLeft: 15,
    color: colors.black,
    fontSize: moderateScale(14),
    flex: 1,
    fontFamily: Fonts.Medium,
  },
  iconStyle: {
    height: 25,
    width: 25,
    marginLeft: 12,
  },
  RightIconStyle: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
});

export default styles;
