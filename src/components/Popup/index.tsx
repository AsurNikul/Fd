import {
  BackHandler,
  Modal,
  ModalProps,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode, SetStateAction, useEffect} from 'react';
import {commonSty} from '../../theme';

interface ModalPrp extends ModalProps {
  containerSty?: ViewStyle;
  setState?: SetStateAction<any>;
  children?: ReactNode;
  visible?: boolean;
}

const PopUp = (props: ModalPrp) => {
  const {containerSty, setState, visible, children} = props;

  return (
    <Modal visible={visible} statusBarTranslucent transparent={true}>
      <View style={[commonSty.modalContainer, containerSty]}>{children}</View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({});
