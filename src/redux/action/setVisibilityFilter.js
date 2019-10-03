import { SET_VISIBILITY_FILTER } from './types';

const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

export default setVisibilityFilter;
