import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors, commonStyles} from '../../theme';
import {Fonts} from '../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    paddingBottom: moderateScale(15),
  },
  smallContainer: {
    width: '15%',
    alignItems: 'center',
  },
  bigContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: moderateScale(18),
    width: moderateScale(18),
    marginTop: moderateScale(2),
    tintColor: colors.primary,
  },
  rightImg: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  txt: {
    fontSize: moderateScale(19),
    color: colors.black,
    fontFamily: Fonts.SemiBold,
  },
  headerBorder: {
    backgroundColor: 'white',
    elevation: moderateScale(5),
    shadowOffset: {width: 0, height: moderateScale(3)},
    shadowOpacity: moderateScale(0.2),
    shadowRadius: moderateScale(4),
    shadowColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: moderateScale(0.7),
    borderBottomColor: 'rgba(0,0,0,0.15)',
    width: '100%',
  },
  rightIcon: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  countContainer: {
    position: 'absolute',
    backgroundColor: colors.lightRed,
    height: moderateScale(18),
    width: moderateScale(18),
    borderRadius: moderateScale(8),
    ...commonStyles.center,
    top: moderateScale(10),
    right: moderateScale(10),
  },
});

export default styles;
