import React, {FunctionComponent, useEffect} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import styles from './styles';
import Typography from '../Typo';
import {colors} from '../../theme';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSequence,
//   withSpring,
// } from 'react-native-reanimated';
import {HEIGHT, WIDTH} from '../../theme/commSty';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withClamp,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface btnProps extends TouchableOpacityProps {
  btnStyle?: StyleProp<any>;
  title?: string;
  btnTextStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  txtSize?: number;
  txtClr?: string;
  backgroundColor?: string;
  loading?: boolean;
  mr?: number;
  height?: number;
  width?: number;
  PressBounceEffect?: boolean;
  borderRadius?: number;
}

const PrimaryBtn: FunctionComponent<btnProps> = (
  {
    btnStyle,
    title,
    btnTextStyle,
    onPress,
    txtClr,
    backgroundColor,
    loading,
    height,
    width,
    PressBounceEffect = true,
    borderRadius,
  },
  Props,
) => {
  console.log(loading, 'loading');

  const finalHeight = height ? height : Math.floor(HEIGHT / 17);
  const finalWidth = width ? width : Math.floor(WIDTH / 1.15);
  const finalSize = borderRadius
    ? borderRadius
    : Math.min(finalHeight, finalWidth) / 5;
  const finalRadius = borderRadius ? borderRadius : finalSize;
  const animDuration = {
    duration: 350,
  };

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const animHeight = useSharedValue(finalHeight);
  const animWidth = useSharedValue(finalWidth);
  const animRadius = useSharedValue(finalRadius);
  const animScale = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => {
    return {
      height: animHeight.value,
      width: animWidth.value,
      borderRadius: animRadius.value,
      transform: [{scale: animScale.value}],
    };
  }, []);

  useEffect(() => {
    if (loading) {
      animHeight.value = withTiming(finalHeight, animDuration);
      animWidth.value = withTiming(finalWidth / 6, animDuration);
      animRadius.value = withTiming(
        Math.min(finalHeight, finalWidth / 6) / 2,
        animDuration,
      );
    } else {
      animHeight.value = withTiming(finalHeight, animDuration);
      animWidth.value = withTiming(finalWidth, animDuration);
      animRadius.value = withTiming(finalRadius, animDuration);
    }
  }, [loading]);

  const handlePress = (e: GestureResponderEvent) => {
    if (PressBounceEffect) {
      animScale.value = withSequence(withTiming(0.97), withTiming(1));
    }
    if (!!onPress) {
      onPress(e);
    }
  };

  return (
    <AnimatedTouchable
      activeOpacity={0.6}
      style={[
        {
          backgroundColor: !!backgroundColor ? backgroundColor : colors.primary,
        },
        styles.btnStyle,
        btnStyle,
        rStyle,
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
    </AnimatedTouchable>
  );
};

export default PrimaryBtn;
