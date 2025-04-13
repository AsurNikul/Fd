import {StyleSheet} from 'react-native';
import flex from './flex';
import margin from './margin';
import padding from './padding';
import {commonStyle, HEIGHT, WIDTH} from './commonStyle';
import colors from './colors';

// Combine All Styles Here
const commonStyles = StyleSheet.create({
  ...flex,
  ...margin,
  ...padding,
  ...commonStyle,
});
export {colors, commonStyles, HEIGHT, WIDTH};
