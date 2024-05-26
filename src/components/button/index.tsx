import React, {FunctionComponent} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import styles from './styles';
import Typography from '../Typo';
import {colors} from '../../theme';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {hapticOptions} from '../../utils';

interface btnProps extends TouchableOpacityProps {
  btnStyle?: StyleProp<any>;
  title?: string;
  btnTextStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  txtSize?: number;
  txtClr?: string;
  mt?: number;
  mb?: number;
  bgClr?: string;
  loading?: boolean;
  mr?: number;
}

const PrimaryBtn: FunctionComponent<btnProps> = (
  {
    btnStyle,
    title,
    btnTextStyle,
    onPress,
    txtSize,
    txtClr,
    mt,
    mb,
    bgClr,
    loading,
    mr,
  },
  Props,
) => {
  const scale = useSharedValue(0.96);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });
  const handlePress = (e: GestureResponderEvent) => {
    RNReactNativeHapticFeedback.trigger('impactLight', hapticOptions);
    scale.value = withSequence(withSpring(0.96), withSpring(1));
    if (!!onPress) {
      onPress(e);
    }
  };
  return (
    <Animated.View style={rStyle}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          {
            backgroundColor: bgClr ? bgClr : colors.primary,
            marginTop: mt ? mt : 20,
            marginBottom: mb ? mb : 10,
            marginRight: mr ? mr : 0,
          },
          styles.btnStyle,
          btnStyle,
        ]}
        {...Props}
        onPress={handlePress}>
        {loading ? (
          <ActivityIndicator size={'small'} color={colors.white} />
        ) : (
          <Typography
            color={txtClr ? txtClr : colors.white}
            style={[styles.btnTextStyle, btnTextStyle]}
            title={title}
            size={18}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PrimaryBtn;
