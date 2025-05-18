import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, Container, TextField} from '../../../components/All';
import {useFormik} from 'formik';
import {
  goBack,
  navigate,
  registerProps,
  registerSchema,
  registerValues,
  showPopupWithOk,
} from '../../../utils';
import {commonStyles} from '../../../theme';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {addUsers} from '../../../redux';

const Register = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: registerValues,
    validationSchema: registerSchema,
    onSubmit: values => handleRegister(values),
  });
  const handleRegister = async (values: registerProps) => {
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
      mobileNumber: values.mobileNumber,
    };
    setLoading(true);
    dispatch(addUsers(data));
    showPopupWithOk('Global Spintex', 'User added successfully', () => {
      setLoading(false);
      goBack();
    });
    setLoading(false);
  };
  const {handleSubmit} = formik;
  return (
    <Container isAvoidKeyboard title="Add User" showLeftIcon>
      <View style={commonStyles.mv20}>
        <TextField
          formik={formik}
          name={'username'}
          placeholder="Enter username"
          iconName="user"
          iconType="AntDesign"
        />
        <TextField
          formik={formik}
          name={'mobileNumber'}
          placeholder="Enter Number"
          iconName="phone"
          iconType="Feather"
          keyboardType="number-pad"
        />
        <TextField
          formik={formik}
          name={'email'}
          placeholder="Email address"
          keyboardType="email-address"
          iconName="email"
          iconType="Fontisto"
        />
        <TextField
          formik={formik}
          name={'password'}
          placeholder="Enter Password"
          isPassword
          iconType="Feather"
          iconName="lock"
        />
      </View>
      <Button
        title="Add User"
        width={moderateScale(190)}
        borderRadius={50}
        buttonContainerStyle={[commonStyles.mv30, commonStyles.mb30]}
        onPress={() => handleSubmit()}
        loading={loading}
      />
    </Container>
  );
};

export default Register;
