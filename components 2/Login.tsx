import * as Google from 'expo-google-app-auth';
import React from 'react';
import { Dimensions, Image, Linking, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import axios from 'axios';

interface Props {
  setToken: (token: string) => void;
}

const Login: React.FC<Props> = ({ setToken }) => {
  var { width, height } = Dimensions.get('window');
  const login = async () => {
    try {
      const googleData = await Google.logInAsync({
        clientId: '507319569465-1flqlee8i4s4c21q3vldbhccdldlffpo.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (googleData.type === 'success') {
        /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        const result = await axios.post(
          'https://moti.company/api/v1/signin',
          { snsType: 'google' },
          {
            headers: { Authorization: googleData.accessToken },
          },
        );
        const token = result.data.data.accessToken;
        await AsyncStorage.setItem('token', token).then(() => setToken(token));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={{ display: 'flex', alignItems: 'center', width, height }}>
      <Image
        source={require('../assets/images/motiLogo.png')}
        style={{ width: width / 2, height: width / 2 / 5, marginTop: 204 }}
      />
      <Text
        style={{
          color: '#f1dbcd',
          marginTop: 24,
          fontSize: 14,
          lineHeight: 26,
          textAlign: 'center',
        }}
      >
        Make Own True Identity
      </Text>
      <View style={{ position: 'absolute', bottom: 100, display: 'flex', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            login();
          }}
          style={{
            backgroundColor: '#f1dbcd',
            width: width - 16 - 16,
            height: 44,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginTop: 24,
          }}
        >
          <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginRight: 8 }}>
            <Image source={require('../assets/images/icApple.png')} style={{ width: 22, height: 22 }} />
            <Text style={{ fontSize: 14 }}>Sign in with google</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ marginTop: 24, color: '#d4a17d' }}>By creating an account you are agreeing to</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.notion.so/MOTI-35d01dd331bb4aa0915c33d28d60b63c')}
        >
          <Text style={{ marginTop: 8, color: '#d4a17d', textDecorationLine: 'underline' }}>MOTI's User Agreement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
