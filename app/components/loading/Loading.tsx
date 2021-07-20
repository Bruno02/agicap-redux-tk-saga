import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

const Loading = () => (
  <View style={styles.root}>
    <ActivityIndicator size="large" />
  </View>
);

export default Loading;
