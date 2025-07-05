import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, commonStyles} from '../../../theme';

const styles = StyleSheet.create({
  dateContainer: {
    width: '85%',
    borderBottomColor: colors.primary,
    borderBottomWidth: moderateScale(0.8),
    paddingBottom: moderateScale(15),
    paddingHorizontal: moderateScale(5),
    ...commonStyles.rowCenter,
    ...commonStyles.mt30,
    alignSelf: 'center',
  },
});
export default styles;
