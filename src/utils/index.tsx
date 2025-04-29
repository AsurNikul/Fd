import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export {navigate, push, replace, goBack, reset} from './navigationServices';

export type {
  CustomSvgProps,
  ImagePickerResponse,
  loginDetailProps,
  registerProps,
} from './types';
export {showPopupWithOk, showPopupWithOkAndCancel, callAPI} from './Func';
export {loginValues, registerValues} from './formikValues';
export {loginSchema, registerSchema} from './schema';
