import {View} from 'react-native';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import {
  Button,
  Container,
  TextField,
  Typography,
} from '../../../components/All';
import {
  apiCall,
  loginDetailProps,
  loginSchema,
  loginValues,
  navigate,
} from '../../../utils';
import {colors, commonStyles} from '../../../theme';
import {setCredentials} from '../../../redux';
import {Routes} from '../../../constants';
import {LOGIN} from '../../../Services/API';

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
    };
    setLoading(true);
    await apiCall(LOGIN, 'POST', data)
      .then(res => {
        dispatch(setCredentials(res));
      })
      .finally(() => setLoading(false));
    setLoading(false);
  };
  const {handleSubmit} = formik;
  const handleRegister = () => navigate(Routes.REGISTER);
  return (
    <Container isAvoidKeyboard>
      <Typography
        title={'Log into\nyour account'}
        ml={30}
        size={30}
        color={colors.primary}
      />
      <View style={commonStyles.mv20}>
        <TextField
          formik={formik}
          name={'username'}
          placeholder="Enter Username"
          iconName="user"
          iconType="AntDesign"
          loading={loading}
        />
        <TextField
          formik={formik}
          name={'password'}
          placeholder="Password"
          isPassword
          iconType="Feather"
          iconName="lock"
          loading={loading}
        />
      </View>
      <Button
        title="LOG IN"
        width={moderateScale(140)}
        borderRadius={50}
        buttonContainerStyle={[commonStyles.mv30, commonStyles.mb30]}
        onPress={() => handleSubmit()}
        loading={loading}
      />
    </Container>
  );
};

export default Login;
