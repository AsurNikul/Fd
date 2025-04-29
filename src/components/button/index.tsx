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

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const animScale = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animScale.value}],
    };
  }, []);

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
          backgroundColor: backgroundColor ? backgroundColor : colors.black,
          height: finalHeight,
          width: finalWidth,
          borderRadius: finalSize,
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
