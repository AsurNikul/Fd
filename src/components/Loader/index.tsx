import {ActivityIndicator, ModalProps, Modal, View} from 'react-native';
import React, {FC} from 'react';
import {colors, commonStyles} from '../../theme';

interface loaderPrp extends ModalProps {}

const Loader: FC<loaderPrp> = props => {
  return (
    <Modal {...props} transparent={true} statusBarTranslucent>
      <View style={commonStyles.modalContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </Modal>
  );
};

export default Loader;
