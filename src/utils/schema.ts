import * as Yup from 'yup';

export const StringSchema = (val: any) => Yup.string().required(val);

export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('old Password is a required ')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .min(8, 'old Password must be at least 8 characters'),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string()
    .required('Password is a required ')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .min(8, 'Password must be at least 8 characters'),
  username: Yup.string().required('Username is required'),
});
