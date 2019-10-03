import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toggleToDo from '../../redux/action/toggleToDo';
import removeToDo from '../../redux/action/removeToDo';
import Tasks from './Tasks';

function Content(props) {
  const {
    todos, visibilityFilter, toggle, remove
  } = props;
  const [search, setSearchValue] = useState({ value: '' });

  const handleSearch = (e) => {
    setSearchValue({ value: e.target.value });
  };

  const handleToggle = (id) => {
    return toggle(id);
  };

  const handleDelete = (id) => {
    return remove(id);
  };

  const filterTasks = () => {
    switch (visibilityFilter) {
      case 'SHOW_ACTIVE':
        return todos.filter((todo) => !todo.completed);
      case 'SHOW_COMPLETED':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="content">
      <div className="search">
        <label htmlFor="search">
          Search:
          <input type="text" onChange={handleSearch} name="search" />
        </label>
      </div>
      <Tasks
        todos={search.value ? filterTasks()
          .filter((todo) => todo.text === search.value) : filterTasks()}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (id) => dispatch(toggleToDo(id)),
  remove: (id) => dispatch(removeToDo(id))
});

Content.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
