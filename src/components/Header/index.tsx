import {
  Image,
  ImageSourcePropType,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode, memo} from 'react';
import Typography from '../Typography';

import styles from './styles';
import Icon from '../VectorIcon';
import {colors, commonStyles} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {goBack, showPopupWithOkAndCancel} from '../../utils';
import {useDispatch} from 'react-redux';
import {setAuthDetails} from '../../redux';

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
  isLogout?: boolean;
  onLeftPress?: () => void;
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
  isLogout,
  onLeftPress,
}) => {
  const dispatch = useDispatch();
  const handleLeft = () => {
    if (isLogout) {
      const body = {
        username: '',
        password: '',
        isAuthenticated: false,
      };
      showPopupWithOkAndCancel(
        'Logout',
        'Are you sure you want to logout ?',
        () => {
          dispatch(setAuthDetails(body));
        },
      );
    }
    goBack();
  };
  const inset = useSafeAreaInsets();
  return (
    <>
      <View
        style={[
          styles.mainContainer,
          mainContainer,
          {
            paddingTop: inset.top + moderateScale(8),
            backgroundColor: bgClr ? bgClr : colors.white,
          },
        ]}>
        {showBack ? (
          <TouchableOpacity
            style={[styles.smallContainer, leftSty]}
            onPress={handleLeft}
            hitSlop={20}>
            <Icon
              name={isLogout ? 'logout' : 'chevron-back'}
              icon={isLogout ? 'MaterialIcons' : 'Ionicons'}
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
      <View style={[commonStyles.lightShadow, commonStyles.borderBottom]} />
    </>
  );
};

export default memo(Header);
