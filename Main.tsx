import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { AsyncStorage, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import Login from './pages/login';
import { useContextDispatch, useContextState } from './utils/Context';
import MyStorage from './utils/MyStorage';
import Index from './pages/index';

import splash from './assets/splash.png'
import User from './models/User';
import Signin from './models/Signin';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const token = useContextState().accessToken;
  const dispatch = useContextDispatch();
  useEffect(() => {
    const getToken = async () => {
      let accessToken
      let refreshToken
      let user = {} as User;
      try {

        // await AsyncStorage.clear();
        accessToken = await MyStorage.getKey('accessToken');
        refreshToken = await MyStorage.getKey('refreshToken');
        if(accessToken) {
          user = await User.getUsersMy({ token: accessToken })
        }
        if (!user.id && refreshToken) {
          const result = await Signin.postSigninRefresh({ token: refreshToken });
          accessToken = result.accessToken;
          refreshToken = result.refreshToken;
          let user = await User.getUsersMy({ token: accessToken })
          if (!user.id) {
            accessToken = '';
            refreshToken = '';
          }
        }
        if (accessToken) {
          dispatch({
            type: 'SET_TOKEN',
            accessToken,
            refreshToken,
          });
        } else {
          setLoading(false);
        }
      } catch(error) {
        console.log('Main useEffect error', error);
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
        : token ? <Index /> : <Login />
      }
    </>
  );
};

export default Main;
