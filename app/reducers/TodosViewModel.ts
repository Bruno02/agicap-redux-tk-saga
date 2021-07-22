/* eslint-disable no-underscore-dangle */
import { orderBy } from 'lodash';
import { IState } from './todos';

class TodosViewModel {
  todosList: string[] = [];

  _state: IState;

  set state(value: IState) {
    this._state = value;
    this.todosList = value.todosList;
  }

  constructor(state: IState) {
    this.state = state;
  }

  addTodo(todo: string): void {
    this.todosList = orderBy([...this.todosList, todo], [], ['asc']);
  }
}

export default TodosViewModel;
