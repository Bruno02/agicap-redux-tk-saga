/* eslint-disable import/no-extraneous-dependencies */
import 'react-native';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import store from '../store';
import { FETCH_ALL_DOGS_API } from '../sagas/dogs';
import Dogs from './Dogs';

describe('<List />', () => {
  it('has element', async () => {
    fetchMock.get(FETCH_ALL_DOGS_API, {
      message: { affenpinscher: [], african: [], airedale: [], akita: [] },
    });

    const component = (
      <Provider store={store}>
        <Dogs testID="testFlatList" />
      </Provider>
    );
    const { getByTestId, getByText } = render(component);

    // expect(getByText('Slide to fetch :)'));

    const dogsList = getByTestId('testFlatList');
    fireEvent(dogsList, 'refresh');

    await waitFor(() => expect(getByText(/african/i)));
    // await waitFor(() => expect(dogsList.props.items.length).toBeGreaterThan(0));
    // await waitFor(() => {
    //   const dogsState = store.getState().dogs;
    //   console.log(dogsState);
    //   expect(dogsState.records.length).toBeGreaterThan(0);
    // });
  });
});
