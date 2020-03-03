import Main from "./components/Main";
import Onboard from "./components/Onboard";
import React, { useState } from "react";
import { AsyncStorage, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  const [first, setFirst] = useState(AsyncStorage.getItem("first"));
  AsyncStorage.clear();

  console.log(123, first);
  return (
    <SafeAreaView style={styles.container}>
      {first ? <Main /> : <Onboard setFirst={setFirst} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default App;
