import {StyleSheet} from 'react-native';
import {
  moderateScale,
  ms,
  scale,
  verticalScale,
  vs,
} from 'react-native-size-matters';
import {colors, commonStyles} from '../../../../theme';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    width: '100%',
    borderRadius: moderateScale(12),
    gap: moderateScale(10),
    ...commonStyles.lightShadow,
    ...commonStyles.mt20,
    borderColor: colors.quillGrey,
    borderWidth: StyleSheet.hairlineWidth,
  },
  rawContainer: {
    backgroundColor: '#F5F5F5', // Light gray background as in the image
    width: '95%',
    borderRadius: moderateScale(10),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(5),
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  dateContainer: {
    backgroundColor: colors.midWhite,
    height: vs(40),
    width: '90%',
    alignSelf: 'center',
    borderColor: colors.charcoalGrey,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: ms(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    // marginTop: moderateScale(10),
  },
  footerContainer: {
    ...commonStyles.rowSpaceBetween,
    height: verticalScale(40),
    marginTop: verticalScale(-8),
  },
  footerSubContainer: {
    ...commonStyles.rowCenter,
    width: '45%',
    ...commonStyles.center,
  },
  footerBorder: {
    backgroundColor: colors.quillGrey,
    height: verticalScale(40),
    width: scale(1),
  },
});

export default styles;
