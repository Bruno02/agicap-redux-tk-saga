/* eslint-disable import/no-extraneous-dependencies */
import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import List from './List';

describe('<List />', () => {
  it('has a given element', () => {
    const items = ['one', 'two', 'three', 'four', 'five'];

    const { getByText } = render(<List items={items} testID="testFlatList" />);
    expect(getByText('three'));
  });
});
