/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import TodosViewModel from './TodosViewModel';

const NAME = 'todos';

export interface IState {
  todosList: string[];
}

const initialState: IState = {
  todosList: [],
};

const viewModel = new TodosViewModel(initialState);

export const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      viewModel.state = state;
      viewModel.addTodo(action.payload);
      state.todosList = viewModel.todosList;
    },
    resetTodosList: (state) => {
      viewModel.state = state;
      viewModel.resetTodosList();
      state.todosList = viewModel.todosList;
    },
  },
});

export const { addTodo, resetTodosList } = slice.actions;

export const selecTodosList = (state: RootState) => state.todos.todosList;

export default slice.reducer;
