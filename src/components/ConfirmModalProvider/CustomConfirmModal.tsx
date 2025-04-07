import React, {FC, JSX} from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import Button from '../Button';
import {colors} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import Typography from '../Typography';
import styles from './styles';

interface CustomConfirmModalProps {
  open: boolean;
  message?: string | JSX.Element;
  title?: string | JSX.Element;
  icon?: JSX.Element;
  submitLabel: string;
  cancelLabel?: string;
  secondaryLabel?: string;
  handleCancel?: () => void;
  handleConfirm: () => void;
  handleClose?: () => void;
  handleSecondary?: () => void;
}

const CustomConfirmModal: FC<CustomConfirmModalProps> = props => {
  const {
    open,
    message,
    title,
    icon,
    submitLabel,
    cancelLabel,
    handleCancel,
    handleConfirm,
    handleClose,
  } = props;
  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={handleClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.iconContainer}>
            {icon && icon}
            {title && <Typography title={title} mv={10} />}
          </View>

          <View style={styles.body}>
            {typeof message === 'string' ? (
              <Typography title={message} align="center" size={14} />
            ) : (
              message
            )}
          </View>

          <View style={styles.footer}>
            {cancelLabel && (
              <Button
                onPress={handleCancel}
                backgroundColor="transparent"
                height={moderateScale(40)}
                textColor={colors.navyBlue}
                width={moderateScale(120)}
                borderRadius={moderateScale(4)}
                title={cancelLabel}
              />
            )}
            <Button
              onPress={handleConfirm}
              backgroundColor={colors.navyBlue}
              height={moderateScale(cancelLabel ? 40 : 45)}
              width={moderateScale(cancelLabel ? 120 : 280)}
              title={submitLabel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomConfirmModal;
