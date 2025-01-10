import {Dimensions} from 'react-native';

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import Fonts from '../constants/fonts';
import colors from './colors';

const size = (num: number) => ({
  width: moderateScale(num),
  height: moderateScale(num),
});

const commonSty = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.421)',
    alignSelf: 'center',
    width: WIDTH,
  },
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
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
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: colors.white,
  },
  borderBottom: {
    borderBottomWidth: 0.3,
    // borderColor: colors.silver,
    width: WIDTH,
  },
  error: {
    color: colors.red,
    fontSize: moderateScale(11),
    fontFamily: Fonts.Medium,
    alignSelf: 'center',
    width: WIDTH / 1.4,
    marginTop: 5,
  },
});

export default commonSty;
