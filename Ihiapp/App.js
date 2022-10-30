import React from 'react';
import { StyleSheet, View } from "react-native";
import { Provider } from 'react-redux';
import store from './app/store/store';
import Main from "./main";

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
      </View>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", flex: 1 }
})