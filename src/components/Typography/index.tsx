import React, {FC} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme';
import {Fonts} from '../../constants';

interface TypographyProps extends TextProps {
  txtStyle?: TextStyle | TextStyle[];
  title?: string | number | any;
  size?: number;
  color?: string;
  font?: string;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  mv?: number;
  align?: 'auto' | 'center' | 'left' | 'right' | 'justify';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  children?: React.ReactNode;
}

const Typography: FC<TypographyProps> = props => {
  const {
    txtStyle,
    title,
    color,
    size,
    font,
    mt,
    ml,
    mr,
    mb,
    mv,
    align,
    fontWeight,
    children,
  } = props;

  const dynamicStyles = {
    fontSize: moderateScale(size || 18),
    color: color || colors.black,
    marginTop: mv ? moderateScale(mv) : mt ? moderateScale(mt) : 0,
    marginBottom: mv ? moderateScale(mv) : mb ? moderateScale(mb) : 0,
    marginLeft: ml ? moderateScale(ml) : 0,
    marginRight: mr ? moderateScale(mr) : 0,
    fontFamily: font || Fonts.Medium,
    textAlign: align || 'auto',
    fontWeight: fontWeight || 'normal',
  };

  return (
    <Text style={[dynamicStyles, txtStyle]} allowFontScaling={false} {...props}>
      {title}
      {children}
    </Text>
  );
};

export default Typography;
