import {View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  Container,
  TextField,
  Typography,
} from '../../../components/All';
import {useFormik} from 'formik';
import {
  navigate,
  registerProps,
  registerSchema,
  registerValues,
} from '../../../utils';
import {colors, commonStyles} from '../../../theme';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {setCredentials} from '../../../redux';
import {Routes} from '../../../constants';

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
      confirmPassword: values.confirmPassword,
      mobileNumber: values.mobileNumber,
      isLoggedIn: true,
    };
    setLoading(true);
    dispatch(setCredentials(data));
    setLoading(false);
  };
  const handleLogin = () => navigate(Routes.LOGIN);
  const {handleSubmit} = formik;
  return (
    <Container isAvoidKeyboard>
      <Typography title={'Create an\nAccount'} mt={30} ml={30} size={30} />
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
        <TextField
          formik={formik}
          name={'confirmPassword'}
          placeholder="Enter Confirm Password"
          isPassword
          iconType="Feather"
          iconName="lock"
        />
      </View>
      <Button
        title="REGISTER"
        width={moderateScale(190)}
        borderRadius={50}
        backgroundColor={colors.black}
        buttonContainerStyle={[commonStyles.mv30, commonStyles.mb30]}
        onPress={() => handleSubmit()}
        loading={loading}
      />
      <Typography
        title={'Login'}
        align="center"
        size={14}
        onPress={handleLogin}
      />
    </Container>
  );
};

export default Register;
