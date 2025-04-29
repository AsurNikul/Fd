import {View} from 'react-native';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import {Button, Container, TextField, Typography} from '../../../components';
import {
  callAPI,
  loginDetailProps,
  loginSchema,
  loginValues,
  navigate,
} from '../../../utils';
import {colors, commonStyles} from '../../../theme';
import {setAuthDetails} from '../../../redux';
import {LOGIN_USER, Routes} from '../../../constants';

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: loginValues,
    validationSchema: loginSchema,
    onSubmit: values => handleLogin(values),
  });
  const handleLogin = async (values: loginDetailProps) => {
    const data = {
      username: values.username,
      password: values.password,
      isAuthenticated: true,
    };
    setLoading(true);
    // ====================================================================>
    // This login api not working i tried to call it but it is not working
    // it is always giving username or password is incorrect
    // ====================================================================>
    // const credentials = { username: 'john_doe', password: 'pass123' };
    // fetch('https://fakestoreapi.com/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(credentials)
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    // =============================================================>
    // const credentials = { username: 'john_doe', password: 'pass123' };
    // axios.post('https://fakestoreapi.com/auth/login', credentials)
    //   .then(response => console.log(response.data));
    // ==========================================>
    // Also tried with copy pasting code from fake store dashboard still getting
    // same issue which is  username or password is incorrect
    // ===============================================>
    // await callAPI(LOGIN_USER, 'POST', data).then(() => {
    dispatch(setAuthDetails(data));
    // });
    setLoading(false);
  };
  const {handleSubmit} = formik;
  const handleRegister = () => navigate(Routes.REGISTER);
  return (
    <Container isAvoidKeyboard showHeader={false}>
      <Typography title={'Log into\nyour account'} mt={100} ml={30} size={30} />
      <View style={commonStyles.mv20}>
        <TextField
          formik={formik}
          name={'username'}
          placeholder="Enter Username"
          iconName="user"
          iconType="AntDesign"
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
        title="LOG IN"
        width={moderateScale(140)}
        borderRadius={50}
        backgroundColor={colors.black}
        buttonContainerStyle={[commonStyles.mv30, commonStyles.mb30]}
        onPress={() => handleSubmit()}
        loading={loading}
      />
      <Typography
        title="Create an account"
        align="center"
        size={14}
        onPress={handleRegister}
      />
    </Container>
  );
};

export default Login;
