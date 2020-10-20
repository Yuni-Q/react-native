import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import Login from './pages/login';
import { Provider, useContextDispatch, useContextState } from './utils/Context';
import Storage from './utils/Storage';

import splash from './assets/splash.png'
import Main from './Main';
declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <Provider>
      <Main />
    </Provider>
    // <SafeAreaView>
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Login" component={Login} options={{ title: '로그인' }} />
      //     {/* <Stack.Screen name="Main" component={Main} options={{ title: '메인' }} /> */}
      //     {/* <Stack.Screen name="Detail" component={Detail} /> */}
      //     {/* <Stack.Screen name="Form" component={Form} options={{ title: '일기 작성' }} /> */}
      //   </Stack.Navigator>
      // </NavigationContainer>
      // </SafeAreaView>
  );
};

export default App;
