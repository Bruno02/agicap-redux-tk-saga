/* eslint-disable import/no-extraneous-dependencies */
import 'react-native';
import React from 'react';
import { keys } from 'lodash';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import store from '../store';
import { FETCH_ALL_DOGS_API } from '../sagas/dogs';
import Dogs from './Dogs';

describe('<List />', () => {
  it('has a given element and get elements count', async () => {
    const items = { affenpinscher: [], african: [], airedale: [], akita: [] };

    fetchMock.get(FETCH_ALL_DOGS_API, {
      message: items,
    });

    const FLAT_LIST_TEST_ID = 'flatListTest';

    const component = (
      <Provider store={store}>
        <Dogs testID={FLAT_LIST_TEST_ID} />
      </Provider>
    );
    const { getByTestId, getByText } = render(component);

    // expect(getByText('Slide to fetch :)'));

    const dogsList = getByTestId(FLAT_LIST_TEST_ID);
    fireEvent(dogsList, 'refresh');

    const itemsMap = keys(items);
    await waitFor(() => {
      expect(getByText(itemsMap[2]));
      expect(dogsList.props.data.length).toEqual(itemsMap.length);
    });

    // await waitFor(() => {
    //   const dogsState = store.getState().dogs;
    //   console.log(dogsState);
    //   expect(dogsState.records.length).toBeGreaterThan(0);
    // });
  });
});
