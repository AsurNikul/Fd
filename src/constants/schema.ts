import * as Yup from 'yup';

export const StringSchema = (val: any) => Yup.string().required(val);

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string()
    .required('old Password is a required ')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .min(8, 'old Password must be at least 8 characters'),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string()
    .required('old Password is a required ')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .min(8, 'old Password must be at least 8 characters'),
  fullName: Yup.string().required('FullName is required'),
  number: Yup.string()
    .max(10, 'Mobile number be at least 10 Numbers')
    .required('Number is required'),
});

export const ChangePasswordSchema = Yup.object().shape({
  oldPass: StringSchema('Old Password is a required ')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .min(8, 'old Password must be at least 8 characters'),
  newPass: StringSchema('New Password is a required ')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .min(8, 'New Password must be at least 8 characters'),
  confirmPass: StringSchema('Password is a required ')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .min(8, 'Password must be at least 8 characters')
    .oneOf([Yup.ref('newPass')], 'Your passwords do not match New Password.'),
});

export const NewPassSchema = Yup.object().shape({
  pass: Yup.string()
    .min(8, 'New password must be at least 8 characters.')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .required('New password is required.'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('pass')], 'New password and confirm password do not match.')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .required('Confirm password is required.'),
});

export const ForgotPassSchema = Yup.object().shape({
  email: StringSchema('Email is required').email('Invalid email'),
});
