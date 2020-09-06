import React, { useEffect, useState } from 'react';
import { AsyncStorage, SafeAreaView, StyleSheet } from 'react-native';
import Login from './components/Login';
import Main from './components/Main';
import Onboard from './components/Onboard';
import axios from 'axios';

const App = () => {
  const [token, setToken] = useState('');
  const [first, setFirst] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
      if (!!token) {
        setToken(token);
        getMyInfo(token);
      }
    });
    AsyncStorage.getItem('first').then((first) => {
      if (!!first) {
        setFirst(first);
      }
    });
  }, [token]);

  const getMyInfo = async (token) => {
    try {
      const result = await axios.get('https://moti.company/api/v1/users/my', {
        headers: { Authorization: token },
      });
      const info = result.data.data;
      await AsyncStorage.setItem('my', JSON.stringify(info));
    } catch (error) {
      console.log(error.message);
    }
  };
  // AsyncStorage.clear();

  if (!token) {
    return (
      <SafeAreaView style={styles.container}>
        <Login setToken={setToken} />
      </SafeAreaView>
    );
  }
  return <SafeAreaView style={styles.container}>{!!first ? <Main /> : <Onboard setFirst={setFirst} />}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
