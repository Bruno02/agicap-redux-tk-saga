/* eslint-disable import/no-extraneous-dependencies */
import 'react-native';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import store from '../store';
import { FETCH_ALL_DOGS_API } from '../sagas/dogs';
import Dogs from './Dogs';

describe('<Dogs />', () => {
  it('Dogs has a given element and get elements count after refreshing', async () => {
    const ITEMS = { affenpinscher: [], african: [], airedale: [], akita: [] };

    fetchMock.get(FETCH_ALL_DOGS_API, {
      message: ITEMS,
    });

    const FLAT_LIST_TEST_ID = 'flatListTest';

    const component = (
      <Provider store={store}>
        <Dogs testID={FLAT_LIST_TEST_ID} />
      </Provider>
    );
    const { getByTestId, getByText } = render(component);

    expect(getByText('Pull to fetch :)'));

    const dogsList = getByTestId(FLAT_LIST_TEST_ID);
    fireEvent(dogsList, 'refresh');

    await waitFor(() => {
      expect(getByText('airedale'));
      expect(dogsList.props.data.length).toEqual(4);
      expect(dogsList.props.data).toEqual(
        expect.arrayContaining(['affenpinscher', 'african', 'airedale', 'akita'])
      );
    });

    // await waitFor(() => {
    //   const dogsState = store.getState().dogs;
    //   console.log(dogsState);
    //   expect(dogsState.records.length).toBeGreaterThan(0);
    // });
  });
});
