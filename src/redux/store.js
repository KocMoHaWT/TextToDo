import { createStore } from 'redux';
import toDoApp from './reducers/todoApp';
import { VisibilityFilters } from './action/types';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

const store = createStore(toDoApp, initialState);

export default store;
