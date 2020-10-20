import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { AsyncStorage, ImageBackground, SafeAreaView, Text } from 'react-native';
import Login from './pages/login';
import { useContextDispatch, useContextState } from './utils/Context';
import Storage from './utils/Storage';

import splash from './assets/splash.png'

const Main = () => {
  const [loading, setLoading] = useState(true);
  const token = useContextState().accessToken;
  const dispatch = useContextDispatch();
  useEffect(() => {
    const getToken = async () => {
      // await AsyncStorage.clear();
      const accessToken = await Storage.getKey('accessToken');
      const refreshToken = await Storage.getKey('refreshToken');
      if (accessToken) {
        dispatch({
          type: 'SET_TOKEN',
          accessToken,
          refreshToken,
        });
      } else {
        setLoading(false);
      }
    }
    getToken();
  }, [])
  return (
    <>
      {!token && loading
        ? <ImageBackground
          source={splash}
          style={{ width: "100%", height: "100%" }}>
        </ImageBackground>
        : token ? <SafeAreaView><Text>Hi</Text></SafeAreaView> : <Login />
      }
    </>
  );
};

export default Main;
