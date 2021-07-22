import { IState } from 'reducers/todos';
import TodosViewModel from 'reducers/TodosViewModel';

describe('<Todos />', () => {
  it('Todos list has given elements and must push them ordered asc', async () => {
    const initialState: IState = {
      todosList: [],
    };
    const viewModel = new TodosViewModel(initialState);

    viewModel.addTodo('fred');
    viewModel.addTodo('albert');
    viewModel.addTodo('zoe');
    viewModel.addTodo('james');

    expect(viewModel.todosList).toStrictEqual(['albert', 'fred', 'james', 'zoe']);
  });
});
