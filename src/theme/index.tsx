import {StyleSheet} from 'react-native';
import flex from './flex';
import margin from './margin';
import padding from './padding';
import commonStyle from './commonStyle';
import colors from './colors';
import {HEIGHT, WIDTH} from './commonStyle';

// Combine All Styles Here
const commonStyles = StyleSheet.create({
  ...flex,
  ...margin,
  ...padding,
  ...commonStyle,
});
export {colors, commonStyles, HEIGHT, WIDTH};
