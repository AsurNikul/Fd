import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface TopBarProps {
  data: any;
  containerStyle?: ViewStyle;
  selectedItemContainerStyle?: ViewStyle;
  itemContainerStyle?: ViewStyle;
  selectedTxtStyle?: TextStyle;
  txtStyle?: TextStyle;
  onTabPress?: (item: any, index: number) => void;
  itemWidth: number;
  tabBarBackground?: string;
  tabBarActiveItemColor?: string;
  tabBarInactiveItemColor?: string;
  tabBatActiveTxtColor?: string;
  tabBatInactiveTxtColor?: string;
  mainScrollContainerStyle?: ViewStyle;
}
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const TopBar = (props: TopBarProps) => {
  const {
    data,
    containerStyle,
    selectedItemContainerStyle,
    itemContainerStyle,
    selectedTxtStyle,
    txtStyle,
    onTabPress,
    itemWidth,
    tabBarBackground,
    tabBarActiveItemColor,
    tabBarInactiveItemColor,
    tabBatActiveTxtColor,
    tabBatInactiveTxtColor,
    mainScrollContainerStyle,
  } = props;

  let ITEM_WIDTH = itemWidth;

  const translateX = useSharedValue(0);
  const [currentInd, setCurrentInd] = useState(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  }, []);

  const handleOnPress = (item: any, index: number) => {
    // Animated.timing(translateX.current, {
    //   toValue: ITEM_WIDTH * index,
    //   duration: 500,
    //   useNativeDriver: true,
    // }).start();
    translateX.value = withTiming(ITEM_WIDTH * index, {duration: 500});
    setCurrentInd(index);
    if (!!onTabPress) {
      onTabPress(item, index);
    }
  };
  return (
    <ScrollView
      horizontal
      contentContainerStyle={[
        {
          height: HEIGHT / 9,
          justifyContent: 'center',
          alignItems: 'center',
        },
        mainScrollContainerStyle,
      ]}
      showsHorizontalScrollIndicator={false}>
      <View
        style={[
          styles.mainContainer,
          containerStyle,
          {
            backgroundColor: tabBarBackground ? tabBarBackground : '#f1f1f1f1',
          },
        ]}>
        <Animated.View
          style={[
            styles.selectedItemContainer,
            selectedItemContainerStyle,
            {
              backgroundColor: tabBarActiveItemColor
                ? tabBarActiveItemColor
                : '#ffff',
              width: ITEM_WIDTH,

              zIndex: 0,
            },
            rStyle,
          ]}
        />
        {data.map((item: any, ind: number) => {
          let isCurrent = currentInd === ind;
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => handleOnPress(item, ind)}
              key={ind}
              style={[
                styles.itemContainer,
                itemContainerStyle,
                {
                  width: ITEM_WIDTH,
                  backgroundColor: isCurrent
                    ? 'transparent'
                    : tabBarInactiveItemColor
                    ? tabBarInactiveItemColor
                    : '#f1f1f1',
                  marginLeft: isCurrent ? 2 : 0,
                },
              ]}>
              <Text
                style={[
                  isCurrent
                    ? {
                        ...styles.selectedTxtStyle,
                        color: tabBatActiveTxtColor
                          ? tabBatActiveTxtColor
                          : 'black',
                        ...selectedTxtStyle,
                      }
                    : {
                        ...styles.txtStyle,
                        color: tabBatInactiveTxtColor
                          ? tabBatInactiveTxtColor
                          : 'black',
                        ...txtStyle,
                      },
                ]}>
                {item?.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEIGHT * 0.07,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  selectedItemContainer: {
    height: HEIGHT * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    position: 'absolute',
    left: 5,
    zIndex: 0,
  },
  itemContainer: {
    height: HEIGHT * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    zIndex: 1,
  },
  txtStyle: {
    zIndex: 1,
    color: 'black',
    fontSize: HEIGHT / 38,
  },
  selectedTxtStyle: {
    zIndex: 1,
    color: 'black',
    fontSize: HEIGHT / 38,
  },
});
