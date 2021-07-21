/* eslint-disable import/no-extraneous-dependencies */
import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import List from './List';

describe('<List />', () => {
  it('has a given element', () => {
    const items = ['one', 'two', 'three', 'four', 'five'];

    const FLAT_LIST_TEST_ID = 'flatListTest';

    const { getByText, getByTestId } = render(<List items={items} testID={FLAT_LIST_TEST_ID} />);
    expect(getByText(items[4]));
    expect(getByTestId(FLAT_LIST_TEST_ID).props.data.length).toEqual(items.length);
  });
});
