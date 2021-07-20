import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Dogs from './views/Dogs';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});

const App: React.FC = () => (
  <Provider store={store}>
    <View style={styles.root}>
      <Dogs />
    </View>
  </Provider>
);

export default App;
