import {
  Image,
  ImageSourcePropType,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode, memo} from 'react';
import Typography from '../Typo';

import styles from './styles';
import Icon from '../VectorIcon';
import {colors, commonSty} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {goBack} from '../../utils/NavigationServices';

interface headerProp {
  mainContainer?: ViewStyle;
  leftSty?: ViewStyle;
  onRightPress?: () => void;
  leftImgSrc?: ImageSourcePropType;
  rightImgSrc?: ImageSourcePropType;
  title?: string;
  txtSty?: TextStyle;
  left?: boolean;
  tintColor?: string;
  renderLeft?: ReactNode;
  bgClr?: string;
  showBack?: boolean;
  rightIcon?: ImageSourcePropType;
  productData?: Array<any>;
}

const Header: React.FC<headerProp> = ({
  mainContainer,
  leftSty,
  txtSty,
  title,
  rightIcon,
  bgClr,
  showBack,
  onRightPress,
  productData,
}) => {
  const handleLeft = () => {
    console.log('go back');
    goBack();
  };
  const inset = useSafeAreaInsets();
  console.log(productData?.length, 'this is length');
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
        {showBack ? (
          <TouchableOpacity
            style={[styles.smallContainer, leftSty]}
            onPress={handleLeft}
            hitSlop={20}>
            <Icon
              name="chevron-back"
              icon="Ionicons"
              size={moderateScale(25)}
              onPress={handleLeft}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.smallContainer} />
        )}
        <View style={styles.bigContainer}>
          <Typography
            title={title}
            txtStyle={[styles.txt, txtSty ? txtSty : {}]}
          />
        </View>
        {rightIcon ? (
          <TouchableOpacity
            style={[styles.smallContainer, leftSty]}
            onPress={onRightPress}
            hitSlop={20}>
            <Image
              resizeMode="contain"
              source={rightIcon}
              style={styles.rightIcon}
            />
            {productData?.length > 0 && (
              <View style={styles.countContainer}>
                <Typography
                  title={productData?.length}
                  color={colors.white}
                  size={11}
                />
              </View>
            )}
          </TouchableOpacity>
        ) : (
          <View style={styles.smallContainer} />
        )}
      </View>
      <View style={[commonSty.lightShadow, commonSty.borderBottom]} />
    </>
  );
};

export default memo(Header);
