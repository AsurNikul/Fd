import {moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../constants';

const styles = StyleSheet.create({
  buttonContainerStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonTextStyle: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.SemiBold,
    textAlign: 'center',
    color: '#ffff',
  },
});

export default styles;
