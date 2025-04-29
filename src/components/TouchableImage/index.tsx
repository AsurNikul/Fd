import {
  Image,
  ImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {FC} from 'react';

interface TouchImgProps extends TouchableOpacityProps {
  imageSource: ImageProps['source'];
  imageStyle?: ImageProps['style'];
}

const TouchableImage: FC<TouchImgProps> = props => {
  const {imageSource, imageStyle, ...touchableProps} = props;
  return (
    <TouchableOpacity {...touchableProps}>
      <Image source={imageSource} resizeMode="contain" style={imageStyle} />
    </TouchableOpacity>
  );
};

export default TouchableImage;
