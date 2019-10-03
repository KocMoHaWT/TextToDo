import { ADD_TO_DO } from './types';

let nextToDo = 0;
const addToDo = (text) => {
  // eslint-disable-next-line no-return-assign
  return {
    type: ADD_TO_DO,
    id: nextToDo += 1,
    text
  };
};

export default addToDo;
