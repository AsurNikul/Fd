// import RNDateTimePicker, {
//   DateTimePickerEvent,
//   DateTimePickerAndroid,
// } from '@react-native-community/datetimepicker';
import React from 'react';

interface datePickerProps {
  // onChange: (value: DateTimePickerEvent) => void;
  value?: any;
  minimumDate?: any;
  maximumDate?: any;
}
const DatePicker = (prop: datePickerProps) => {
  const {
    // onChange
    value,
    minimumDate,
    maximumDate,
  } = prop;
  return (
    <>
      {/* <RNDateTimePicker
        style={{width: '100%'}}
        mode="date"
        display={'spinner'}
        value={value}
        onChange={onChange}
        // minimumDate={minimumDate ? minimumDate : new Date()}
        maximumDate={maximumDate}
      /> */}
    </>
  );
};

export default DatePicker;
