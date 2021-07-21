import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogsStart, selectLoading, selectDogs } from 'reducers/dogs';
import { List } from 'components/list';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
});

interface IDogs {
  testID?: string;
}

const Dogs = ({ testID }: IDogs) => {
  const dispatch = useDispatch();
  const dogs = useSelector(selectDogs);
  const loading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchDogsStart());
  // }, []);

  const handleRefresh = () => dispatch(fetchDogsStart());

  return (
    <View style={styles.root}>
      <List
        items={dogs ?? ['Pull to fetch :)']}
        onRefresh={handleRefresh}
        refreshing={loading}
        testID={testID}
      />
    </View>
  );
};

export default Dogs;
