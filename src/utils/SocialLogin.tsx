// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import {appleAuth} from '@invertase/react-native-apple-authentication';

// export const googleLogin = async () => {
//   try {
//     console.log('google login fucniton called');
//     // await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     console.log('🚀 ~ file: func.ts:74 ~ googleLogin ~ userInfo:', userInfo);
//     return userInfo;
//   } catch (error: any) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//       console.log(error.code, 'user cancelled the google login flow');
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//       console.log(error.code, 'google login already in progress');
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//       console.log(error.code, 'play services not available or outdated');
//     } else {
//       // some other error happened
//       console.log('something went wrong else block of this', error);
//     }
//   }
// };

// export const appleLogin = async () => {
//   const appleAuthRequestResponse = await appleAuth.performRequest({
//     requestedOperation: appleAuth.Operation.LOGIN,
//     requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//   });
//   return appleAuthRequestResponse;
// };
