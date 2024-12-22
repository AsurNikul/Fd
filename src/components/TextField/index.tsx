import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {
  Animated,
  GestureResponderEvent,
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  FormikFormProps,
  FormikHandlers,
  FormikHelpers,
  FormikProps,
  FormikValues,
  useFormikContext,
} from 'formik';
import Typography from '../Typo';
import styles from './styles';
import {moderateScale} from 'react-native-size-matters';
import {colors, commonSty} from '../../theme';
import Icon from '../VectorIcon';
import {WIDTH} from '../../theme/commSty';

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
  formik: FormikProps<any>;
  name?: keyof FormikValues;
  mt?: number;
  errSty?: any;
  titleContainer?: ViewStyle;
}

const TextField: FunctionComponent<InputProps> = Props => {
  const {
    mainContainer,
    leftIcon,
    iconStyle,
    inputContainerStyle,
    title,
    titleStyle,
    RightIconStyle,
    textInputStyle,
    isHide,
    name,
    formik,
    mt,
    errSty,
    RightIcon,
    rightIconPress,
    titleContainer,
  } = Props;

  const [pass, setPass] = useState(false);
  const [focus, setFocus] = useState<boolean>(false);

  const {handleBlur, handleChange, values, errors, touched} = formik;
  console.log('🚀 ~ values:', values);

  const handlePass = () => {
    setPass(!pass);
  };

  return (
    <View
      style={[
        {marginTop: mt ? moderateScale(mt) : moderateScale(20)},
        mainContainer,
      ]}>
      {title && focus && (
        <Typography
          title={title}
          txtStyle={[
            {
              color: colors.inputText,
              position: 'absolute',
              backgroundColor: colors.primary,
              left: 25,
              top: -10,
              zIndex: 999,
              paddingHorizontal: 8,
              fontSize: 14,
            },
            titleStyle || {},
          ]}
          size={12}
        />
      )}
      <View
        style={[
          styles.inputContainerStyle,
          inputContainerStyle,
          {
            borderColor: colors.inputBorder,
          },
        ]}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={[styles.iconStyle, iconStyle]}
            resizeMode="contain"
          />
        )}
        <TextInput
          style={[styles.textInputStyle, textInputStyle]}
          secureTextEntry={pass}
          onChangeText={handleChange(name)}
          onBlur={() => {
            handleBlur(name);
            setFocus(false);
          }}
          onFocus={() => setFocus(true)}
          // onBlur={() => setFocus(false)}
          placeholder={title}
          placeholderTextColor={colors.inputText}
          value={name ? values[name] : ''}
          {...Props}
        />
        {isHide && (
          <Icon
            name={pass ? 'eye' : 'eye-off'}
            icon="Ionicons"
            color={colors.white}
            style={[styles.RightIconStyle, RightIconStyle]}
            onPress={handlePass}
          />
        )}
      </View>
      <View>
        {name
          ? errors[name] &&
            touched[name] && (
              <Typography
                title={errors[name] as string}
                txtStyle={[commonSty.error, errSty]}
              />
            )
          : null}
      </View>
    </View>
  );
};

export default TextField;
