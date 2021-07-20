import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});

interface IItem {
  title: string;
}

const Item: React.FC<IItem> = ({ title }: IItem) => (
  <View style={styles.root}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Item;
