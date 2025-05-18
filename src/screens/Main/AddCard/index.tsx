import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../components/Container';
import {
  Button,
  TextField,
  Typography,
  VectorIcon,
} from '../../../components/All';
import {useFormik} from 'formik';
import {addBatchSchema, goBack, isError} from '../../../utils';
import {colors, commonStyles} from '../../../theme';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {addBatchProps} from '../../../utils/types';
import {editBatch, setAddBatchData} from '../../../redux/MainSlice';
import {useRoute} from '@react-navigation/native';

const AddCard = () => {
  const batch = useRoute<any>().params?.item;
  const dispatch = useDispatch();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [field, setField] = useState<string>('');
  const formik = useFormik({
    initialValues: {
      date: batch?.date || '',
      batchNo: batch?.batchNo || '',
      rmKg: batch?.rmKg || '',
      inTime: batch?.inTime || '',
      outTime: batch?.outTime || '',
      // sale: batch?.sale || '',
    },
    validationSchema: addBatchSchema,
    onSubmit: values => handleAddBatchData(values),
  });
  const handleAddBatchData = (values: addBatchProps) => {
    const data: addBatchProps = {
      date: new Date(values.date),
      batchNo: values.batchNo,
      rmKg: values.rmKg,
      inTime: new Date(values.inTime),
      outTime: new Date(values.outTime),
      // sale: values.sale,
    };
    if (batch?.batchNo) {
      dispatch(editBatch(data));
    } else {
      dispatch(setAddBatchData(data));
    }
    console.log(data, 'this is data');
    formik.resetForm();
    goBack();
  };

  const {errors, touched, values} = formik;
  const handleConfirm = (date: Date) => {
    formik.setFieldValue(field, new Date(date));
    hideDatePicker();
  };
  const showDatePicker = (key?: string) => {
    setField(key);
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => setDatePickerVisibility(false);
  const headerTitle = batch?.batchNo ? 'Update Batch' : 'Add Batch';
  const buttonTitle = batch?.batchNo ? 'Update Batch' : 'Add Batch';
  return (
    <Container title={headerTitle} showLeftIcon isAvoidKeyboard>
      <TouchableOpacity
        style={styles.dateContainer}
        onPress={() => showDatePicker('date')}>
        <VectorIcon
          name="calendar"
          icon="Ionicons"
          size={20}
          color={colors.primary}
        />
        <Typography
          title={
            values.date
              ? moment(values.date).format('DD MMM YYYY')
              : 'Select Date'
          }
          ml={10}
          size={14}
        />
      </TouchableOpacity>
      {isError('date', errors, touched) && (
        <Typography title={errors.date} txtStyle={commonStyles.error} />
      )}
      <TextField
        formik={formik}
        name={'batchNo'}
        placeholder="Enter Batch Number"
        iconName="hashtag"
        iconType="Fontisto"
        keyboardType="numeric"
      />
      <TextField
        formik={formik}
        name={'rmKg'}
        placeholder="Enter Raw Material (KG)"
        iconName="weight-kilogram"
        iconType="MaterialCommunityIcons"
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.dateContainer}
        onPress={() => showDatePicker('inTime')}>
        <VectorIcon
          name="time"
          icon="Ionicons"
          size={20}
          color={colors.primary}
        />
        <Typography
          title={
            values.inTime
              ? moment(values.inTime).format('HH:mm')
              : 'Select In Time'
          }
          ml={10}
          size={14}
        />
      </TouchableOpacity>
      {isError('inTime', errors, touched) && (
        <Typography title={errors.inTime} txtStyle={commonStyles.error} />
      )}
      <TouchableOpacity
        style={styles.dateContainer}
        onPress={() => showDatePicker('outTime')}>
        <VectorIcon
          name="time"
          icon="Ionicons"
          size={20}
          color={colors.primary}
        />
        <Typography
          title={
            values.outTime
              ? moment(values.outTime).format('HH:mm')
              : 'Select Out Time'
          }
          ml={10}
          size={14}
        />
      </TouchableOpacity>
      {isError('outTime', errors, touched) && (
        <Typography title={errors.outTime} txtStyle={commonStyles.error} />
      )}
      {/* <TextField
        formik={formik}
        name={'sale'}
        placeholder="Enter Sale"
        iconName="sale"
        iconType="MaterialCommunityIcons"
        keyboardType="numeric"
      /> */}
      <Button
        title={buttonTitle}
        onPress={() => formik.handleSubmit()}
        // onPress={() => dispatch(removeBatches([]))}
        width={moderateScale(190)}
        borderRadius={50}
        buttonContainerStyle={commonStyles.mt40}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={field === 'date' ? 'date' : 'time'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
};

export default AddCard;
