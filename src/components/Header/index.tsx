import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, ReactNode, memo} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Typography from '../Typography';
import {colors} from '../../theme';
import {goBack} from '../../utils';
import styles from './styles';
import {BackSVG} from '../../assets/svg';

export interface HeaderProps {
  containerStyle?: StyleProp<ViewStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  rightIcon?: ImageSourcePropType;
  title?: string;
  titleStyle?: TextStyle;
  iconStyle?: ImageStyle;
  leftIcon?: ImageSourcePropType;
  customLeftComponent?: ReactNode;
  backgroundColor?: string;
  showBottomBorder?: boolean;
  showLeftIcon?: boolean;
}

const Header: FC<HeaderProps> = props => {
  const {
    containerStyle,
    leftContainerStyle,
    onLeftPress,
    titleStyle,
    iconStyle,
    title,
    rightIcon,
    backgroundColor,
    onRightPress,
    showBottomBorder,
    showLeftIcon,
  } = props;
  const handleLeftPress = () => goBack();
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={[
          styles.mainContainer,
          containerStyle,
          {
            paddingTop: insets.top + moderateScale(10),
            backgroundColor: backgroundColor || colors.white,
          },
        ]}>
        {showLeftIcon ? (
          <TouchableOpacity
            style={[styles.smallContainer, leftContainerStyle]}
            onPress={onLeftPress || handleLeftPress}
            hitSlop={20}>
            <BackSVG />
          </TouchableOpacity>
        ) : (
          <View style={styles.smallContainer} />
        )}
        <View style={styles.bigContainer}>
          <Typography title={title} txtStyle={[styles.txt, titleStyle || {}]} />
        </View>
        {rightIcon ? (
          <TouchableOpacity
            style={[styles.smallContainer, leftContainerStyle]}
            onPress={onRightPress}
            hitSlop={20}>
            <Image
              source={rightIcon}
              style={[styles.rightImg, iconStyle]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.smallContainer} />
        )}
      </View>
      {showBottomBorder && <View style={styles.headerBorder} />}
    </>
  );
};

export default memo(Header);
