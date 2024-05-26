import {StyleSheet} from 'react-native';
import flex from './flex';
import margin from './margin';
import padding from './padding';
import commonStyle from './commSty';
import colors from './colors';

// Combine All Styles Here
const commonSty = StyleSheet.create({
  ...flex,
  ...margin,
  ...padding,
  ...commonStyle,
});
export {colors, commonSty};
