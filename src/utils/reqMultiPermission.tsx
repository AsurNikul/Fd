import { PermissionsAndroid } from "react-native";

export default {
 async requestPermissions() {
  try {
   const granted = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,  
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
   ]);

   if (
    granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
    granted['android.permission.READ_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED &&
    granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED &&
    granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
    granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
    granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
    granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
   ) {
    console.log('Permissions granted');
   } else {
    console.log('Permissions denied');
   }
  } catch (err) {
   console.warn(err);
  }
 }
}