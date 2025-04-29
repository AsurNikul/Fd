import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, commonStyles} from '../../../../theme';
import {WIDTH} from '../../../../theme/commonStyle';

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.quillGrey,
    borderRadius: moderateScale(10),
    marginRight: moderateScale(10),
    height: moderateScale(310),
    ...commonStyles.mt15,
    ...commonStyles.p10,
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
    backgroundColor: colors.black,
    borderRadius: moderateScale(6),
    ...commonStyles.rowCenter,
    ...commonStyles.mb5,
    ...commonStyles.mt10,
    ...commonStyles.ph10,
    paddingVertical: moderateScale(8),
  },
  plusStyle: {
    ...commonStyles.size(13),
    tintColor: colors.white,
  },
  addTxtStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.white,
    width: '100%',
  },
  minusStyle: {
    ...commonStyles.size(16),
    tintColor: colors.white,
  },
});

export default styles;
