import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
// import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
// import {Dropdown} from 'react-native-element-dropdown';

import styles from './styles';
import {FormikProps, FormikValues} from 'formik';
import Typography from '../Typo';
import {colors, commonSty} from '../../theme';
import {moderateScale} from 'react-native-size-matters';

interface DropProps<T> {
  container?: ViewStyle;
  title?: string;
  leftIcon?: ImageSourcePropType;
  formik: FormikProps<any>;
  name: keyof FormikValues;
  titleStyle?: TextStyle;
  errSty?: any;
  country?: boolean;
  value?: any;
}

const DropDown = <T extends any>({
  title,
  container,
  leftIcon,
  formik,
  name,
  titleStyle,
  errSty,
  country,
  value,
  ...DropProps
}: DropProps<T>) => {
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const {handleBlur, handleChange, values, errors, touched} = formik;
  interface MainValueTy {
    label: string;
    value: string;
  }

  const mainValue: MainValueTy = {
    label: name ? values[name] : '',
    value: name ? values[name] : '',
  };
  return (
    <View
      style={{
        marginTop: moderateScale(13),
      }}>
      {title && (
        <View style={{width: '88%', marginLeft: 2, alignSelf: 'center'}}>
          <Typography
            title={title}
            txtStyle={[styles.titleStyle, titleStyle || {}]}
            size={13}
          />
        </View>
      )}
      <View
        style={[
          styles.dropdown,
          {borderColor: isFocus ? colors.primary : 'lightgrey'},
          commonSty.rowCenter2,
        ]}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={[styles.iconStyle]}
            resizeMode="contain"
          />
        )}
        {/* <Dropdown
          style={[
            styles.subDropdown,
            ,
            {
              width: leftIcon ? '93%' : '100%',
              paddingHorizontal: leftIcon
                ? moderateScale(11)
                : moderateScale(3),
            },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.itemTextStyle}
          itemContainerStyle={styles.itemContainerStyle}
          // value={value ? value : (mainValue as T)}
          value={mainValue as T}
          activeColor={colors.border}
          onChangeText={() => handleChange(name)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            handleBlur(name);
            setIsFocus(false);
          }}
          {...DropProps}
        /> */}
      </View>
      {name
        ? errors[name] &&
          touched[name] && (
            <Typography
              title={errors[name] as string}
              txtStyle={[styles.error, errSty]}
            />
          )
        : null}
    </View>
  );
};

export default DropDown;
