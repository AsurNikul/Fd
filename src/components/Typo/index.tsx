import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

import {Fonts} from '../../constants';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme';

interface Txt extends TextProps {
  txtStyle?: TextStyle | TextStyle[];
  title?: string | number | any;
  size?: number;
  color?: string;
  font?: string;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  align?: 'auto' | 'center' | 'left' | 'right' | 'justify';
  lh?: number;
}

const Typography: React.FC<Txt> = props => {
  const {txtStyle, title, color, size, font, mt, ml, mr, mb, align, lh} = props;

  return (
    <Text
      style={[
        {
          fontSize: size ? moderateScale(size) : moderateScale(18),
          color: color ? color : colors.black,
          marginTop: mt ? moderateScale(mt) : 0,
          marginLeft: ml ? moderateScale(ml) : 0,
          marginRight: mr ? moderateScale(mr) : 0,
          marginBottom: mb ? moderateScale(mb) : 0,
          lineHeight: lh ? moderateScale(lh) : 0,
          fontFamily: font ? font : Fonts.Medium,
          textAlign: align ? align : 'auto',
        },
        txtStyle,
      ]}
      {...props}>
      {title}
    </Text>
  );
};

export default Typography;
