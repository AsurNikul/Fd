import {Dimensions} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import Fonts from '../constants/fonts';
import colors from './colors';

const size = (num: number) => ({
  width: moderateScale(num),
  height: moderateScale(num),
});
const containerInset = (num: number) => ({
  flex: 1,
  backgroundColor: colors.white,
  paddingTop: verticalScale(num),
  width: WIDTH,
});

const commonStyle = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.421)',
    alignSelf: 'center',
    width: WIDTH,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    flex: 0.95,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenter2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  rowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mediumText: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.Bold,
  },
  size: size as any,
  HW: {
    height: HEIGHT,
    width: WIDTH,
  },
  sheetContainer: {
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingBottom: moderateScale(30),
    paddingVertical: moderateScale(20),
  },
  lightShadow: {
    elevation: 2,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowColor: colors.white,
  },
  borderBottom: {
    borderBottomWidth: moderateScale(0.3),
    width: WIDTH,
  },
  error: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.Medium,
    alignSelf: 'center',
    width: WIDTH / 1.2,
    marginTop: moderateScale(5),
    color: colors.red,
  },
  loaderContainer: {
    flex: 1,
    width: WIDTH,
  },
  containerInset: containerInset as any,
});

export {commonStyle, HEIGHT, WIDTH};
