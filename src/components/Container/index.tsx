import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import {isIOS} from '../../utils';
import styles from './styles';
import {commonStyles} from '../../theme';
import {verticalScale} from 'react-native-size-matters';

import {ReactNode} from 'react';
import {ScrollViewProps, StyleProp, ViewProps, ViewStyle} from 'react-native';
import Header, {HeaderProps} from '../Header';

export interface ContainerProps
  extends ViewProps,
    ScrollViewProps,
    HeaderProps {
  children: ReactNode;
  isScroll?: boolean;
  isAvoidKeyboard?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  center?: boolean;
}

export interface areaProps {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const Container: FC<ContainerProps> = props => {
  const {
    children,
    containerStyle,
    isScroll,
    isAvoidKeyboard,
    center,
    ...restProps
  } = props;
  if (isScroll) {
    return (
      <>
        <Header {...restProps} />
        <ScrollView
          contentContainerStyle={[styles.main, containerStyle]}
          showsVerticalScrollIndicator={false}
          {...restProps}>
          {children}
        </ScrollView>
      </>
    );
  }

  if (isAvoidKeyboard) {
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={isIOS ? 'padding' : 'height'}
      keyboardVerticalOffset={isIOS ? 0 : verticalScale(-30)}>
      <Header {...restProps} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={containerStyle}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>;
  }

  return (
    <View
      style={[containerStyle, styles.main, center && commonStyles.center]}
      {...restProps}>
      <Header {...restProps} />
      {children}
    </View>
  );
};

export default Container;
