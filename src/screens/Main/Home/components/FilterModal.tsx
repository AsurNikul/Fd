import {Modal, ModalProps, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {colors, commonStyles} from '../../../../theme';
import {Typography, VectorIcon} from '../../../../components/All';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

interface FilterModalProps extends ModalProps {
  onApplyPress: (data: any) => void;
}

const FilterModal: FC<FilterModalProps> = props => {
  const {onApplyPress} = props;
  const [type, setType] = useState<string>('');
  const [startDate, setStartDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [endDate, setEndDate] = useState(null);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const showDatePicker = (key?: string) => {
    setType(key);
    setDatePickerVisibility(true);
  };
  const handleConfirm = (date: Date) => {
    if (type === 'start') {
      setStartDate(new Date(date));
    } else {
      setEndDate(new Date(date));
    }
    hideDatePicker();
  };
  const onClearPress = () => {
    setStartDate(null);
    setEndDate(null);
  };
  const handleApply = () => {
    const data = {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    };
    onApplyPress(data);
    setStartDate(null);
    setEndDate(null);
  };
  return (
    <Modal transparent {...props}>
      <View style={commonStyles.modalContainer}>
        <View style={styles.modalSubContainer}>
          <View style={styles.headerContainer}>
            <Typography title={'Filter Batches'} />
            <VectorIcon
              icon="AntDesign"
              name="close"
              color={colors.charcoalGrey}
              onPress={props.onRequestClose}
            />
          </View>
          <View style={[commonStyles.mv20]}>
            <TouchableOpacity
              style={styles.dateContainer}
              onPress={() => showDatePicker('start')}>
              <VectorIcon
                icon="AntDesign"
                name="calendar"
                color={colors.primary}
                size={20}
              />
              <Typography
                title={
                  startDate
                    ? moment(startDate).format('DD/MM/YYYY')
                    : 'Start Date'
                }
                ml={10}
                size={16}
                color={colors.charcoalGrey}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dateContainer, commonStyles.mt15]}
              onPress={() => showDatePicker('end')}>
              <VectorIcon
                icon="AntDesign"
                name="calendar"
                color={colors.primary}
                size={20}
              />
              <Typography
                title={
                  endDate ? moment(endDate).format('DD/MM/YYYY') : 'End Date'
                }
                ml={10}
                size={16}
                color={colors.charcoalGrey}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.fullBorder} />
          <View style={[styles.footerContainer, commonStyles.mt0]}>
            <TouchableOpacity
              style={styles.footerSubContainer}
              activeOpacity={0.7}
              onPress={onClearPress}>
              <Typography
                title={'Clear'}
                size={15}
                color={colors.red}
                ml={15}
              />
            </TouchableOpacity>
            <View style={styles.footerBorder} />
            <TouchableOpacity
              style={styles.footerSubContainer}
              onPress={handleApply}>
              <Typography
                title={'Apply'}
                size={15}
                color={colors.primary}
                mr={15}
              />
            </TouchableOpacity>
          </View>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={'date'}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </Modal>
  );
};

export default FilterModal;
