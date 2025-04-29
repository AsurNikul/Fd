import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  DeviceEventEmitter,
} from 'react-native';
import {Images} from '../../constants';
import {colors, commonStyles} from '../../theme';
import Typography from '../Typography';
import {moderateScale} from 'react-native-size-matters';

const SHOW_GLOBAL_MODAL = 'show_global_modal';
const HIDE_GLOBAL_MODAL = 'hide_global_modal';

export function showGlobalModal(prop) {
  DeviceEventEmitter.emit(SHOW_GLOBAL_MODAL, prop);
}

export function hideGlobalModal(key?: any) {
  DeviceEventEmitter.emit(HIDE_GLOBAL_MODAL, key);
}

const CustomModal = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState(false);
  const [modalProps, setModalProps] = useState<any>({
    message: '',
  });


  useEffect(() => {
    const showSub = DeviceEventEmitter.addListener(SHOW_GLOBAL_MODAL, prop => {
      setIsVisible(true);
      setMessage(prop?.message);
      setTitle(prop?.title);
      setModalProps(prop);
    });
    const hideSub = DeviceEventEmitter.addListener(HIDE_GLOBAL_MODAL, key => {
      setIsVisible(false);
    });
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const onModalHide = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      setModalVisible(true);
    } else {
      onModalHide();
    }
  }, [isVisible]);

  const handleMainClose = e => {
    hideGlobalModal();
    if (!!modalProps?.onOkayClicked) {
      modalProps?.onOkayClicked();
    }
  };

  const handleCancelClicked = () => {
    hideGlobalModal();
    if (!!modalProps?.onCancelClicked) {
      modalProps?.onCancelClicked();
    }
  };
  const handleExitClick = () => {
    hideGlobalModal();
    if (!!modalProps?.onExitClicked) {
      modalProps?.onExitClicked();
    }
  };

  return (
    <Modal
      visible={modalVisible}
      transparent
      onRequestClose={hideGlobalModal}
      style={{zIndex: 99999}}>
      <View style={localStyles.container}>
        <View style={localStyles.modal}>
          <View style={[commonStyles.rowStart]}>
            <Typography
              color={colors.black}
              title={modalProps?.title || 'Test App'}
              size={20}
            />
          </View>
          <Typography
            color={colors.charcoalGrey}
            txtStyle={localStyles.message}
            align={'left'}
            title={modalProps?.message}
          />

          {!!modalProps.showCancel ? (
            <View style={[commonStyles.rowEnd]}>
              <TouchableOpacity
                style={[localStyles.button, commonStyles.mr30]}
                onPress={handleCancelClicked}>
                <Typography
                  color={colors.black}
                  align={'right'}
                  title={'Cancel'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[localStyles.button]}
                onPress={handleMainClose}>
                <Typography
                  color={colors.black}
                  align={'right'}
                  title={'Okay'}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={[localStyles.button]}
              onPress={handleMainClose}>
              <Typography color={colors.black} align={'right'} title={'Okay'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    elevation: 5,
    ...commonStyles.pv25,
    ...commonStyles.ph20,
    width: '85%',
  },
  message: {
    marginVertical: moderateScale(14),
    ...commonStyles.pv15,
    ...commonStyles.ml10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...commonStyles.mt20,
  },
  button: {},
  cancelButton: {
    borderColor: colors.charcoalGrey,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
});

export default CustomModal;
