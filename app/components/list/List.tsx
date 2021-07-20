import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import Item from './Item';

interface IList {
  items: string[];
  onRefresh?: () => void;
  refreshing?: boolean;
}

const List: React.FC<IList> = ({ items, onRefresh, refreshing = false }: IList) => {
  const renderItem = ({ item }: { item: string }) => <Item title={item} />;

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
};

export default List;
