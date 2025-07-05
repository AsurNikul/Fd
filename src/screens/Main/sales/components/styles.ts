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
  cardHeaderContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: moderateScale(15),
    borderTopLeftRadius: moderateScale(12),
    borderTopRightRadius: moderateScale(12),
  },
  rawContainer: {
    backgroundColor: colors.lightWhite,
    width: '95%',
    borderRadius: moderateScale(10),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    marginLeft: moderateScale(5),
    alignSelf: 'center',
  },
  startTime: {
    backgroundColor: colors.primary,
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  endTime: {
    backgroundColor: 'green',
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  border: {
    borderColor: colors.quillGrey,
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: moderateScale(15),
  },
  fullBorder: {
    borderColor: colors.quillGrey,
    borderWidth: StyleSheet.hairlineWidth,
    width: '100%',
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
  modalSubContainer: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: ms(6),
    paddingTop: ms(10),
    borderColor: colors.quillGrey,
    borderWidth: StyleSheet.hairlineWidth,
  },
  headerContainer: {
    ...commonStyles.rowSpaceBetween,
    ...commonStyles.ph20,
    borderBlockColor: colors.quillGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: vs(10),
    paddingTop: vs(5),
  },
  dateContainer: {
    backgroundColor: colors.midWhite,
    height: vs(40),
    width: '90%',
    alignSelf: 'center',
    borderColor: colors.charcoalGrey,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: ms(6),
    ...commonStyles.rowCenter,
    ...commonStyles.ph15,
  },
});

export default styles;
