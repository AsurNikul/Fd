import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Container, TextField} from '../../../components/All';
import {useFormik} from 'formik';
import {
  apiCall,
  goBack,
  navigate,
  registerProps,
  registerSchema,
  showPopupWithOk,
} from '../../../utils';
import {commonStyles} from '../../../theme';
import {moderateScale} from 'react-native-size-matters';
import {CREATE_USER, EDIT_USER} from '../../../Services/API';
import {useRoute} from '@react-navigation/native';
import {editUserSchema} from '../../../utils/schema';

const Register = () => {
  const route = useRoute<any>().params?.item;
  const [loading, setLoading] = useState<boolean>(false);
  const [registerValues, setRegisterValues] = useState<registerProps>({
    firstName: route?.first_name,
    lastName: route?.last_name,
    email: route?.email,
    password: '',
    mobileNumber: route?.mobile_number,
    confirmPassword: '',
  });

  useEffect(() => {
    if (route) {
      setRegisterValues({
        firstName: route.first_name,
        lastName: route.last_name,
        email: route.email,
        mobileNumber: route.mobile_number,
        password: '',
        confirmPassword: '',
      });
    }
  }, [route]);

  const formik = useFormik({
    initialValues: registerValues,
    validationSchema: route ? editUserSchema : registerSchema,
    onSubmit: values => handleRegister(values),
  });
  const handleRegister = async (values: registerProps) => {
    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      password: values.password,
      confirm_password: values.confirmPassword,
    };
    if (!route) {
      (data.mobile_number = values.mobileNumber), (data.email = values.email);
      data.role = 'user';
    }
    const url = route ? `${EDIT_USER}${route?.id}` : CREATE_USER;
    const method = route ? 'PUT' : 'POST';
    setLoading(true);
    apiCall(url, method, data)
      .then(res => {
        setLoading(false);
        showPopupWithOk('Success', res?.message, () => goBack());
      })
      .finally(() => setLoading(false));
  };
  const {handleSubmit} = formik;
  return (
    <Container
      isAvoidKeyboard
      title={route ? 'Edit User' : 'Add User'}
      showLeftIcon>
      <View style={commonStyles.mv20}>
        <TextField
          formik={formik}
          name={'firstName'}
          placeholder="Enter First Name"
          iconName="user"
          iconType="AntDesign"
        />
        <TextField
          formik={formik}
          name={'lastName'}
          placeholder="Enter Last Name"
          iconName="user"
          iconType="AntDesign"
        />
        {!route && (
          <>
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
              editable={route}
            />
          </>
        )}
        <TextField
          formik={formik}
          name={'password'}
          placeholder="Enter Password"
          isPassword
          iconType="Feather"
          iconName="lock"
        />
        {route && (
          <TextField
            formik={formik}
            name={'confirmPassword'}
            placeholder="Enter Confirm Password"
            isPassword
            iconType="Feather"
            iconName="lock"
          />
        )}
      </View>
      <Button
        title={route ? 'Edit User' : 'Add User'}
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
