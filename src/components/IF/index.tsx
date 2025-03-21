import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  visible: boolean;
};

const If = (props: Props) => {
  const {children, visible} = props;
  return <>{visible ? children : null}</>;
};

export default If;

const styles = StyleSheet.create({});
