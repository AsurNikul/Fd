// import Toast from 'react-native-toast-message';
// import {
//   ApolloClient,
//   InMemoryCache,
//   from,
//   HttpLink,
//   NormalizedCacheObject,
// } from '@apollo/client';
// import {onError} from '@apollo/client/link/error';
// import {setContext} from '@apollo/client/link/context';
// import {fromPromise} from '@apollo/client/link/utils';
// import store from '../redux/store';
// import {refreshAccessToken} from '../utils';
// import {setUserToken} from '../redux';

// export const BASE_URL = 'http://143.110.176.136:4000/graphql';
// const ERROR_CODE_UNAUTHORIZED = 403;
// const ERROR_MESSAGE_UNAUTHORIZED = 'Unauthorized - Token expired or invalid';

// let apolloClient: ApolloClient<NormalizedCacheObject>;

// const errorLink = onError(
//   ({graphQLErrors, networkError, operation, forward}) => {
//     if (graphQLErrors) {
//       for (let err of graphQLErrors) {
//         if (
//           err.extensions?.code === ERROR_CODE_UNAUTHORIZED &&
//           err.message === ERROR_MESSAGE_UNAUTHORIZED
//         ) {
//           return fromPromise(
//             refreshAccessToken().catch(error => {
//               console.log('Token refresh failed:', error);
//               Toast.show({
//                 text1: 'Session expired',
//                 text2: 'Please login again',
//                 type: 'error',
//               });

//               return null;
//             }),
//           )
//             .filter(newToken => Boolean(newToken))
//             .flatMap(newToken => {
//               store.dispatch(setUserToken(newToken || ''));

//               const oldHeaders = operation.getContext().headers;

//               operation.setContext({
//                 headers: {
//                   ...oldHeaders,
//                   Authorization: `Bearer ${newToken}`,
//                 },
//               });

//               return forward(operation);
//             });
//         }

//         Toast.show({
//           text1: err.message,
//           text2: `Path: ${err.path}`,
//           type: 'error',
//         });
//       }
//     }

//     if (networkError) {
//       console.log(`[Network error]: ${networkError}`);
//       Toast.show({
//         text1: 'Network Error',
//         text2: networkError.message,
//         type: 'error',
//       });
//     }
//   },
// );

// const authLink = setContext((_, {headers}) => {
//   const token = store.getState().main.token;
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const httpLink = new HttpLink({
//   uri: BASE_URL,
//   fetchOptions: {
//     reactNative: {textStreaming: true},
//   },
// });

// apolloClient = new ApolloClient({
//   link: from([authLink, errorLink, httpLink]),
//   cache: new InMemoryCache(),
// });

// export {apolloClient};
