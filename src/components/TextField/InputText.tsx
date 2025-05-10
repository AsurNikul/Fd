import React, {FunctionComponent, useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme';
import Icon from '../VectorIcon';

interface InputProps extends TextInputProps {
  mainContainer?: ViewStyle;
  tit?: string;
  titleStyle?: TextStyle;
  title?: string;
  errTitle?: string;
  errors?: string;
  touched?: string;
  RightIconStyle?: ImageStyle;
  RightIconSource?: ImageSourcePropType;
  rightIconPress?: (e: GestureResponderEvent) => void;
  leftIcon?: ImageSourcePropType;
  iconStyle?: ImageStyle;
  inputContainerStyle?: ViewStyle;
  textInputStyle?: StyleProp<ViewStyle>;
  RightIcon?: string;
  isHide?: boolean;
  mt?: number;
  errSty?: any;
  titleContainer?: ViewStyle;
  onChangeText?: any;
}

const TextField: FunctionComponent<InputProps> = props => {
  const {
    mainContainer,
    leftIcon,
    iconStyle,
    inputContainerStyle,
    title,
    titleStyle,
    textInputStyle,
    isHide,
    mt,
    RightIcon,
    rightIconPress,
    titleContainer,
    onChangeText,
  } = props;

  const [pass, setPass] = useState(isHide);
  const [focus, setFocus] = useState<boolean>(false);

  const handlePass = (e: GestureResponderEvent) => {
    if (RightIcon) {
      rightIconPress(e);
    } else {
      setPass(!pass);
    }
  };

  return (
    <View
      style={[
        {marginTop: mt ? moderateScale(mt) : moderateScale(13)},
        mainContainer,
      ]}>
      {title && (
        <View style={[styles.titleStyle, titleContainer]}>
          <Typography
            title={title}
            txtStyle={[styles.titleStyle, titleStyle || {}]}
            size={12}
          />
        </View>
      )}
      <View
        style={[
          styles.inputContainerStyle,
          inputContainerStyle,
          {
            borderColor: focus ? colors.quillGrey : 'lightgrey',
          },
        ]}>
        <TextInput
          style={[styles.textInputStyle, textInputStyle]}
          placeholderTextColor={colors.quillGrey}
          {...props}
        />
        {isHide && (
          <TouchableOpacity onPress={handlePass}>
            <Icon name={pass ? 'eye' : 'eye-off'} icon="Ionicons" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextField;
