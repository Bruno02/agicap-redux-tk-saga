/* eslint-disable import/no-extraneous-dependencies */
import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import List from './List';

describe('<List />', () => {
  it('List has a given element and get elements count', () => {
    const ITEMS = ['one', 'two', 'three', 'four', 'five'];

    const FLAT_LIST_TEST_ID = 'flatListTest';

    const { getByText, getByTestId } = render(<List items={ITEMS} testID={FLAT_LIST_TEST_ID} />);
    expect(getByText('two'));
    expect(getByTestId(FLAT_LIST_TEST_ID).props.data.length).toEqual(5);
    expect(getByTestId(FLAT_LIST_TEST_ID).props.data).toEqual([
      'one',
      'two',
      'three',
      'four',
      'five',
    ]);
  });
});
