/* eslint-disable no-underscore-dangle */
import { orderBy } from 'lodash';
import { IState } from './todos';

class TodosViewModel {
  private _todosList: string[] = [];

  get todosList() {
    return this._todosList;
  }

  private _state: IState;

  set state(value: IState) {
    this._state = value;
    this._todosList = value.todosList;
  }

  constructor(state: IState) {
    this.state = state;
  }

  addTodo(todo: string): void {
    this._todosList = orderBy([...this.todosList, todo], [], ['asc']);
  }

  resetTodosList(): void {
    this._todosList = [];
  }
}

export default TodosViewModel;
