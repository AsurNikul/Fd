import {StyleSheet} from 'react-native';
import {colors, commonStyles, WIDTH} from '../../theme';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainTabContainer: {
    ...commonStyles.rowSpaceBetween,
    ...commonStyles.selfCenter,
    height: moderateScale(55),
    ...commonStyles.mh15,
    ...commonStyles.pr25,
  },
  selectedTabContainer: {
    height: moderateScale(35),
    width: WIDTH / 3.5,
    borderRadius: moderateScale(20),
    position: 'absolute',
    backgroundColor: colors.black,
  },
  tabContainer: {
    height: moderateScale(35),
    width: WIDTH / 3.5,
    ...commonStyles.center,
  },
  orderCardContainer: {
    width: WIDTH / 1.2,
    height: moderateScale(180),
    ...commonStyles.mt30,
    borderRadius: moderateScale(10),
    ...commonStyles.p20,
    borderColor: colors.charcoalGrey,
    borderWidth: moderateScale(1.5),
    elevation: moderateScale(0.3),
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: colors.white,
  },
});
export default styles;
