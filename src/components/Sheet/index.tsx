import React, {ReactNode, forwardRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {commonSty} from '../../theme';

interface SheetProps {
  style?: any;
  children?: ReactNode;
  SheetRef?: ActionSheetRef;
}

const Sheet = forwardRef<ActionSheetRef, SheetProps>(
  ({children, style}, ref) => {
    return (
      <ActionSheet
        containerStyle={{
          ...commonSty.pv20,
          backgroundColor: 'transparent',
        }}
        ref={ref}>
        {children}
      </ActionSheet>
    );
  },
);

const styles = StyleSheet.create({});

export default Sheet;
