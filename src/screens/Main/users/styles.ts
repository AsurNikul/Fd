import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';
import {colors, commonStyles} from '../../../theme';

const styles = StyleSheet.create({
  headerLeftImg: {
    width: '15%',
    alignItems: 'center',
  },
  userListItem: {
    ...commonStyles.rowSpaceBetween,
    width: '96%',
    borderBottomColor: colors.smokyGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: vs(8),
    ...commonStyles.mt15,
    alignSelf: 'center',
  },
});
export default styles;
