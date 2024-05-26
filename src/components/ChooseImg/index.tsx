import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode, forwardRef} from 'react';
import Typography from '../Typo';
import {colors, commonSty} from '../../../src/theme';
import {Fonts} from '../../../src/constants';
import {moderateScale} from 'react-native-size-matters';
import Icon, {IconType} from '../VectorIcon';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';

interface chooseImgProps {
  onCameraPress?: (event: GestureResponderEvent) => void;
  onGalleryPress?: (event: GestureResponderEvent) => void;
  onCanclePress?: (event: GestureResponderEvent) => void;
}

interface SheetProps extends chooseImgProps {
  style?: any;
  children?: ReactNode;
  SheetRef?: ActionSheetRef;
}

const ImagePickerSheet = forwardRef<ActionSheetRef, SheetProps>(
  ({children, style, onCameraPress, onCanclePress, onGalleryPress}, ref) => {
    return (
      <ActionSheet
        containerStyle={{
          ...commonSty.pv20,
          backgroundColor: 'transparent',
        }}
        ref={ref}>
        <ChooseImg onCanclePress={() => ref?.current?.hide()} />
      </ActionSheet>
    );
  },
);

const ChooseImg = (props: chooseImgProps) => {
  const {onCameraPress, onGalleryPress, onCanclePress} = props;
  return (
    <View style={[styles.SelectMainContainer]}>
      <PhotoSelector
        onCameraPress={onCameraPress}
        onGalleryPress={onGalleryPress}
      />
      <SelectBtn
        onPress={onCanclePress}
        title={'Cancle'}
        style={{flexDirection: 'column'}}
        clr={colors.primary}
        size={20}
      />
    </View>
  );
};

export {ChooseImg, ImagePickerSheet};

const styles = StyleSheet.create({
  selectBtnContainer: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    ...commonSty.pv15,
    ...commonSty.mt15,
    ...commonSty.rowCenter,
    ...commonSty.ph20,
  },
  SelectMainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  subBtn: {
    backgroundColor: colors.white,
    ...commonSty.pv15,
    ...commonSty.rowCenter,
    ...commonSty.ph15,
  },
  btmBorder: {
    borderBottomWidth: 0.6,
    borderBottomColor: colors.silver,
  },
  PhotoSelectorContainer: {
    backgroundColor: colors.white,
    marginVertical: 10,
    ...commonSty.pv5,
    ...commonSty.ph10,
    borderRadius: moderateScale(15),
  },
});

const PhotoSelector = (props: chooseImgProps) => {
  const {onCameraPress, onGalleryPress} = props;
  return (
    <View style={styles.PhotoSelectorContainer}>
      <TouchableOpacity
        style={[styles.subBtn, styles.btmBorder]}
        activeOpacity={0.8}
        onPress={onCameraPress}>
        <Icon
          name={'camera'}
          icon={'AntDesign'}
          size={22}
          color={colors.primary}
        />
        <Typography
          title={'Camera'}
          size={18}
          color={colors.primary}
          ml={10}
          font={Fonts.Bold}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.subBtn]}
        activeOpacity={0.8}
        onPress={onGalleryPress}>
        <Icon
          name={'photo'}
          icon={'FontAwesome'}
          size={22}
          color={colors.primary}
        />
        <Typography
          title={'Gallery'}
          size={18}
          color={colors.primary}
          ml={10}
          font={Fonts.Bold}
        />
      </TouchableOpacity>
    </View>
  );
};

interface subBtnPrp {
  onPress?: (e: GestureResponderEvent) => void;
  ImageSrc?: ImageSourcePropType;
  title: string;
  ml?: number;
  name?: string;
  icon?: IconType;
  clr?: string;
  size?: number;
  align?: 'auto' | 'center' | 'left' | 'right' | 'justify';
  style?: any;
}

const SelectBtn = (props: subBtnPrp) => {
  const {
    onPress,
    style: externalStyle,
    title,
    clr,
    size,
    name,
    icon,
    align,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.selectBtnContainer, externalStyle]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={{backgroundColor: 'white', borderRadius: moderateScale(10)}}>
        <Icon name={name} icon={icon} size={22} color={colors.primary} />
        <Typography
          title={title}
          size={size ? size : 18}
          color={clr ? clr : colors.primary}
          ml={10}
          font={Fonts.Bold}
          align={align}
        />
      </View>
    </TouchableOpacity>
  );
};
