import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import homeTheme from './theme/HomeTheme';
import HomeNavigator from './navigation/HomeNavigator';
import AuthNavigator from './navigation/AuthNavigator';

import * as authActions from './store/actions/AuthAction';

enableScreens();

const theme = homeTheme(false);

export default function App() {

  const isAuth = useSelector(state => !!state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) return;

      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate } = transformedData;
      const expirationDate = new Date(expiryDate);

      if (expirationDate <= new Date() || !token || !userId) return;

      const expirationTime = expirationDate.getTime() - new Date().getTime();

      dispatch(authActions.authenticate([{ userid: userId, token: token, expiry: expirationTime }]));
    };

    tryLogin();
  }, [isAuth]);

  return (
    <PaperProvider theme={theme}>
      {isAuth ? <HomeNavigator /> : <AuthNavigator />}
    </PaperProvider>
  );
}