import moment from 'moment';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Error from './Error';

const Main = () => {
  // AsyncStorage.setItem("key", "savingData");
  // AsyncStorage.getAllKeys();
  // AsyncStorage.getAllKeys((err, keys) => {
  //   AsyncStorage.multiGet(keys, (err, stores) => {
  //     stores.map((result, i, store) => {
  //       // get at each store's key/value so you can work with it
  //       let key = store[i][0];
  //       let value = store[i][1];
  //     });
  //   });
  // });

  // AsyncStorage.mergeItem("dbKey", "savingData");

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((num) => {
          return (
            <View key={num}>
              <Text style={{ color: '#d4a17d' }}>{num}th</Text>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 16,
                  backgroundColor: '#d4a17d',
                  marginTop: 8,
                }}
              />
            </View>
          );
        })}
      </View>
      <Error internet />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <View>
          <Image source={require('../assets/images/normal.png')} style={{ width: 24, height: 24 }} />
        </View>
        <View>
          <Text style={{ color: '#d4a17d', fontSize: 20, lineHeight: 36 }}>{moment().format('YYYY. MM. DD')}</Text>
        </View>
        <View>
          <Image source={require('../assets/images/icProfileToucharea.png')} style={{ width: 24, height: 24 }} />
        </View>
      </View>
    </>
  );
};

export default Main;
