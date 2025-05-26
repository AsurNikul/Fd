import {Alert, Platform} from 'react-native';
import axios from 'axios';
import {showGlobalModal} from '../components/ConfirmModalProvider/CustomModal';
import store from '../redux/store';

// Check App Platform
const isIOS: boolean = Platform.OS === 'ios';

// Show Popup Alert
//Show Popup Alert
export const showPopupWithOk = (
  title: string,
  message?: string,
  okClicked?: () => void,
) => {
  // Alert.alert(!!title ? title : strings.health_e, !!message ? message : "", [
  //   { text: strings.ok.toUpperCase(), onPress: () => okClicked && okClicked() },
  // ]);
  showGlobalModal({
    title: !!title ? title : 'test',
    message: !!message ? message : '',
    onOkayClicked: () => okClicked && okClicked(),
  });
};

//Show Popup with ok and cancel
export const showPopupWithOkAndCancel = (
  title?: string,
  message?: string,
  okClicked?: () => void,
  cancelClicked?: () => void,
) => {
  // Alert.alert(!!title ? title : strings.health_e, !!message ? message : "", [
  //   {
  //     text: strings.cancel,
  //     onPress: () => cancelClicked && cancelClicked(),
  //     style: "cancel",
  //   },
  //   {
  //     text: strings.ok,
  //     onPress: () => okClicked && okClicked(),
  //   },
  // ]);
  showGlobalModal({
    title: !!title ? title : 'test',
    message: !!message ? message : '',
    onOkayClicked: () => okClicked && okClicked(),
    onCancelClicked: () => cancelClicked && cancelClicked(),
    showCancel: true,
  });
};

// // Show Popup with ok and cancel
// const showPopupWithOkAndCancel = (
//   title: string | undefined,
//   message: string | undefined,
//   okClicked?: () => void,
//   cancelClicked?: () => void,
// ): void => {
//   Alert.alert(!!title ? title : 'health_e', !!message ? message : '', [
//     {
//       text: 'Cancel',
//       onPress: () => cancelClicked && cancelClicked(),
//       style: 'cancel',
//     },
//     {
//       text: 'OK',
//       onPress: () => okClicked && okClicked(),
//     },
//   ]);
// };

// const showPopupWithExit = (
//   message: string | undefined,
//   okClicked?: () => void,
// ): void => {
//   Alert.alert('health_e', !!message ? message : '', [
//     {
//       text: 'OK',
//       onPress: () => okClicked && okClicked(),
//     },
//   ]);
// };

// export const GetDeviceToken = async () => {
//   try {
//     const token = await firebase.messaging().getToken();
//     const authStatus = await messaging().requestPermission();

//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
//     if (enabled) {
//       console.log('token os enable for ios', token);
//     }
//     return token;
//   } catch (error) {
//     console.log('🚀 ~ file: func.ts:82 ~ GetDeviceToken ~ error:', error);
//   }
// };

// export const handleCam = async () => {
//   try {
//     await ImageCropPicker.openCamera({
//       mediaType: 'photo',
//       showCropGuidelines: true,
//       showCropFrame: true,
//     })
//       .then((image: any) => {
//         const res = image;
//         return res;
//       })
//       .catch((err: any) => {
//         if (err == 'Error: User did not grant camera permission.') {
//           Linking.openSettings();
//         }
//       });
//   } catch (error) {
//     console.log(error, 'error from try catch');
//   }
// };

// export const handlePhoto = async () => {
//   try {
//     await ImageCropPicker.openPicker({
//       mediaType: 'photo',
//       showCropGuidelines: true,
//       showCropFrame: true,
//       multiple: false,
//     })
//       .then((image: any) => {
//         const res = image;
//         return res;
//       })
//       .catch(err => {
//         if (err == 'Error: User did not grant library permission.') {
//           Linking.openSettings();
//         }
//       });
//   } catch (error) {
//     console.log(error, 'catche error');
//   }
// };

// export const PermissionFromSetting = (err: any) => {
//   if (err == 'Error: User did not grant camera permission.') {
//     Linking.openSettings();
//   }
// };

// export const NotifyFunc = async () => {
//   const DisplayNotification = async (notification: any) => {
//     try {
//       const channel = await notifee.createChannel({
//         id: 'default_app',
//         name: 'default_app',
//       });

//       notifee.displayNotification({
//         android: {
//           channelId: 'default_app',
//           importance: AndroidImportance.HIGH,
//           pressAction: {
//             id: 'default',
//           },
//         },
//         title: notification?.body,
//         body: notification?.title,
//       });
//     } catch (error) {
//       console.error('Error displaying notification:', error);
//     }
//   };
//   const notifi1 = messaging().onMessage(async remoteMessage => {
//     console.log(
//       '🚀 ~ file: func.ts:220 ~ notifi1 ~ when msg comes:',
//       remoteMessage?.data?.data,
//     );
//     await DisplayNotification(remoteMessage.notification);
//   });

//   const notifi2 = messaging().onNotificationOpenedApp(async remoteMessage => {
//     let subData = remoteMessage?.data?.data;
//     let replaceNullData = subData.replace(/None/g, 'null');
//     let conveteredJson = JSON.parse(replaceNullData);
//     console.log(
//       '🚀 ~ file: func.ts:236 ~ notifi2 ~ conveteredJson:',
//       conveteredJson,
//     );
//     await DisplayNotification(remoteMessage.notification);
//   });

//   const notifi3 = messaging().setBackgroundMessageHandler(
//     async remoteMessage => {
//       console.log(
//         '🚀 ~ file: func.ts:225 ~ NotifyFunc ~ remoteMessage:',
//         remoteMessage,
//       );
//       await DisplayNotification(remoteMessage.notification);
//     },
//   );
// };

const responseCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  CONFLICT: 409,
  BED_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  REQUEST_TIME_OUT: 408,
  UNPROCESSED_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BED_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATE_WAY_TIMEOUT: 504,
  NETWORK_AUTH_REQUIRED: 511,
  NETWORK_UNREACHABLE: 512,
  REDIRECT: 302,
  TOKEN_EXPIRED: 411,
};
export const isError = (name?: string, errors?: any, touched?: any) => {
  const isError = name && errors[name] && touched[name];
  return isError;
};
export const apiCall = async (
  url: string,
  method: string,
  data?: any,
  extHeaderData?: any,
  isFormData?: boolean,
) => {
  console.log('URL:>', url);
  console.log('Method:>', method);
  console.log('Body:>', data);

  const headers = {
    'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    Accept: 'application/json, text/javascript, */*; q=0.01',
    Authorization: `Bearer ${store.getState().main?.cred?.token || ''}`,
    'Cache-Control': 'no-store',
    ...extHeaderData,
  };
  console.log(headers, 'headers');

  const config = {
    method,
    url,
    headers,
    data: isFormData ? data : data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await axios(config);
    console.log('Status code :>>', {
      status: response.status,
      token: global.accessToken,
    });
    console.log('API response :>>>', response.data);
    console.log(
      response?.status === 'success',
      'API response headers :>>>',
      response?.status,
    );

    if (response?.status) {
      return response.data;
    } else {
      showPopupWithOk(
        'Global Spintex',
        response.data?.message || 'SOMETHING_WENT_WRONG',
      );
      throw response.data;
    }
  } catch (error) {
    console.error('Error :>>', error);
    const errorMessage =
      error.response?.data?.message || 'SOMETHING_WENT_WRONG';
    showPopupWithOk('Global Spintex', errorMessage);
    throw error;
  }
};
