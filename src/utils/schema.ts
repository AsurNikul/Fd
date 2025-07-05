import * as Yup from 'yup';

export const StringSchema = (val: any) => Yup.string().required(val);

export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is a required ')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      `Password must contain at least one number,\none uppercase letter, and one special character`,
    )
    .min(8, 'old Password must be at least 8 characters'),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Password must contain at least one number, one uppercase letter, and one special character',
    )
    .min(8, 'Password must be at least 8 characters'),
  mobileNumber: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
});

export const editUserSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Password must contain at least one number, one uppercase letter, and one special character',
    )
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const addBatchSchema = Yup.object().shape({
  date: Yup.date().required('Date is required'),
  // batchNo: Yup.string().required('Batch number is required'),
  rmKg: Yup.number()
    .typeError('RM (KG) must be a number')
    .positive('Must be greater than 0')
    .required('RM (KG) is required'),
  inTime: Yup.date().required('In Time is required'),
  outTime: Yup.date()
    .required('Out Time is required')
    .test(
      'is-after-inTime',
      'Out Time must be later than In Time',
      function (value) {
        const {inTime} = this.parent;
        if (!inTime || !value) return true; // Skip validation if either is missing
        return new Date(value) > new Date(inTime);
      },
    ),
  // sale: Yup.number()
  //   .typeError('Sale must be a number')
  //   .min(0, 'Sale cannot be negative')
  //   .required('Sale is required'),
});

export const addSalesSchema = Yup.object().shape({
  date: Yup.date().required('Date is required'),
  // batchNo: Yup.string().required('Batch number is required'),
  rmKg: Yup.number()
    .typeError('RM (KG) must be a number')
    .positive('Must be greater than 0')
    .required('RM (KG) is required'),
  // sale: Yup.number()
  //   .typeError('Sale must be a number')
  //   .min(0, 'Sale cannot be negative')
  //   .required('Sale is required'),
});
