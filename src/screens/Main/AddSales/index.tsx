import {TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../../components/Container';
import {
  Button,
  TextField,
  Typography,
  VectorIcon,
} from '../../../components/All';
import {useFormik} from 'formik';
import {
  addBatchSchema,
  apiCall,
  isError,
  replace,
  showPopupWithOk,
} from '../../../utils';
import {colors, commonStyles} from '../../../theme';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {addBatchProps, addSalesProps} from '../../../utils/types';
import {useRoute} from '@react-navigation/native';
import {ADD_BATCH, SALES} from '../../../Services/API';
import {Routes} from '../../../constants';
import {addSalesSchema} from '../../../utils/schema';

const AddSales = () => {
  const batch = useRoute<any>().params?.item;
  console.log('🚀 ~ AddSales ~ batch:', batch);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [field, setField] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (batch) {
      formik.setValues({
        date: batch?.sales_date || '',
        // batchNo: batch?.batchNo || '',
        rmKg: batch?.raw_material || '',
        // sale: batch?.sale || '',
      });
    }
  }, [batch]);
  const formik = useFormik({
    initialValues: {
      date: batch?.date || '',
      rmKg: batch?.rmKg || '',
    },
    validationSchema: addSalesSchema,
    onSubmit: values => handleAddBatchData(values),
  });
  const handleAddBatchData = async (values: addSalesProps) => {
    console.log('🚀 ~ handleAddBatchData ~ values:', values);
    const data = {
      sales_date: moment(values.date).format('YYYY-MM-DD HH:mm:ss'),
      // batchNo: values.batchNo,
      raw_material: values.rmKg,
      // sale: values.sale,
    };
    console.log(data, 'data');
    setLoading(true);
    const url = batch?.id ? `${SALES}/${batch?.id}` : SALES;
    const method = batch?.id ? 'PUT' : 'POST';
    await apiCall(url, method, data)
      .then(res => {
        showPopupWithOk(
          'Success',
          res?.message || 'Sales added successfully',
          () => {
            formik.resetForm();
            replace(Routes.Sales);
          },
        );
      })
      .finally(() => setLoading(false));
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
  const headerTitle = batch?.id ? 'Update Sales' : 'Add Sales';
  const buttonTitle = batch?.id ? 'Update Sales' : 'Add Sales';
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
      {/* <TextField
        formik={formik}
        name={'batchNo'}
        placeholder="Enter Batch Number"
        iconName="hashtag"
        iconType="Fontisto"
        keyboardType="numeric"
      /> */}
      <TextField
        formik={formik}
        name={'rmKg'}
        placeholder="Enter Raw Material (KG)"
        iconName="weight-kilogram"
        iconType="MaterialCommunityIcons"
        keyboardType="numeric"
      />

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
        loading={loading}
        buttonContainerStyle={commonStyles.mt40}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={field === 'date' ? 'date' : 'time'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={values.date ? new Date(values.date) : new Date()}
      />
    </Container>
  );
};

export default AddSales;
