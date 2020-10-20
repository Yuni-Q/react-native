import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, Text } from 'react-native';
import Login from './pages/login';
import { useContextDispatch, useContextState } from './utils/Context';
import Storage from './utils/Storage';

import splash from './assets/splash.png'

const Main = () => {
  const [loading, setLoading] = useState(true);
  const token = useContextState().token;
  const dispatch = useContextDispatch();
	useEffect(() => {
		const getToken =  async( ) => {
			const oldToken = await Storage.getToken();
			if(oldToken) {
				dispatch({
					type: 'SET_TOKEN',
					token: oldToken,
        });
      }
      setLoading(false);
		}
		getToken();
	}, [])
  return (
    <>
      {loading
        ? <ImageBackground
            source={splash}    
            style={{width:"100%",height:"100%"}}>
        </ImageBackground>
        : token? <SafeAreaView><Text>Hi</Text></SafeAreaView> : <Login />
      }
    </>
  );
};

export default Main;
