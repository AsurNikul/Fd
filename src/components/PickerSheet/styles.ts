import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, commonStyles} from '../../theme';

const styles = StyleSheet.create({
  pickerItem: {
    backgroundColor: colors.navyBlue,
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(40),
    ...commonStyles.center,
    ...commonStyles.mt20,
  },
  pickerItemContainer: {
    ...commonStyles.center,
    ...commonStyles.ml20,
  },
});

export default styles;
