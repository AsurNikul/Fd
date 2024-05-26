import messaging, {firebase} from '@react-native-firebase/messaging';
import { Alert, Platform } from 'react-native';

import notifee, {AndroidImportance} from '@notifee/react-native';
import Geolocation from 'react-native-geolocation-service';

import ImageCropPicker from 'react-native-image-crop-picker';
import {Linking} from 'react-native';

// Check App Platform
const isIOS: boolean = Platform.OS === 'ios';

// Show Popup Alert
const showPopupWithOk = (
  title: string | undefined,
  message: string | undefined,
  okClicked?: () => void
): void => {
  Alert.alert(!!title ? title : 'health_e', !!message ? message : '', [
    { text: 'OK', onPress: () => okClicked && okClicked() },
  ]);
};

// Show Popup with ok and cancel
const showPopupWithOkAndCancel = (
  title: string | undefined,
  message: string | undefined,
  okClicked?: () => void,
  cancelClicked?: () => void
): void => {
  Alert.alert(!!title ? title : 'health_e', !!message ? message : '', [
    {
      text: 'Cancel',
      onPress: () => cancelClicked && cancelClicked(),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => okClicked && okClicked(),
    },
  ]);
};

const showPopupWithExit = (message: string | undefined, okClicked?: () => void): void => {
  Alert.alert('health_e', !!message ? message : '', [
    {
      text: 'OK',
      onPress: () => okClicked && okClicked(),
    },
  ]);
};

export const GetDeviceToken = async () => {
  try {
    const token = await firebase.messaging().getToken();
    const authStatus = await messaging().requestPermission();

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('token os enable for ios', token);
    }
    return token;
  } catch (error) {
    console.log('🚀 ~ file: func.ts:82 ~ GetDeviceToken ~ error:', error);
  }
};

export const handleCam = async () => {
  try {
    await ImageCropPicker.openCamera({
      mediaType: 'photo',
      showCropGuidelines: true,
      showCropFrame: true,
    })
      .then((image: any) => {
        const res = image;
        return res;
      })
      .catch((err: any) => {
        if (err == 'Error: User did not grant camera permission.') {
          Linking.openSettings();
        }
      });
  } catch (error) {
    console.log(error, 'error from try catch');
  }
};

export const handlePhoto = async () => {
  try {
    await ImageCropPicker.openPicker({
      mediaType: 'photo',
      showCropGuidelines: true,
      showCropFrame: true,
      multiple: false,
    })
      .then((image: any) => {
        const res = image;
        return res;
      })
      .catch(err => {
        if (err == 'Error: User did not grant library permission.') {
          Linking.openSettings();
        }
      });
  } catch (error) {
    console.log(error, 'catche error');
  }
};

export const PermissionFromSetting = (err: any) => {
  if (err == 'Error: User did not grant camera permission.') {
    Linking.openSettings();
  }
};

export const NotifyFunc = async () => {
  const DisplayNotification = async (notification: any) => {
    try {
      const channel = await notifee.createChannel({
        id: 'default_app',
        name: 'default_app',
      });

      notifee.displayNotification({
        android: {
          channelId: 'default_app',
          importance: AndroidImportance.HIGH,
          pressAction: {
            id: 'default',
          },
        },
        title: notification?.body,
        body: notification?.title,
      });
    } catch (error) {
      console.error('Error displaying notification:', error);
    }
  };
  const notifi1 = messaging().onMessage(async remoteMessage => {
    console.log(
      '🚀 ~ file: func.ts:220 ~ notifi1 ~ when msg comes:',
      remoteMessage?.data?.data,
    );
    await DisplayNotification(remoteMessage.notification);
  });

  const notifi2 = messaging().onNotificationOpenedApp(async remoteMessage => {
    let subData = remoteMessage?.data?.data;
    let replaceNullData = subData.replace(/None/g, 'null');
    let conveteredJson = JSON.parse(replaceNullData);
    console.log(
      '🚀 ~ file: func.ts:236 ~ notifi2 ~ conveteredJson:',
      conveteredJson,
    );
    await DisplayNotification(remoteMessage.notification);
  });

  const notifi3 = messaging().setBackgroundMessageHandler(
    async remoteMessage => {
      console.log(
        '🚀 ~ file: func.ts:225 ~ NotifyFunc ~ remoteMessage:',
        remoteMessage,
      );
      await DisplayNotification(remoteMessage.notification);
    },
  );
};
