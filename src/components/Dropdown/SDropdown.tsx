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
import Typography from '../Typo';
import {moderateScale} from 'react-native-size-matters';
import {colors, commonSty} from '../../theme';

interface DropProps<T> {
  container?: ViewStyle;
  title?: string;
  leftIcon?: ImageSourcePropType;
  titleStyle?: TextStyle;
  titleSize?: number;
  mainContainerSty?: ViewStyle;
}

const CustomDrop = <T extends any>({
  title,
  container,
  leftIcon,
  titleStyle,
  titleSize,
  mainContainerSty,
  ...DropProps
}: DropProps<T>) => {
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  return (
    <View
      style={[
        {
          marginTop: moderateScale(13),
        },
        mainContainerSty,
      ]}>
      {title && (
        <View style={{width: '88%', marginLeft: 2, alignSelf: 'center'}}>
          <Typography
            title={title}
            txtStyle={[styles.titleStyle, titleStyle || {}]}
            size={titleSize ? titleSize : 13}
          />
        </View>
      )}
      <View
        style={[
          styles.dropdown,
          {borderColor: isFocus ? colors.silver : 'lightgrey'},
          commonSty.rowCenter2,
        ]}>
        {/* <Dropdown
          style={[styles.subDropdown]}
          placeholderStyle={styles.placeholderStyle}
          labelField={'label'}
          valueField={'value'}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.itemTextStyle}
          itemContainerStyle={styles.itemContainerStyle}
          // activeColor={colors.primaryDark}
          onFocus={() => setIsFocus(true)}
          onBlur={() => {
            setIsFocus(false);
          }}
          {...DropProps}
        /> */}
      </View>
    </View>
  );
};

export default CustomDrop;
