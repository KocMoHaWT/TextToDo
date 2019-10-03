import React from 'react';
import PropTypes from 'prop-types';
import AddTask from './components/AddTask';

function TasksView({ children }) {
  return (
    <div>
      <ul className="task__list">
        {children}
      </ul>
      <AddTask />
    </div>
  );
}

TasksView.propTypes = {
  children: PropTypes.node.isRequired
};

export default TasksView;
