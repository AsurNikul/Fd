import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
