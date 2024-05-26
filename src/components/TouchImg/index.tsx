import {
  ActivityIndicator,
  Image,
  ImageProps,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors, commonSty} from '../../theme';

interface TouchImgPrp extends TouchableOpacityProps {
  ImgStyle?: StyleProp<ImageStyle>;
  ImgSource: ImageSourcePropType;
  resizeMode?: ImageResizeMode | undefined;
  size?: number;
  loading?: boolean;
}

const TouchableImg = (props: TouchImgPrp) => {
  const {ImgStyle, style, ImgSource, resizeMode, loading, size, ...rest} =
    props;
  return (
    <TouchableOpacity {...props} activeOpacity={0.5}>
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <Image
          source={ImgSource}
          resizeMode={resizeMode ? resizeMode : 'contain'}
          style={[
            {
              height: 23,
              width: 23,
            },
            ImgStyle,
            size ? commonSty.size(size) : null,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default TouchableImg;

const styles = StyleSheet.create({});
