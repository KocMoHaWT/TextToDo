import {
  ADD_TO_DO, REMOVE_TO_DO, SET_VISIBILITY_FILTER, TOGGLE_TO_DO, VisibilityFilters
} from '../action/types';


const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function toDoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter };
    case ADD_TO_DO:
      return {
        ...state,
        todos: [
          ...state.todos, { id: action.id, text: action.text, completed: false }
        ]
      };
    case REMOVE_TO_DO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.id) };
    case TOGGLE_TO_DO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    default:
      return state;
  }
}

export default toDoApp;
