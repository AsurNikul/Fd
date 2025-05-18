import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import React, {FC, memo} from 'react';
import {verticalScale} from 'react-native-size-matters';

import {ReactNode} from 'react';
import {ScrollViewProps, StyleProp, ViewProps, ViewStyle} from 'react-native';
import Header, {HeaderProps} from '../Header';
import styles from './styles';
import {commonStyles} from '../../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIOS} from '../../utils';

export interface ContainerProps
  extends ViewProps,
    ScrollViewProps,
    HeaderProps {
  children: ReactNode;
  isScroll?: boolean;
  isAvoidKeyboard?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  center?: boolean;
  title?: string;
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
    title,
    ...restProps
  } = props;
  const topInset = useSafeAreaInsets().top;

  if (isScroll) {
    return (
      <>
        {title && <Header title={title} {...restProps} />}
        <ScrollView
          contentContainerStyle={[styles.main, containerStyle]}
          showsVerticalScrollIndicator={false}
          bounces={false}
          nestedScrollEnabled
          {...restProps}>
          {children}
        </ScrollView>
      </>
    );
  }

  if (isAvoidKeyboard) {
    return (
      <KeyboardAvoidingView
        style={commonStyles.flex}
        behavior={isIOS ? 'padding' : 'height'}>
        {title && <Header title={title} {...restProps} />}
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            !title && styles.keyboardView,
            containerStyle,
            !title && commonStyles.containerInset(topInset),
          ]}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <View
      style={[
        !containerStyle && title && styles.main,
        center && commonStyles.center,
        !title && commonStyles.containerInset(topInset),
        containerStyle,
      ]}
      {...restProps}>
      {title && <Header title={title} {...restProps} />}
      {children}
    </View>
  );
};

export default memo(Container);
