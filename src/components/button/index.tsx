import React, {FC, useEffect} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import styles from './styles';
import Typography from '../Typography';
import {colors} from '../../theme';
import {HEIGHT, WIDTH} from '../../theme';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface ButtonProps extends TouchableOpacityProps {
  buttonContainerStyle?: StyleProp<any>;
  title?: string;
  buttonTextStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  textSize?: number;
  textColor?: string;
  backgroundColor?: string;
  loading?: boolean;
  marginRight?: number;
  height?: number;
  width?: number;
  enablePressBounceEffect?: boolean;
  borderRadius?: number;
}

const Button: FC<ButtonProps> = props => {
  const {
    buttonContainerStyle,
    title,
    buttonTextStyle,
    onPress,
    textColor,
    backgroundColor,
    loading,
    height,
    width,
    enablePressBounceEffect = true,
    borderRadius,
  } = props;

  const finalHeight = height ? height : Math.floor(HEIGHT / 17);
  const finalWidth = width ? width : Math.floor(WIDTH / 1.15);
  const finalSize = borderRadius
    ? borderRadius
    : Math.min(finalHeight, finalWidth) / 5;
  const finalRadius = borderRadius ? borderRadius : finalSize;

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
      animHeight.value = withTiming(finalHeight);
      animWidth.value = withTiming(finalWidth / 6);
      animRadius.value = withTiming(Math.min(finalHeight, finalWidth / 6) / 2);
    } else {
      animHeight.value = withTiming(finalHeight);
      animWidth.value = withTiming(finalWidth);
      animRadius.value = withTiming(finalRadius);
    }
  }, [
    loading,
    animHeight,
    animRadius,
    animWidth,
    finalHeight,
    finalRadius,
    finalWidth,
  ]);

  const handlePress = (e: GestureResponderEvent) => {
    if (enablePressBounceEffect) {
      animScale.value = withSequence(withTiming(0.97), withTiming(1));
    }
    if (onPress) {
      onPress(e);
    }
  };

  return (
    <AnimatedTouchable
      activeOpacity={0.6}
      style={[
        {
          backgroundColor: backgroundColor ? backgroundColor : colors.navyBlue,
        },
        styles.buttonContainerStyle,
        buttonContainerStyle,
        rStyle,
      ]}
      {...props}
      onPress={handlePress}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <Typography
          color={textColor ? textColor : colors.white}
          style={[styles.buttonTextStyle, buttonTextStyle]}
          title={title}
          size={18}
        />
      )}
    </AnimatedTouchable>
  );
};

export default Button;
