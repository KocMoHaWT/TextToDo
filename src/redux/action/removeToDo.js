import { REMOVE_TO_DO } from './types';

const removeToDo = (id) => {
  return {
    type: REMOVE_TO_DO,
    id
  };
};

export default removeToDo;
