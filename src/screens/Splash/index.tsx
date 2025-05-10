import {StatusBar, View} from 'react-native';
import React, {useEffect} from 'react';
import {Container} from '../../components/All';
import {Images} from '../../constants';
import {colors, commonStyles} from '../../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {verticalScale} from 'react-native-size-matters';

const Splash = () => {
  const inset = useSafeAreaInsets().top;
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      opacity: opacity.value,
    };
  });
  useEffect(() => {
    scale.value = withTiming(1, {duration: 2000});
    opacity.value = withTiming(1, {duration: 2000});
  }, [scale, opacity]);

  const dynamicStyle = {
    marginBottom: inset + verticalScale(10),
  };
  return (
    <Container center>
      <StatusBar translucent backgroundColor={colors.transparent} />
      <View style={dynamicStyle}>
        <Animated.Image
          resizeMode={'contain'}
          source={Images.logo}
          style={[commonStyles.size(230), animatedStyle]}
        />
      </View>
    </Container>
  );
};

export default Splash;
