import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, commonSty} from '../../../../theme';
import {WIDTH} from '../../../../theme/commSty';

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.silver,
    borderRadius: moderateScale(10),
    marginRight: moderateScale(10),
    height: moderateScale(310),
    ...commonSty.mt15,
    ...commonSty.p10,
    backgroundColor: colors.white,
    width: WIDTH / 2.2,
  },
  imageStyle: {
    height: moderateScale(110),
    width: moderateScale(145),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(6),
  },
  addToCartContainer: {
    backgroundColor: colors.navyBlue,
    borderRadius: moderateScale(6),
    ...commonSty.rowCenter,
    ...commonSty.mb5,
    ...commonSty.mt10,
    ...commonSty.ph10,
    paddingVertical: moderateScale(8),
  },
  plusStyle: {
    ...commonSty.size(13),
    tintColor: colors.white,
  },
  addTxtStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.white,
    width: '100%',
  },
  minusStyle: {
    ...commonSty.size(16),
    tintColor: colors.white,
  },
});

export default styles;
