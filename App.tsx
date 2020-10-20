import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Main from './Main';
import { Provider } from './utils/Context';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const App = () => {
  // AsyncStorage.clear();
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
