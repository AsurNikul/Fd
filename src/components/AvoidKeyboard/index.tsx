import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewComponent,
  KeyboardAvoidingViewProps,
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {isIOS} from '../../../src/utils';

interface prp extends KeyboardAvoidingViewProps {
  children: ReactNode;
  contentContainerStyle?: ViewStyle;
}

const AvoidKeyBoard: React.FC<prp> = ({children, contentContainerStyle}) => {
  return (
    <KeyboardAvoidingView
      style={{flexGrow: 1}}
      behavior={isIOS ? 'padding' : 'height'}
      keyboardVerticalOffset={isIOS ? 0 : -30}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AvoidKeyBoard;

const styles = StyleSheet.create({});
