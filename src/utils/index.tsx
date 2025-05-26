import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export {navigate, push, replace, goBack, reset} from './NavigationServices';

export type {
  CustomSvgProps,
  ImagePickerResponse,
  loginDetailProps,
  registerProps,
} from './types';
export {
  showPopupWithOk,
  showPopupWithOkAndCancel,
  isError,
  apiCall,
} from './Func';
export {loginValues, registerValues} from './formikValues';
export {loginSchema, registerSchema, addBatchSchema} from './schema';
