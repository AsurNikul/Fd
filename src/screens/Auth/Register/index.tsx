import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, Container, TextField, Typography} from '../../../components';
import {useFormik} from 'formik';
import {
  callAPI,
  navigate,
  registerProps,
  registerSchema,
  registerValues,
} from '../../../utils';
import {colors, commonStyles} from '../../../theme';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {setAuthDetails} from '../../../redux';
import {REGISTER_USER, Routes} from '../../../constants';

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
      isAuthenticated: true,
    };
    setLoading(true);
    await callAPI(REGISTER_USER, 'POST', data).then(() => {
      dispatch(setAuthDetails(data));
    });
    setLoading(false);
  };
  const handleLogin = () => navigate(Routes.LOGIN);
  const {handleSubmit} = formik;
  return (
    <Container isAvoidKeyboard showHeader={false}>
      <Typography title={'Create an\nAccount'} mt={100} ml={30} size={30} />
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
          name={'email'}
          placeholder="Email address"
          keyboardType="email-address"
          iconName="email"
          iconType="Fontisto"
        />
        <TextField
          formik={formik}
          name={'password'}
          placeholder="Password"
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
