import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export {navigate, push, replace, goBack, reset} from './NavigationServices';

export type {CustomSvgProps, ImagePickerResponse} from './types';
export {showPopupWithOk, showPopupWithOkAndCancel} from './Func';
