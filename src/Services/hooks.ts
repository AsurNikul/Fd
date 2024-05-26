import {useEffect, useState, Platform, useRef} from 'react';
import {PermissionsAndroid, Alert, Linking} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const useLocationServicesAndPermissions = () => {
  const [locationPermission, setLocationPermission] = useState(null);
  const [cords, setCords] = useState();

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        const data = {
          latitude: latitude,
          longitude: longitude,
        };
        setCords(data);
      },
      error => {
        console.log(error.code, error.message, 'This is error');
      },
    );
  };

  useEffect(() => {
    async function checkLocationPermission() {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setLocationPermission('granted');
            getLocation();
          } else {
            setLocationPermission('denied');
            Alert.alert(
              'Location Permission Required',
              'Please enable location permissions in order to use this feature.',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
                {
                  text: 'Go to Settings',
                  onPress: () => Linking.openSettings(),
                },
              ],
            );
          }
        } else if (Platform.OS === 'ios') {
          // iOS does not require explicit permission checks in this way
          setLocationPermission('granted');
          getLocation();
        }
      } catch (error) {
        console.error('Error checking location permission:', error);
        setLocationPermission('error');
      }
    }

    checkLocationPermission();
  }, []);

  return {
    locationPermission,
    cords,
  };
};

export const useDebounce = (val: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  let timerRef = useRef().current;

  useEffect(() => {
    timerRef = setTimeout(() => setDebouncedValue(val), delay);

    return () => {
      clearTimeout(timerRef);
    };
  }, [val, delay]);

  return debouncedValue;
};
