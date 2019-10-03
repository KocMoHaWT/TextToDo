import { TOGGLE_TO_DO } from './types';

const toggleToDo = (id) => {
  return {
    type: TOGGLE_TO_DO,
    id
  };
};

export default toggleToDo;
