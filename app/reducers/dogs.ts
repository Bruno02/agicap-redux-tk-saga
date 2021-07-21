/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { shuffle } from 'lodash';

const NAME = 'dogs';

interface IState {
  loading: boolean;
  records?: string[];
  error?: string;
}

const initialState: IState = {
  loading: false,
  error: undefined,
};

export const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    fetchDogsStart: (state) => {
      state.loading = true;
    },
    fetchDogsSuccess: (state, action: PayloadAction<string[]>) => {
      state.records = shuffle(action.payload);
      state.loading = false;
    },
    fetchDogsError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload.message;
      state.loading = false;
    },
  },
});

export const { fetchDogsStart, fetchDogsSuccess, fetchDogsError } = slice.actions;

export const selectLoading = (state: RootState): boolean => state.dogs.loading;
export const selectDogs = (state: RootState): string[] => state.dogs.records;

export default slice.reducer;
