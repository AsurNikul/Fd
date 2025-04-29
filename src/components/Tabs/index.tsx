import {Pressable, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {colors, WIDTH} from '../../theme';
import {Typography} from '../../components';
import {itemProp, TabBarProps} from './types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

export const TAB_WIDTH = WIDTH / 3.5;

const TabBar: FC<TabBarProps> = props => {
  const {data, selectedTab, setSelectedTab} = props;
  const translateX = useSharedValue<number>(0);
  const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);
  const animatedTabStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });
  const handleTabPress = (item: itemProp, index: number) => {
    translateX.value = withTiming(Math.floor(index * TAB_WIDTH), {
      duration: 500,
    });
    setSelectedTab(item);
  };
  return (
    <ScrollView
      contentContainerStyle={styles.mainTabContainer}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <TouchableAnimated
        style={[styles.selectedTabContainer, animatedTabStyle]}
      />
      {data?.map((item, index) => {
        const isSelected = selectedTab?.id === item?.id;
        return (
          <Pressable
            style={styles.tabContainer}
            onPress={() => handleTabPress(item, index)}
            key={index}>
            <Typography
              title={item.title}
              size={14}
              color={isSelected ? colors.white : colors.black}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default TabBar;
