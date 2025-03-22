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
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import {Dropdown} from 'react-native-element-dropdown';

import styles from './styles';
import Typography from '../Typography';
import {moderateScale} from 'react-native-size-matters';
import {colors, commonStyles} from '../../theme';

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

  const renderLabel = () => {
    if (isFocus) {
      return (
        <Text
          style={[
            {
              color: colors.inputText,
              position: 'absolute',
              backgroundColor: colors.primary,
              left: 10,
              top: -10,
              zIndex: 999,
              paddingHorizontal: 8,
              fontSize: 14,
            },
          ]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View
      style={[
        {
          marginTop: moderateScale(13),
        },
        mainContainerSty,
      ]}>
      {renderLabel()}

      <View
        style={[
          styles.dropdown,
          {borderColor: colors.inputBorder},
          commonStyles.rowCenter2,
        ]}>
        <Dropdown
          style={[styles.subDropdown]}
          placeholderStyle={styles.placeholderStyle}
          labelField={'label'}
          valueField={'value'}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemTextStyle={styles.itemTextStyle}
          itemContainerStyle={styles.itemContainerStyle}
          activeColor={colors.primary}
          // activeColor={colors.primaryDark}
          onFocus={() => setIsFocus(true)}
          placeholderStyle={{color: colors.inputBorder}}
          onBlur={() => {
            setIsFocus(false);
          }}
          {...DropProps}
        />
      </View>
    </View>
  );
};

export default CustomDrop;
