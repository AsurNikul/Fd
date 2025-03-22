import {StyleSheet} from 'react-native';
import {colors, commonStyles} from '../../theme';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    ...commonStyles.pv20,
  },
  header: {
    height: moderateScale(8),
    width: moderateScale(50),
    backgroundColor: colors.silver,
    borderRadius: moderateScale(20),
    alignSelf: 'center',
  },
});

export default styles;
