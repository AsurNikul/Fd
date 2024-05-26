import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode, memo} from 'react';
import Typography from '../Typo';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from '../VectorIcon';
import {colors, commonSty} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface headerProp {
  mainContainer?: ViewStyle;
  leftSty?: ViewStyle;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftImgSrc?: ImageSourcePropType;
  rightImgSrc?: ImageSourcePropType;
  title?: string;
  txtSty?: TextStyle;
  imgSty?: ImageStyle;
  left?: boolean;
  tintColor?: string;
  renderLeft?: ReactNode;
  bgClr?: string;
}

const Header: React.FC<headerProp> = ({
  mainContainer,
  leftSty,
  onLeftPress,
  onRightPress,
  rightImgSrc,
  leftImgSrc,
  txtSty,
  imgSty,
  title,
  left,
  tintColor,
  renderLeft,
  bgClr,
}) => {
  // const navigation = useNavigation();
  const handleLeft = () => {};
  //  navigation.goBack();
  const inset = useSafeAreaInsets();
  return (
    <>
      <View
        style={[
          styles.mainContainer,
          mainContainer,
          {
            paddingTop: inset.top + moderateScale(2),
            backgroundColor: bgClr ? bgClr : colors.white,
          },
        ]}>
        <TouchableOpacity
          style={[styles.smallContainer, leftSty]}
          onPress={onLeftPress || handleLeft}
          hitSlop={20}>
          {/* <Image
            source={leftImgSrc! || (left ? images.back : null)}
            style={[styles.img, imgSty]}
            resizeMode="contain"
          /> */}
          <Icon name="chevron-back" icon="Ionicons" size={moderateScale(25)} />
        </TouchableOpacity>
        <View style={styles.bigContainer}>
          <Typography
            title={title}
            txtStyle={[styles.txt, txtSty ? txtSty : {}]}
          />
        </View>
        {!!renderLeft && renderLeft}
      </View>
      <View style={[commonSty.lightShadow, commonSty.borderBottom]} />
    </>
  );
};

export default memo(Header);
