import AsyncStorage from "@react-native-community/async-storage";

class Storage {
  static async getKey (key: string) {
    const data = await AsyncStorage.getItem(key);
    return data;
  }

  static async setKey (key: string, value: any) {
    const data = await AsyncStorage.setItem(key, value);
    return data;
  }
}

// async function store( key, value ) {
//     await AsyncStorage.setItem( key, value );
// }

// async function readAll() {
//     return await read( KEY );
// }

// async function readById( id ) {
//     const data = await read( KEY );
//     return _.find( data, element => element.id === id );
// }

// async function append( values ) {
//     const data = await read( KEY );
//     data.push( {
//         ...values,
//         id: new Date().getTime().toString(),
//     } );
//     return await store( KEY, JSON.stringify( data ) );
// }

// export default {
//     read,
//     store,
//     readAll,
//     readById,
//     append,
// }

export default Storage;