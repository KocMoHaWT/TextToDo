import React from 'react';
import FilterLink from './components/FilterLink';
import { VisibilityFilters } from '../../../redux/action/types';

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <FilterLink filter={VisibilityFilters.SHOW_ALL} text="All" />
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} text="In progress" />
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} text="Competed" />
      </ul>
    </div>
  );
}

export default SideBar;
