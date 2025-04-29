import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {CustomSvgProps} from '../../utils';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme';

const BackSVG: FC<CustomSvgProps> = props => {
  const {size, height, width, color} = props;
  const resolvedHeight = height ?? 28;
  const resolvedWidth = width ?? 28;
  return (
    <Svg
      width={moderateScale(size ?? resolvedWidth)}
      height={moderateScale(size ?? resolvedHeight)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M7.373 12.75l5.17 5.17a.705.705 0 01.22.521.744.744 0 01-.236.532.784.784 0 01-.527.225.7.7 0 01-.527-.225l-6.34-6.34A.828.828 0 014.877 12a.827.827 0 01.256-.633l6.34-6.34a.715.715 0 01.514-.212.749.749 0 01.54.212.735.735 0 01.232.535c0 .2-.077.38-.232.534L7.373 11.25H18.75c.213 0 .391.072.535.216A.725.725 0 0119.5 12a.726.726 0 01-.215.535.726.726 0 01-.535.215H7.373z"
        fill={color || colors.black}
      />
    </Svg>
  );
};

export default BackSVG;
