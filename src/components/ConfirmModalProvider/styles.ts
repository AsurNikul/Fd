import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.modalBg,
  },
  modalContent: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    alignItems: 'center',
  },
  body: {
    marginBottom: moderateScale(20),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
});

export default styles;
