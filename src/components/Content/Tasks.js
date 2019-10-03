import React from 'react';
import PropTypes from 'prop-types';
import TasksView from './TasksView';

function Tasks({ todos, handleToggle, handleDelete }) {
  const renderTasks = () => {
    return todos.map((todo) => {
      return (
        <li key={todo.id}>
          <label
            htmlFor="checkbox"
            className={todo.completed ? 'completed label' : 'label'}
          >
            <input
              type="checkbox"
              className="checkbox"
              name="checkbox"
              onClick={() => handleToggle(todo.id)}
            />
            {todo.text}
          </label>

          <div
            role="button"
            tabIndex="0"
            className="delete"
            onKeyPress={() => handleDelete(todo.id)}
            onClick={() => handleDelete(todo.id)}
          >
            x
          </div>
        </li>
      );
    });
  };
  return (
    <TasksView>
      {renderTasks()}
    </TasksView>
  );
}

Tasks.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Tasks;
